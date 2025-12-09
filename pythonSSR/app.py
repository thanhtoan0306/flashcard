from flask import Flask, render_template, request
import json
import os
from pathlib import Path

app = Flask(__name__)

# Configuration
JSON_DIR = Path(__file__).parent / "data"
JSON_FILES = [
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
]


def check_json_file_exists(filename):
    """Check if JSON file exists"""
    filepath = JSON_DIR / filename
    return filepath.exists()


def scan_and_create_topics():
    """Scan and create topics list from available JSON files"""
    topics = []
    
    for filename in JSON_FILES:
        if check_json_file_exists(filename):
            display_name = filename.replace('.json', '').replace('_', ' ').title()
            topics.append({
                'name': display_name,
                'file': filename
            })
    
    return topics


def load_flashcards(filename):
    """Load flashcards from JSON file"""
    filepath = JSON_DIR / filename
    
    if not filepath.exists():
        return None
    
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    return data


@app.route('/')
def index():
    """Main page handler"""
    topic_index = int(request.args.get('topic', 0))
    card_index = int(request.args.get('card', 0))
    
    return render_template('index.html', 
                         topic_index=topic_index, 
                         card_index=card_index)


@app.route('/card')
def card():
    """Card fragment handler"""
    topic_index = int(request.args.get('topic', 0))
    card_index = int(request.args.get('card', 0))
    
    topics = scan_and_create_topics()
    
    # Validate topic index
    if topic_index < 0 or topic_index >= len(topics):
        topic_index = 0
    
    current_topic = topics[topic_index]
    flashcards = load_flashcards(current_topic['file'])
    
    if flashcards is None:
        return '<div class="text-center text-red-600 p-8">Error loading flashcards</div>', 500
    
    # Validate card index
    if card_index < 0 or card_index >= len(flashcards):
        card_index = 0
    
    current_card = flashcards[card_index]
    
    return render_template('card.html',
                         card=current_card,
                         card_index=card_index,
                         total_cards=len(flashcards))


@app.route('/controls')
def controls():
    """Controls fragment handler"""
    topic_index = int(request.args.get('topic', 0))
    card_index = int(request.args.get('card', 0))
    
    topics = scan_and_create_topics()
    
    # Validate topic index
    if topic_index < 0 or topic_index >= len(topics):
        topic_index = 0
    
    current_topic = topics[topic_index]
    flashcards = load_flashcards(current_topic['file'])
    
    if flashcards is None:
        flashcards = []
    
    # Validate card index
    if card_index < 0 or card_index >= len(flashcards):
        card_index = 0
    
    # Calculate prev/next indices
    prev_card_index = max(0, card_index - 1)
    next_card_index = min(len(flashcards) - 1, card_index + 1) if flashcards else 0
    
    return render_template('controls.html',
                         topics=topics,
                         topic_index=topic_index,
                         card_index=card_index,
                         total_cards=len(flashcards),
                         current_topic=current_topic,
                         prev_card_index=prev_card_index,
                         next_card_index=next_card_index)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)
