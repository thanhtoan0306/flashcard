<?php
// Configuration file

// JSON files to scan
define('JSON_FILES', [
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
]);

// Base directory for JSON files
define('JSON_DIR', __DIR__ . '/data/');

// Set JSON response header
header('Content-Type: application/json; charset=utf-8');
