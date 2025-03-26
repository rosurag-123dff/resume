const paragraphs = [
    `The sun was setting over the horizon, casting a warm orange glow across the sky. Birds were chirping, and the cool breeze carried the scent of fresh flowers. It was a peaceful evening, the kind that makes you pause and appreciate the beauty of the world. The city lights were beginning to flicker on, illuminating the streets below. Cars moved steadily, their headlights forming streaks of light. Somewhere in the distance, laughter echoed through the alleys, as people gathered for an evening of conversation and joy. This moment, simple yet profound, was a reminder of life's fleeting beauty. Nature and urban life blended together in a perfect symphony, where every sound and color played its part in the grand melody of existence. Time moved forward, as it always did, carrying stories untold, memories unmade, and dreams waiting to unfold.`,
    `In the heart of the bustling city, life moved at an unrelenting pace. People hurried down the sidewalks, their footsteps blending into a rhythmic symphony of the urban jungle. Street vendors called out their wares, the aroma of freshly baked bread and sizzling food filling the air. The chatter of countless conversations wove together into an intricate tapestry of human connection. Amidst the chaos, a musician strummed a gentle melody on his guitar, his music a stark contrast to the surrounding noise. The city was alive, constantly evolving, a place where dreams were made and broken, where every corner held a story waiting to be discovered.`,
];
let startTime, selectedText, timerInterval, elapsedTime = 0;

function startGame() {
    selectedText = paragraphs[Math.floor(Math.random() * paragraphs.length)];
    document.getElementById("quote").innerText = "Type this:";
    document.getElementById("displayText").innerHTML = generateColoredText("", selectedText);
    document.getElementById("userInput").value = "";
    document.getElementById("userInput").disabled = false;
    document.getElementById("userInput").focus();
    document.getElementById("result").innerText = "";
    
    // Reset and start the timer
    elapsedTime = 0;
    document.getElementById("timer").innerText = `Time: 0s`;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        elapsedTime++;
        document.getElementById("timer").innerText = `Time: ${elapsedTime}s`;
    }, 1000);
    
    startTime = new Date().getTime();
}

function checkTyping() {
    let userText = document.getElementById("userInput").value;
    document.getElementById("displayText").innerHTML = generateColoredText(userText, selectedText);
}

function generateColoredText(userText, sentence) {
    let coloredText = "";
    for (let i = 0; i < sentence.length; i++) {
        if (i < userText.length) {
            if (userText[i] === sentence[i]) {
                coloredText += `<span class="correct">${sentence[i]}</span>`;
            } else {
                coloredText += `<span class="incorrect">${sentence[i]}</span>`;
            }
        } else {
            coloredText += `<span>${sentence[i]}</span>`;
        }
    }
    return coloredText;
}

function checkSpeed() {
    let userText = document.getElementById("userInput").value.trim();
    clearInterval(timerInterval);
    
    let endTime = new Date().getTime();
    let timeTaken = (endTime - startTime) / 1000; // Time in seconds

    if (userText === selectedText) {
        let words = selectedText.split(" ").length;
        let speed = (words / elapsedTime) * 60; // Words per minute
        document.getElementById("result").innerText = `✅ You typed at ${speed.toFixed(2)} words per minute in ${elapsedTime} seconds!`;
    } else {
        document.getElementById("result").innerText = "❌ Incorrect text! Try again.";
    }
}

function createFloatingLetters() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    setInterval(() => {
        const letter = document.createElement("div");
        letter.classList.add("floating-letter");
        letter.innerText = letters[Math.floor(Math.random() * letters.length)];
        document.body.appendChild(letter);
        letter.style.left = Math.random() * window.innerWidth + "px";
        letter.style.top = window.innerHeight + "px";
        letter.style.animationDuration = (3 + Math.random() * 5) + "s";
        setTimeout(() => { letter.remove(); }, 8000);
    }, 200);
}

createFloatingLetters();