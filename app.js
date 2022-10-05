 // This is your main function that runs when the page loads
var name = prompt("What is your name?");
var guess = 7;
var player = prompt("Guess of a number between 1 and 10.");
var howMany = 1;
var guesses = [player];



play(player);

function play(num){
    
    if (num < guess) {
        alert("Nice try, " + name + ". " + "You guessed low.");
        num = prompt("Try again.");
        howMany++;
        guesses.push(num);
        play(num);
    } else if (num > guess) {
        alert("Nice try, " + name + ". " + "You guessed high.");
        num = prompt("Try again.");
        howMany++;
        guesses.push(num);
        play(num);
    } else if (num == guess) {
        alert("YOU WIN! YOUR TOTAL AMOUNT OF GUESSES WAS " + howMany + "!");
        alert("Your guesses were " + guesses +".");
        playAgain();
    }
}


function playAgain(){
    var again = prompt("Would you like to play again? Type 'Yes' or 'No'");
    if (again === "Yes") {
        play(prompt("Guess of a number between 1 and 10."));
    } else if (again === "No") {
        alert("Goodbye.");
    }
    
}
