// This function simulates a dice roll and outputs the result
function playCraps() {
    // Generate random values for the dice rolls
    var die1 = Math.floor(Math.random() * 6) + 1;  // Roll for die 1 (random number between 1 and 6)
    var die2 = Math.floor(Math.random() * 6) + 1;  // Roll for die 2 (random number between 1 and 6)

    // Calculate the sum of the dice
    var sum = die1 + die2;

    // Check if the sum is 7 or 11 (a losing roll in Craps)
    if (sum == 7 || sum == 11) {
        // Output the result if the sum is 7 or 11 (player loses)
        document.getElementById("gameResult").innerHTML = "CRAPS – You lose! Dice: " + die1 + " and " + die2 + ". Sum: " + sum;
    }
    // Check if the dice are equal and both even (a winning condition)
    else if (die1 === die2 && die1 % 2 === 0) {
        // Output the result if the player rolls doubles and both dice are even
        document.getElementById("gameResult").innerHTML = "You won! Doubles with even numbers: " + die1 + " and " + die2;
    }
    // In all other cases, it's a push (no win/loss)
    else {
        // Output the result for a push (neither win nor loss)
        document.getElementById("gameResult").innerHTML = "You pushed! Dice: " + die1 + " and " + die2 + ". Sum: " + sum;
    }
}

// Additional function to handle input and output results dynamically
function displayInputResult(inputValue) {
    // Output the input value entered by the user
    document.getElementById("gameResult").innerHTML = "You entered: " + inputValue;
}
