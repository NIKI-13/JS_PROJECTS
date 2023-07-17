const choices =['ROCK', 'PAPER', 'SCISSORS'];
let choice, pcChoice;
let playerScore = 0;
let pcScore = 0;
const info = document.querySelector('#info');

function play(choice){
    pcChoice = Math.floor(Math.random() * 3);
    info.innerText = `YOU CHOSE: ${choices[choice]} || COMPUTER CHOSE: ${choices[pcChoice]}`;

    if(choice===pcChoice)
        return;  
    if(choice-pcChoice == 1 || choice-pcChoice == -2){
        playerScore++;
        document.querySelector('#yourScore').innerText = playerScore;
    }
    else
    pcScore++;
    document.querySelector('#pcScore').innerText = pcScore;
}

document.querySelector('#rock').addEventListener('click',()=>{
    choice = 0;
    play(choice);

});

document.querySelector('#paper').addEventListener('click',()=>{
    choice = 1;
    play(choice);

});

document.querySelector('#scissors').addEventListener('click',()=>{
    choice = 2;
    play(choice);

});