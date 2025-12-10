export interface Topic {
  name: string;
  file: string;
}

export interface Word {
  hanzi: string;
  pinyin: string;
  hanviet: string;
}

export interface CharacterData {
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
  char1?: CharacterData;
  char2?: CharacterData;
}

const JSON_FILES = [
  'default.json',
  'hospital.json',
  'kitchen.json',
  'body.json',
  'smartphone.json',
  'planets.json',
  'dinosaurs.json',
  'study_supplies.json',
  'vegetables.json',
  'dishes.json',
  'drinking.json',
  'radicals.json'
];

export async function checkJsonFileExists(filename: string): Promise<boolean> {
  try {
    // Try with leading slash first (Astro serves public files from root)
    const response = await fetch(`/${filename}`, { 
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return true;
      }
    }
    
    return false;
  } catch (error) {
    console.warn(`File ${filename} không tìm thấy:`, error);
    return false;
  }
}

export async function scanAndCreateTopics(): Promise<Topic[]> {
  const topics: Topic[] = [];
  console.log('🔍 Bắt đầu scan các file JSON...');

  for (const filename of JSON_FILES) {
    console.log(`  - Đang kiểm tra: ${filename}`);
    const exists = await checkJsonFileExists(filename);
    if (exists) {
      const displayName = filename
        .replace('.json', '')
        .replace(/_/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
      topics.push({
        name: displayName,
        file: filename
      });
      console.log(`  ✅ Tìm thấy: ${filename}`);
    } else {
      console.log(`  ❌ Không tìm thấy: ${filename}`);
    }
  }

  console.log(`📚 Tổng cộng tìm thấy ${topics.length} topics:`, topics.map(t => t.file));
  return topics;
}

export async function loadFlashcards(topicIndex: number, topics: Topic[]): Promise<Flashcard[]> {
  if (topics.length === 0) {
    throw new Error('Không tìm thấy file JSON nào');
  }

  const topic = topics[topicIndex];
  if (!topic) {
    throw new Error(`Topic index ${topicIndex} không hợp lệ`);
  }

  console.log(`Đang fetch file: /${topic.file}`);
  
  try {
    // Astro serves files from public/ folder at root path
    const response = await fetch(`/${topic.file}`, {
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: Không thể tải file ${topic.file}`);
    }

    const flashcards: Flashcard[] = await response.json();
    
    if (!Array.isArray(flashcards)) {
      throw new Error(`File ${topic.file} không phải là array`);
    }
    
    if (flashcards.length === 0) {
      throw new Error(`File ${topic.file} rỗng`);
    }
    
    console.log(`Đã load thành công ${flashcards.length} flashcards từ ${topic.file}`);
    return flashcards;
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error(`Lỗi kết nối khi tải ${topic.file}. Kiểm tra lại đường dẫn và server.`);
    }
    throw error;
  }
}
