package main

// Word represents a related word
type Word struct {
	Hanzi   string `json:"hanzi"`
	Pinyin  string `json:"pinyin"`
	Hanviet string `json:"hanviet"`
}

// CharData represents character analysis data
type CharData struct {
	Hanzi   string  `json:"hanzi"`
	Pinyin  string  `json:"pinyin"`
	Hanviet string  `json:"hanviet"`
	Words   []Word  `json:"words,omitempty"`
}

// Flashcard represents a single flashcard
type Flashcard struct {
	Hanzi      string   `json:"hanzi"`
	Pinyin     string   `json:"pinyin"`
	Hanviet    string   `json:"hanviet"`
	Vietnamese string   `json:"vietnamese"`
	Char1      *CharData `json:"char1,omitempty"`
	Char2      *CharData `json:"char2,omitempty"`
}

// Topic represents a topic/category
type Topic struct {
	Name string `json:"name"`
	File string `json:"file"`
}
