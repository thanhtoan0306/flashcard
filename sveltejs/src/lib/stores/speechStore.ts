import { writable, get } from 'svelte/store';
import { browser } from '$app/environment';

export const isSpeaking = writable<boolean>(false);
let chineseVoice: SpeechSynthesisVoice | null = null;
let voiceLoaded = false;

function loadChineseVoice() {
  if (!browser || !window.speechSynthesis) return;

  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find(
    (v) =>
      v.lang.startsWith('zh-') ||
      v.lang.includes('cmn-') ||
      v.name.toLowerCase().includes('chinese') ||
      v.name.toLowerCase().includes('mandarin')
  );

  if (voice) {
    chineseVoice = voice;
    voiceLoaded = true;
  } else {
    console.warn('Không tìm thấy giọng tiếng Trung cụ thể. Sử dụng giọng mặc định.');
  }
}

// Initialize voice loading
if (browser) {
  loadChineseVoice();
  if (window.speechSynthesis && 'onvoiceschanged' in window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = loadChineseVoice;
  }
}

export function speakChinese(textToSpeak: string, onEnd?: () => void) {
  if (!browser || !window.speechSynthesis) {
    console.error('Trình duyệt không hỗ trợ Web Speech API.');
    return;
  }

  // Dừng phát âm cũ nếu đang có
  if (get(isSpeaking)) {
    window.speechSynthesis.cancel();
    isSpeaking.set(false);
  }

  const utterance = new SpeechSynthesisUtterance(textToSpeak.replace(/ /g, ''));

  if (chineseVoice) {
    utterance.voice = chineseVoice;
  } else {
    utterance.lang = 'zh-CN';
  }

  utterance.rate = 0.8;

  utterance.onstart = () => {
    isSpeaking.set(true);
  };

  utterance.onend = () => {
    isSpeaking.set(false);
    if (onEnd) onEnd();
  };

  utterance.onerror = (event) => {
    isSpeaking.set(false);
    console.error('Lỗi phát âm Web Speech:', event.error);
    if (onEnd) onEnd();
  };

  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  if (browser && window.speechSynthesis) {
    window.speechSynthesis.cancel();
    isSpeaking.set(false);
  }
}
