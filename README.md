# **Santa’s Emoji Hack – JavaScriptmas Day 3**

### A small JavaScript mini‑project that takes a user’s phrase and transforms valid :emoji: codes into real emojis.
### The app shows both the original text and the emojified version using simple DOM manipulation.

🧩 ## **About the challenge**
### This project was created as part of the Scrimba JavaScriptmas challenges, which I completed to practice JavaScript and DOM manipulation.
### I’m using these challenges to build small, independent projects outside of FCC and CYF, to show variety in my learning path.

✨ ## **Features**
### Detects words written in the format :emoji:

### Converts them only if they match a valid emoji in the dictionary

### Leaves the word unchanged if it has punctuation (like :puke:!)

### Displays both the original and transformed text on screen

### Uses basic JavaScript: split, map, join, conditionals, and DOM updates

🧠 ## **How it works**
### The user enters a phrase

### The script splits the phrase into words

### Each word is checked:

### If it starts and ends with : → try to convert

### If it’s in the emoji dictionary → replace it

### Otherwise → leave it as is

### The result is shown inside the HTML element with id="result"

📁 ## **Files**
### index.html – main page

### index.js – JavaScript logic (loaded as a module)

🚀 ## **What I learned**
## How to manipulate the DOM with getElementById and innerText

## How to process strings using split, map, and join

## How to check patterns like startsWith() and endsWith()

## How to build a small interactive tool without a tutorial

🎄 ## **Why this project**
### This is one of the JavaScriptmas challenges from Scrimba — short, fun exercises that help build real JavaScript skills through small, self‑contained projects.
