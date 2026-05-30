const hackedEmojis = {
    ":angry:": "🎁",
    ":cry:": "😄",
    ":thumbsdown:": "👏",
    ":puke:": "🍫"
};

function emojifyWord(word) {
    if (word.startsWith(":") && word.endsWith(":")) {
        if (hackedEmojis[word]) {
            return hackedEmojis[word];
        }
    }
    return word;
}

function emojifyPhrase(phrase) {
    const words = phrase.split(" " );
    const emojifiedWords = words.map(emojifyWord);
    return emojifiedWords.join(" ");
}

const inputPhrase = "Just read your article :thumbsdown: and :puke:!";
const outputPhrase = emojifyPhrase(inputPhrase);

const resultElement = document.getElementById('result');
resultElement.innerText = `Original: ${inputPhrase}\n\nEmojified: ${outputPhrase}`;

// force update

