let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
    let userGuess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");
    let attemptsText = document.getElementById("attempts");

    attempts++;

    if (userGuess === randomNumber) {
        message.textContent = "🎉 Correct! You guessed it!";
        attemptsText.textContent = "Attempts: " + attempts;
    } 
    else if (userGuess > randomNumber) {
        message.textContent = "📉 Too high! Try again.";
        attemptsText.textContent = "Attempts: " + attempts;
    } 
    else {
        message.textContent = "📈 Too low! Try again.";
        attemptsText.textContent = "Attempts: " + attempts;
    }
}