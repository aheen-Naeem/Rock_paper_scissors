let userScore: number = 0;
let compScore: number = 0;

const choices: NodeListOf<Element> = document.querySelectorAll(".choice");
const msg: HTMLElement | null = document.querySelector("#msg");
let userScorePara: HTMLElement | null = document.querySelector("#user_score");
let compScorePara: HTMLElement | null = document.querySelector("#comp_score");

const genCompChoice = (): string => {
    const options: string[] = ["rock", "paper", "scissors"];
    const randomIdx: number = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const draw = (): void => {
    if (msg) {
        msg.innerText = "Game was draw. Play again";
        msg.style.backgroundColor = "#081b31";
    }
};

const showWinner = (userWin: boolean, userChoice: string, compChoice: string): void => {
    if (userWin) {
        userScore++;
        if (userScorePara) userScorePara.innerText = userScore.toString();

        if (msg) {
            msg.innerText = `You Win!  your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green";
        }
    } else {
        compScore++;
        if (compScorePara) compScorePara.innerText = compScore.toString();

        if (msg) {
            msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "red";
        }
    }
};

const playGame = (userChoice: string): void => {
    const compChoice: string = genCompChoice();

    if (userChoice === compChoice) {
        // Draw game
        draw();
    } else {
        let userWin: boolean = true;
        if (userChoice === "rock") {
            // scissors ,paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // user choose scissors and comp choose any one : paperr or rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice: string | null = choice.getAttribute("id");
        if (userChoice) playGame(userChoice);
    });
});
