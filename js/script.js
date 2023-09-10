var totalAttempts = 0;
var correctAttempts = 0;

var guessBox = document.getElementById("guess");

guessBox.addEventListener("click", function() {
  guessBox.value = "";
});

function evaluateGuess() {
    var randomNumber = Math.floor ( Math.random() * 11);
    var inputNumber = document.getElementById("guess").value;

    if ( inputNumber === "" ){
        document.getElementById("result").innerHTML = "Please enter a number.";
    }
    else {
        totalAttempts++;
        if ( randomNumber == inputNumber ){
            correctAttempts++;
            document.getElementById("randomNumber").innerHTML = randomNumber;
            document.getElementById("result").innerHTML = "Yeeee! Nice Try.";
        }
        else {
            document.getElementById("randomNumber").innerHTML = randomNumber;
            document.getElementById("result").innerHTML = "Ooops! Bad Luck.";
        }

        // Calculate the percentage of correct attempts
        var percentage = (correctAttempts / totalAttempts) * 100;
        document.getElementById("percentage").innerHTML = percentage.toFixed(2) + "%";

        document.getElementById("guess").value = "";
        // Update the color of the bar based on the percentage
        var bar = document.getElementById("bar");
        if (percentage == 0) {
            bar.style.backgroundColor = "#E7FFFE";
            document.getElementById("quate").innerHTML = "Your Luck is Gone";
        }
        else if(percentage <= 10){
            bar.style.background = "linear-gradient(to right, #FF6060 10%, #E7FFFE 10%";
            document.getElementById("quate").innerHTML = "Please, Don't Bet :3";
        }
        else if(percentage <= 20){
            bar.style.background = "linear-gradient(to right, #FF6060 20%, #E7FFFE 10%";
            document.getElementById("quate").innerHTML = "Please, Don't Bet :3";
        }
        else if(percentage <= 30){
            bar.style.background = "linear-gradient(to right, #FFAC60 30%, #E7FFFE 10%";
            document.getElementById("quate").innerHTML = "It's Time to Plan";
        }
        else if(percentage <= 40){
            bar.style.background = "linear-gradient(to right, #FFAC60 40%, #E7FFFE 10%";
            document.getElementById("quate").innerHTML = "It's Time to Plan";
        }
        else if(percentage <= 50){
            bar.style.background = "linear-gradient(to right, #75CDFF 50%, #E7FFFE 10%";
            document.getElementById("quate").innerHTML = "Not Bad! Not Bad!";
        }
        else if(percentage <= 60){
            bar.style.background = "linear-gradient(to right, #75CDFF 60%, #E7FFFE 10%";
            document.getElementById("quate").innerHTML = "Not Bad! Not Bad!";
        }
        else if(percentage <= 70){
            bar.style.background = "linear-gradient(to right, #75FF83 70%, #E7FFFE 10%";
            document.getElementById("quate").innerHTML = "Wow, I'm Surprised :o";
        }
        else if(percentage <= 80){
            bar.style.background = "linear-gradient(to right, #75FF83 80%, #E7FFFE 10%";
            document.getElementById("quate").innerHTML = "Wow, I'm Surprised :o";
        }
        else if(percentage <= 90){
            bar.style.background = "linear-gradient(to right, #75FF83 90%, #E7FFFE 10%";
            document.getElementById("quate").innerHTML = "Wow, I'm Surprised :o";
        }
        else if(percentage <= 100){
            bar.style.background = "#75FF83";
            document.getElementById("quate").innerHTML = "You're SO Lucky!";
        }
    }
}

document.getElementById("guessCheck").onclick = evaluateGuess;

document.getElementById("guess").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        // 13 is the keyboard code for the Enter key
        evaluateGuess();
    }
});

