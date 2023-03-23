var randomNumber = Math.floor(Math.random() * 100) + 1;

    function checkGuess() {
      var guess = document.getElementById('guess').value;
      var result = document.getElementById('result');
      
      if (guess == randomNumber) {
        result.innerHTML = "Congratulations! You guessed the number!";
      } else if (guess < randomNumber) {
        result.innerHTML = "Too low, try again.";
      } else {
        result.innerHTML = "Too high, try again.";
      }
    }