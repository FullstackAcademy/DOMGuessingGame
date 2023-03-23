var secretNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;

function checkGuess() {
	var guess = parseInt(document.getElementById("guessInput").value);
    attempts++;
	if (guess < 1 || guess > 100) {
		document.getElementById("result").innerHTML = "Please enter a number between 1 and 100.";
	} 
    if (attempts == 5) {
        document.getElementById("result").innerHTML = "Sorry, you didn't guess the number in time. The answer was " + secretNumber + ".";
        document.getElementById("attempts").innerHTML = "Click the button to play again.";
        document.getElementById("guessInput").disabled = true;
        document.getElementById("guessButton").innerHTML = "Play Again";
        document.getElementById("guessButton").onclick = function() {
			window.location.reload();
		}
    }
    else if (guess === secretNumber) {
		document.getElementById("result").innerHTML = "Congratulations, you guessed the number in " + attempts + " attempts!";
		document.getElementById("attempts").innerHTML = "Click the button to play again.";
		document.getElementById("guessInput").disabled = true;
		document.getElementById("guessButton").innerHTML = "Play Again";
		document.getElementById("guessButton").onclick = function() {
			window.location.reload();
		}
	} 
    else if (guess < secretNumber) {
		document.getElementById("result").innerHTML = "Too low, try again!";
		document.getElementById("attempts").innerHTML = "Attempts: " + attempts;
	} 
    else {
		document.getElementById("result").innerHTML = "Too high, try again!";
		document.getElementById("attempts").innerHTML = "Attempts: " + attempts;
	}
}