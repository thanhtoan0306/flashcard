class SpeechService {
  private chineseVoice: SpeechSynthesisVoice | null = null;
  private isSpeaking = false;

  constructor() {
    this.loadChineseVoice();
    if ('onvoiceschanged' in window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = () => this.loadChineseVoice();
    }
  }

  private loadChineseVoice(): void {
    const voices = window.speechSynthesis.getVoices();
    this.chineseVoice = voices.find(
      voice =>
        voice.lang.startsWith('zh-') ||
        voice.lang.includes('cmn-') ||
        voice.name.toLowerCase().includes('chinese') ||
        voice.name.toLowerCase().includes('mandarin')
    );

    if (!this.chineseVoice) {
      console.warn('Không tìm thấy giọng tiếng Trung cụ thể. Sử dụng giọng mặc định.');
    }
  }

  speak(text: string, onStart?: () => void, onEnd?: () => void): void {
    if (this.isSpeaking) {
      this.stop();
    }

    if (!window.speechSynthesis) {
      console.error('Trình duyệt không hỗ trợ Web Speech API.');
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text.replace(/ /g, ''));

    if (this.chineseVoice) {
      utterance.voice = this.chineseVoice;
    } else {
      utterance.lang = 'zh-CN';
    }

    utterance.rate = 0.8;

    utterance.onstart = () => {
      this.isSpeaking = true;
      onStart?.();
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      onEnd?.();
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      onEnd?.();
      console.error('Lỗi phát âm Web Speech');
    };

    window.speechSynthesis.speak(utterance);
  }

  stop(): void {
    window.speechSynthesis.cancel();
    this.isSpeaking = false;
  }

  getIsSpeaking(): boolean {
    return this.isSpeaking;
  }
}

export const speechService = new SpeechService();
