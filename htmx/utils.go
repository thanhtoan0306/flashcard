package main

import (
	"encoding/json"
	"fmt"
	"html/template"
	"io/ioutil"
	"os"
	"path/filepath"
	"strings"
	"unicode"
)

const (
	jsonDir = "./data"
)

var jsonFiles = []string{
	"default.json",
	"hospital.json",
	"kitchen.json",
	"body.json",
	"smartphone.json",
	"planets.json",
	"dinosaurs.json",
	"study_supplies.json",
	"vegetables.json",
	"dishes.json",
	"drinking.json",
	"radicals.json",
}

// checkJsonFileExists checks if a JSON file exists
func checkJsonFileExists(filename string) bool {
	filepath := filepath.Join(jsonDir, filename)
	_, err := os.Stat(filepath)
	return err == nil
}

// scanAndCreateTopics scans for available JSON files and creates topics list
func scanAndCreateTopics() []Topic {
	var topics []Topic

	for _, filename := range jsonFiles {
		if checkJsonFileExists(filename) {
			displayName := strings.ReplaceAll(filename, ".json", "")
			displayName = strings.ReplaceAll(displayName, "_", " ")
			displayName = toTitleCase(displayName)

			topics = append(topics, Topic{
				Name: displayName,
				File: filename,
			})
		}
	}

	return topics
}

// loadFlashcards loads flashcards from a JSON file
func loadFlashcards(filename string) ([]Flashcard, error) {
	filepath := filepath.Join(jsonDir, filename)

	data, err := ioutil.ReadFile(filepath)
	if err != nil {
		return nil, err
	}

	var flashcards []Flashcard
	if err := json.Unmarshal(data, &flashcards); err != nil {
		return nil, err
	}

	return flashcards, nil
}

// escapeHTML escapes HTML special characters
func escapeHTML(s string) template.HTML {
	return template.HTML(template.HTMLEscapeString(s))
}

// formatTopicName formats a filename into a display name
func formatTopicName(filename string) string {
	name := strings.ReplaceAll(filename, ".json", "")
	name = strings.ReplaceAll(name, "_", " ")
	return toTitleCase(name)
}

// toTitleCase converts a string to title case
func toTitleCase(s string) string {
	words := strings.Fields(strings.ToLower(s))
	for i, word := range words {
		if len(word) > 0 {
			runes := []rune(word)
			runes[0] = unicode.ToUpper(runes[0])
			words[i] = string(runes)
		}
	}
	return strings.Join(words, " ")
}

// validateIndex validates and normalizes an index
func validateIndex(index, max int) int {
	if index < 0 {
		return 0
	}
	if index >= max {
		return max - 1
	}
	return index
}

// getTopicByIndex gets a topic by its index
func getTopicByIndex(index int) (*Topic, error) {
	topics := scanAndCreateTopics()
	if index < 0 || index >= len(topics) {
		return nil, fmt.Errorf("invalid topic index: %d", index)
	}
	return &topics[index], nil
}
