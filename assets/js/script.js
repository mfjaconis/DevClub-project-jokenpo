const result = document.querySelector(".result");
const humanScore = document.querySelector(".human-score-number");
const machineScore = document.querySelector(".machine-score-number");
const buttonsResults = document.querySelector(".button-results");

let humanScoreNumber = 0;

let machineScoreNumber = 0;

const GAME_OPTIONS = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
};

const playhuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
  const choices = [
    GAME_OPTIONS.ROCK,
    GAME_OPTIONS.PAPER,
    GAME_OPTIONS.SCISSORS,
  ];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

const playTheGame = (human, machine) => {
  // empate
  if (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.PAPER) {
    result.style.color = "yellow";
    result.innerHTML = "Deu Empate";
    buttonsResults.innerHTML = `
    <button id="paper"> Player &#128400 </button>
           
    <button id="versus" >&#10006 </button>

    <button id="paper"> &#128400 Maquina </button>

   `;
  } else if (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.ROCK) {
    result.style.color = "yellow";
    result.innerHTML = "Deu Empate";
    buttonsResults.innerHTML = `
    <button id="rock"> Player &#128074 </button>
            
     <button id="versus" >&#10006 </button>

     <button id="rock"> &#128074 Maquina </button>

    `;
  } else if (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.SCISSORS) {
    result.style.color = "yellow";
    result.innerHTML = "Deu Empate";
    buttonsResults.innerHTML = `
    <button id="scissors"> Player &#9996 </button> 
            
     <button id="versus" >&#10006 </button>

     <button id="scissors"> &#9996 Maquina </button> 

    `;
  }



  // player gain
  else if (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) {
    buttonsResults.innerHTML = `
     <button id="paper"> Player &#128400 </button>
            
     <button id="versus" >&#10006 </button>

     <button id="rock"> &#128074 Maquina </button>

    `;
    result.style.color = "rgb(12, 135, 12)";
    result.innerHTML = "Você ganhou! &#127942";
    ++humanScoreNumber;
    humanScore.innerHTML = humanScoreNumber;
  } else if (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) {
    buttonsResults.innerHTML = `
     <button id="rock"> Player &#128074 </button>
           
     <button id="versus" > &#10006 </button>

     <button id="scissors"> &#9996 Maquina </button>       

    `;
    result.style.color = "rgb(12, 135, 12)";
    result.innerHTML = "Você ganhou! &#127942";
    ++humanScoreNumber;
    humanScore.innerHTML = humanScoreNumber;
  } else if (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER) {
    buttonsResults.innerHTML = `
     <button id="scissors"> Player &#9996 </button>  
           
     <button id="versus" > &#10006 </button>

     <button id="paper"> &#128400 Maquina </button>

    `;
    result.style.color = "rgb(12, 135, 12)";
    result.innerHTML = "Você ganhou! &#127942";
    ++humanScoreNumber;
    humanScore.innerHTML = humanScoreNumber;
  } 
  
  // player loser
  else if (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.SCISSORS) {
    buttonsResults.innerHTML = `
     <button id="paper"> Player &#128400 </button>
            
     <button id="versus" >&#10006 </button>

     <button id="scissors">&#9996 Maquina </button>   

    `;
    result.style.color = "red";
    result.innerHTML = "Você perdeu!";
    ++machineScoreNumber;
    machineScore.innerHTML = machineScoreNumber;
  } else if (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.PAPER) {
    buttonsResults.innerHTML = `
     <button id="rock"> Player &#128074 </button>
           
     <button id="versus" >&#10006 </button>

     <button id="paper"> &#128400 Maquina </button>     

    `;
    result.style.color = "red";
    result.innerHTML = "Você perdeu!";
    ++machineScoreNumber;
    machineScore.innerHTML = machineScoreNumber;
  } else if (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.ROCK) {
    buttonsResults.innerHTML = `
     <button id="scissors"> Player &#9996 </button>  
           
     <button id="versus" > &#10006 </button>

     <button id="rock"> &#128074 Maquina </button>

    `;
    result.style.color = "red";
    result.innerHTML = "Você perdeu!";
    ++machineScoreNumber;
    machineScore.innerHTML = machineScoreNumber;
  }
};
