// Array of words for story generation
const subjects = ["A funky alien", "A rad skateboarder", "A cool robot", "A groovy DJ", "A tubular ninja"];
const verbs = ["shreds", "flies", "boogies", "jumps", "zooms"];
const adjectives = ["awesome", "radical", "neon", "crazy", "tubular"];
const objects = ["a laser beam", "a flying disc", "a walkman", "a surfboard", "a skateboard"];
const places = ["in a neon city", "on a space station", "at the roller rink", "in the arcade", "on the moon"];

// Variables to store selected words
let selectedSubject = "", selectedVerb = "", selectedAdjective = "", selectedObject = "", selectedPlace = "";
let textToSpeak = "";

// Function to generate random word from array
function getRandomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function to update the displayed story
function updateStory() {
    const subject = selectedSubject || "___";
    const verb = selectedVerb || "___";
    const adjective = selectedAdjective || "___";
    const object = selectedObject || "___";
    const place = selectedPlace || "___";

    textToSpeak = `${subject} ${verb} a ${adjective} ${object} ${place}.`;
    document.getElementById('story').textContent = textToSpeak;
}

// Event listeners for word buttons
document.getElementById('subjectBtn').addEventListener('click', () => {
    selectedSubject = getRandomWord(subjects);
    updateStory();
});

document.getElementById('verbBtn').addEventListener('click', () => {
    selectedVerb = getRandomWord(verbs);
    updateStory();
});

document.getElementById('adjectiveBtn').addEventListener('click', () => {
    selectedAdjective = getRandomWord(adjectives);
    updateStory();
});

document.getElementById('objectBtn').addEventListener('click', () => {
    selectedObject = getRandomWord(objects);
    updateStory();
});

document.getElementById('placeBtn').addEventListener('click', () => {
    selectedPlace = getRandomWord(places);
    updateStory();
});

// Function to generate a random story
function generateRandomStory() {
    selectedSubject = getRandomWord(subjects);
    selectedVerb = getRandomWord(verbs);
    selectedAdjective = getRandomWord(adjectives);
    selectedObject = getRandomWord(objects);
    selectedPlace = getRandomWord(places);
    updateStory();
}

// Event listener for the random story button
document.getElementById('randomBtn').addEventListener('click', generateRandomStory);

// Speak the generated story
document.getElementById('speakBtn').addEventListener('click', () => {
    if (textToSpeak.includes("___")) {
        alert("Please complete the story by selecting all parts.");
    } else {
        speakNow(textToSpeak);
    }
});

// Reset the story
document.getElementById('resetBtn').addEventListener('click', () => {
    selectedSubject = selectedVerb = selectedAdjective = selectedObject = selectedPlace = "";
    textToSpeak = "";
    document.getElementById('story').textContent = "Your story will be displayed here...";
});

// Function to speak the story using SpeechSynthesis API
function speakNow(text) {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}
