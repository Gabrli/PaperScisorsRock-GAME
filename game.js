window.onload = function() {
    boxModal.classList.add("active");
    TitleModal.textContent = 'Welcome our new game...!';
    TextModal.textContent = 'Are you ready jump to the game....?'

}



const pcText = document.querySelector(".pc-text");

const PlayerBtnOne = document.querySelector(".player-one");

const PlayerBtnTwo = document.querySelector(".player-two");

const PlayerBtnThree = document.querySelector(".player-three");

const boxModal = document.querySelector(".box-modal");

const modal = document.querySelector(".modal");

const TitleModal = document.querySelector(".title-modal");

const TextModal = document.querySelector(".text-modal")


const BtnGame = document.querySelector(".btn-modal");

const BtnHome = document.querySelector(".btn-home");



const PlayerPoint = document.querySelector(".point-pl");

const PcPoint = document.querySelector(".point-pc");

//console.log(modal);

let userChoice = InputEvent;
let plPoints = 0;
let pcPoints = 0;





function mainFunctionGame() {
    let random = Math.floor(Math.random(3) * 3 + 1);

    if(random === 1 && userChoice === 'scissors') {
        pcText.textContent = '🧻';
        plPoints++;
    }
    else if(random === 2 && userChoice === 'paper'){
        pcText.textContent = '🗿';
        plPoints++;
        
    }
    else if(random === 3 && userChoice === 'rock') {
        pcText.textContent = '✂️';
        plPoints++;
    }
    else if(random === 1 && userChoice === 'rock'){
        pcText.textContent = '🧻';
        pcPoints++;

    }
    else if(random === 2 && userChoice === 'scissors'){
        pcText.textContent = '🗿';
        pcPoints++;
    }
    else if(random === 3 && userChoice === 'paper'){
        pcText.textContent = '✂️';
        pcPoints++;
    }

    PcPoint.textContent = pcPoints;
    PlayerPoint.textContent = plPoints;

    if(pcPoints === 4){
        boxModal.classList.add("active");
        TitleModal.textContent = 'Realy..? Computer won ..!';
        TextModal.textContent = 'Ohh no. Computer won!'

    }
    if(plPoints === 4){
        boxModal.classList.add("active");
        TitleModal.textContent = 'Congratulations for you !';
        TextModal.textContent = 'You have finished this game. You won this round with computer!'
    }
    

    
}


function stateOne() {
    userChoice = 'paper';
}

function stateTwo() {
    userChoice = 'rock';
}

function stateThree() {
    userChoice = 'scissors';
    

}

function SchowHome(){
    TitleModal.textContent = 'Welcome our new game...!';
    TextModal.textContent = 'Are you ready jump to the game....?'
}

function NewGame() {
    boxModal.classList.remove("active")
    pcPoints = 0;
    plPoints = 0;
}




PlayerBtnOne.addEventListener('click', stateOne);

PlayerBtnTwo.addEventListener('click', stateTwo);

PlayerBtnThree.addEventListener('click', stateThree);

BtnGame.addEventListener('click', NewGame);

BtnHome.addEventListener('click', SchowHome);




PlayerBtnOne.addEventListener('click', mainFunctionGame);

PlayerBtnTwo.addEventListener('click', mainFunctionGame);

PlayerBtnThree.addEventListener('click', mainFunctionGame);