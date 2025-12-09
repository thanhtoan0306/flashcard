'use client';

import { useState, useEffect, useRef } from 'react';

export function useSpeech() {
  const [chineseVoice, setChineseVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    const loadChineseVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      const voice = voices.find(
        (v) =>
          v.lang.startsWith('zh-') ||
          v.lang.includes('cmn-') ||
          v.name.toLowerCase().includes('chinese') ||
          v.name.toLowerCase().includes('mandarin')
      );

      if (voice) {
        setChineseVoice(voice);
      } else {
        console.warn('Không tìm thấy giọng tiếng Trung cụ thể. Sử dụng giọng mặc định.');
      }
    };

    loadChineseVoice();
    if ('onvoiceschanged' in window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = loadChineseVoice;
    }

    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speakChinese = (textToSpeak: string, onEnd?: () => void) => {
    if (!window.speechSynthesis) {
      console.error('Trình duyệt không hỗ trợ Web Speech API.');
      return;
    }

    // Dừng phát âm cũ nếu đang có
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }

    const utterance = new SpeechSynthesisUtterance(textToSpeak.replace(/ /g, ''));

    if (chineseVoice) {
      utterance.voice = chineseVoice;
    } else {
      utterance.lang = 'zh-CN';
    }

    utterance.rate = 0.8;

    utterance.onstart = () => {
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      if (onEnd) onEnd();
    };

    utterance.onerror = (event) => {
      setIsSpeaking(false);
      console.error('Lỗi phát âm Web Speech:', event.error);
      if (onEnd) onEnd();
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return { speakChinese, stopSpeaking, isSpeaking };
}
