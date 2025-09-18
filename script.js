let userScore=0;
let comScore=0;

const choices = document.querySelectorAll(".choice");
const mass = document.querySelector("#mass")
const usScore = document.querySelector("#user-score")
const coScore = document.querySelector("#comp-score")

// Get audio elements
const winSound = document.getElementById("win-sound");
const lossSound = document.getElementById("loss-sound");
const drawSound = document.getElementById("draw-sound");

//compurt turn
const genComChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
}

const drawGame = ()  => {
    mass.innerText = "Game is Draw !!"
    mass.style.backgroundColor = "grey"

    // Play draw sound
    drawSound.currentTime = 0;
    drawSound.play();
}

const showWinner = (userWin , userChoice,comChoice) => {
    if(userWin){
        userScore++;
        usScore.innerText = userScore;
        mass.innerText = `You win 🎉!`;
        mass.style.backgroundColor = "green"

        // Play winner sound
        winSound.currentTime = 0;
        winSound.play();
    }else{
        comScore++;
        coScore.innerText = comScore;
        mass.innerText = `You Loss 😓!`;
        mass.style.backgroundColor = "red"

        // Play loss sound
        lossSound.currentTime = 0;
        lossSound.play();
    }
}

const playGame = (userChoice) => {
    const comChoice = genComChoice();

    if(userChoice === comChoice){
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = comChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = comChoice === "scissors" ? false : true; // 🔧 Fix: missing quotes
        }else {
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice, comChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});
