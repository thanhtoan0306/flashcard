package main

import (
	"html/template"
	"log"
	"net/http"
	"strconv"
)

var templates *template.Template

func init() {
	// Parse all templates
	templates = template.Must(template.New("").Funcs(template.FuncMap{
		"escapeHTML": escapeHTML,
		"add": func(a, b int) int { return a + b },
		"sub": func(a, b int) int { return a - b },
		"max": func(a, b int) int {
			if a > b {
				return a
			}
			return b
		},
		"min": func(a, b int) int {
			if a < b {
				return a
			}
			return b
		},
	}).ParseGlob("templates/*.html"))
}

func main() {
	// Routes
	http.HandleFunc("/", indexHandler)
	http.HandleFunc("/card", cardHandler)
	http.HandleFunc("/controls", controlsHandler)

	// Static files (if needed, but JSON files are read directly)
	// http.Handle("/data/", http.StripPrefix("/data/", http.FileServer(http.Dir("./data"))))

	log.Println("Server starting on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

// indexHandler handles the main page
func indexHandler(w http.ResponseWriter, r *http.Request) {
	topicIndex := 0
	cardIndex := 0

	if topicStr := r.URL.Query().Get("topic"); topicStr != "" {
		if idx, err := strconv.Atoi(topicStr); err == nil {
			topicIndex = idx
		}
	}

	if cardStr := r.URL.Query().Get("card"); cardStr != "" {
		if idx, err := strconv.Atoi(cardStr); err == nil {
			cardIndex = idx
		}
	}

	data := map[string]interface{}{
		"TopicIndex": topicIndex,
		"CardIndex":  cardIndex,
	}

	if err := templates.ExecuteTemplate(w, "index.html", data); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

// cardHandler handles card fragment requests
func cardHandler(w http.ResponseWriter, r *http.Request) {
	topicIndex := 0
	cardIndex := 0

	if topicStr := r.URL.Query().Get("topic"); topicStr != "" {
		if idx, err := strconv.Atoi(topicStr); err == nil {
			topicIndex = idx
		}
	}

	if cardStr := r.URL.Query().Get("card"); cardStr != "" {
		if idx, err := strconv.Atoi(cardStr); err == nil {
			cardIndex = idx
		}
	}

	topics := scanAndCreateTopics()
	if topicIndex < 0 || topicIndex >= len(topics) {
		topicIndex = 0
	}

	currentTopic := topics[topicIndex]
	flashcards, err := loadFlashcards(currentTopic.File)
	if err != nil {
		http.Error(w, "Error loading flashcards: "+err.Error(), http.StatusInternalServerError)
		return
	}

	if cardIndex < 0 || cardIndex >= len(flashcards) {
		cardIndex = 0
	}

	currentCard := flashcards[cardIndex]

	data := map[string]interface{}{
		"Card":      currentCard,
		"CardIndex": cardIndex,
		"TotalCards": len(flashcards),
	}

	if err := templates.ExecuteTemplate(w, "card.html", data); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

// controlsHandler handles controls fragment requests
func controlsHandler(w http.ResponseWriter, r *http.Request) {
	topicIndex := 0
	cardIndex := 0

	if topicStr := r.URL.Query().Get("topic"); topicStr != "" {
		if idx, err := strconv.Atoi(topicStr); err == nil {
			topicIndex = idx
		}
	}

	if cardStr := r.URL.Query().Get("card"); cardStr != "" {
		if idx, err := strconv.Atoi(cardStr); err == nil {
			cardIndex = idx
		}
	}

	topics := scanAndCreateTopics()
	if topicIndex < 0 || topicIndex >= len(topics) {
		topicIndex = 0
	}

	currentTopic := topics[topicIndex]
	flashcards, err := loadFlashcards(currentTopic.File)
	if err != nil {
		http.Error(w, "Error loading flashcards: "+err.Error(), http.StatusInternalServerError)
		return
	}

	if cardIndex < 0 || cardIndex >= len(flashcards) {
		cardIndex = 0
	}

	prevCardIndex := cardIndex - 1
	if prevCardIndex < 0 {
		prevCardIndex = 0
	}
	
	nextCardIndex := cardIndex + 1
	if nextCardIndex >= len(flashcards) {
		nextCardIndex = len(flashcards) - 1
	}

	data := map[string]interface{}{
		"Topics":        topics,
		"TopicIndex":    topicIndex,
		"CardIndex":     cardIndex,
		"TotalCards":    len(flashcards),
		"CurrentTopic":  currentTopic,
		"PrevCardIndex": prevCardIndex,
		"NextCardIndex": nextCardIndex,
	}

	if err := templates.ExecuteTemplate(w, "controls.html", data); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
