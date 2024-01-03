var userScore = 0;
var compScore = 0;
var choices = document.querySelectorAll(".choice");
var msg = document.querySelector("#msg");
var userScorePara = document.querySelector("#user_score");
var compScorePara = document.querySelector("#comp_score");
var genCompChoice = function () {
    var options = ["rock", "paper", "scissors"];
    var randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};
var draw = function () {
    if (msg) {
        msg.innerText = "Game was draw. Play again";
        msg.style.backgroundColor = "#081b31";
    }
};
var showWinner = function (userWin, userChoice, compChoice) {
    if (userWin) {
        userScore++;
        if (userScorePara)
            userScorePara.innerText = userScore.toString();
        if (msg) {
            msg.innerText = "You Win!  your ".concat(userChoice, " beats ").concat(compChoice);
            msg.style.backgroundColor = "green";
        }
    }
    else {
        compScore++;
        if (compScorePara)
            compScorePara.innerText = compScore.toString();
        if (msg) {
            msg.innerText = "You Lost! ".concat(compChoice, " beats your ").concat(userChoice);
            msg.style.backgroundColor = "red";
        }
    }
};
var playGame = function (userChoice) {
    var compChoice = genCompChoice();
    if (userChoice === compChoice) {
        // Draw game
        draw();
    }
    else {
        var userWin = true;
        if (userChoice === "rock") {
            // scissors ,paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            // rock scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            // user choose scissors and comp choose any one : paperr or rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach(function (choice) {
    choice.addEventListener("click", function () {
        var userChoice = choice.getAttribute("id");
        if (userChoice)
            playGame(userChoice);
    });
});
