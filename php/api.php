<?php
require_once 'functions.php';

// Handle CORS if needed
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Content-Type: application/json; charset=utf-8');

$action = $_GET['action'] ?? '';

switch ($action) {
    case 'topics':
        // Return list of topics
        $topics = scanAndCreateTopics();
        echo json_encode($topics, JSON_UNESCAPED_UNICODE);
        break;
        
    case 'flashcards':
        // Return flashcards for a topic
        $filename = $_GET['file'] ?? '';
        
        if (empty($filename)) {
            http_response_code(400);
            echo json_encode(['error' => 'File parameter is required']);
            break;
        }
        
        $flashcards = loadFlashcards($filename);
        
        if ($flashcards === null) {
            http_response_code(404);
            echo json_encode(['error' => 'File not found or invalid JSON']);
            break;
        }
        
        echo json_encode($flashcards, JSON_UNESCAPED_UNICODE);
        break;
        
    default:
        http_response_code(400);
        echo json_encode(['error' => 'Invalid action']);
        break;
}
