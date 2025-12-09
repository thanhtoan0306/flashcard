<?php
require_once 'config.php';

/**
 * Check if JSON file exists
 */
function checkJsonFileExists($filename) {
    $filepath = JSON_DIR . $filename;
    return file_exists($filepath);
}

/**
 * Scan and create topics list from available JSON files
 */
function scanAndCreateTopics() {
    $topics = [];
    
    foreach (JSON_FILES as $filename) {
        if (checkJsonFileExists($filename)) {
            $displayName = str_replace('.json', '', $filename);
            $displayName = str_replace('_', ' ', $displayName);
            $displayName = ucwords($displayName);
            
            $topics[] = [
                'name' => $displayName,
                'file' => $filename
            ];
        }
    }
    
    return $topics;
}

/**
 * Load flashcards from JSON file
 */
function loadFlashcards($filename) {
    $filepath = JSON_DIR . $filename;
    
    if (!file_exists($filepath)) {
        return null;
    }
    
    $content = file_get_contents($filepath);
    $data = json_decode($content, true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        return null;
    }
    
    return $data;
}

/**
 * Get topic by index
 */
function getTopicByIndex($index) {
    $topics = scanAndCreateTopics();
    
    if (isset($topics[$index])) {
        return $topics[$index];
    }
    
    return null;
}

/**
 * Escape HTML special characters
 */
function e($string) {
    return htmlspecialchars($string, ENT_QUOTES, 'UTF-8');
}

/**
 * Format topic name from filename
 */
function formatTopicName($filename) {
    $name = str_replace('.json', '', $filename);
    $name = str_replace('_', ' ', $name);
    return ucwords($name);
}
