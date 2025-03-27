document.getElementById("generateBtn").addEventListener("click", function() {
    const userMessage = document.getElementById("userMessage").value.trim();
    const repeatCount = parseInt(document.getElementById("repeatCount").value);

    if (userMessage === "") {
        alert("Please enter a message!");
        return;
    }

    if (isNaN(repeatCount) || repeatCount < 1) {
        alert("Please enter a valid number greater than 0!");
        return;
    }

    let output = "";
    for (let i = 1; i <= repeatCount; i++) {
        output += `${i}. ${userMessage}\n`;
    }

    document.getElementById("messageBox").innerText = output;
});

document.getElementById("copyBtn").addEventListener("click", function() {
    const messageText = document.getElementById("messageBox").innerText;
    
    if (messageText) {
        navigator.clipboard.writeText(messageText);
        alert("Message copied!");
    } else {
        alert("No message to copy!");
    }
});
