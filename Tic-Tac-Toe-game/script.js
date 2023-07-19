console.log("Welcome to Tic Tac Toe");
let music = new Audio("resources/music.mp3")
let turnchange = new Audio("resources/ting.mp3")
let gameover = new Audio("resources/gameover.mp3")

let turn = "X";
let gameEnds = false;
// Function to change the turn
const changeTurn = ()=>{
    return turn ==="X"?"0":"X"
}

// Function to check for a win
const checkWin  = () =>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5], 
        [6, 7 ,8],
        [0, 3, 6],
        [0, 1, 2],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6]

    ]
    wins.forEach(e =>{
        console.log(boxtext[e[0]].innerText);
         if( (boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won!";
            gameEnds =true;
            document.querySelector('.img-box').getElementsByTagName('img')[0].style.width="200px";
         }
    })

}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText===''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turnchange.play();
            checkWin();
            if(!gameEnds){
            document.getElementsByClassName('info')[0].innerText = "Turn for "+ turn;
            }
        }
    })

}) 

// reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    });
    turn = "X";
    gameEnds = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for "+ turn;
    document.querySelector('.img-box').getElementsByTagName('img')[0].style.width="0px";

})