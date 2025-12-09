export interface Word {
  hanzi: string;
  pinyin: string;
  hanviet: string;
}

export interface CharData {
  hanzi: string;
  pinyin: string;
  hanviet: string;
  words?: Word[];
}

export interface Flashcard {
  hanzi: string;
  pinyin: string;
  hanviet: string;
  vietnamese: string;
  char1?: CharData;
  char2?: CharData;
}

export interface Topic {
  name: string;
  file: string;
}
