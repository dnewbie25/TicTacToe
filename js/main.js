// Gameboard module

const Gameboard = (function(){
    let boardArray = Array.from(' '.repeat(9));
    let displayBoard = () => {
        const gameSlots = document.querySelectorAll('.game-board__item'); 
        for (let index = 0; index < gameSlots.length; index++){
            gameSlots[index].innerHTML = `<p>${boardArray[index]}</p>`;
        }
    };
    let updateBoard = (value, slot) => {
        if(slot >=0 && slot <= 8){
            boardArray[slot] = value;
        }
    };
    let reset = () => {
        document.addEventListener('click', e => {
            if(e.target.classList.contains('restart') || e.target.classList.contains('modal-card__play-again')){
                boardArray = Array.from(' '.repeat(9));
                displayBoard();
            }
        });
    };
    reset();
    // let showWinner = (choice, player) => {
    //     const winnerModal = document.querySelector('.modal-background');
    //     if(
    //         (boardArray[0] === boardArray[1] && boardArray[0] === boardArray[2] && boardArray[0] != ' ') ||
    //         (boardArray[3] === boardArray[4] && boardArray[3] === boardArray[5] && boardArray[3] != ' ') ||
    //         (boardArray[6] === boardArray[7] && boardArray[6] === boardArray[8] && boardArray[6] != ' ') ||
    //         (boardArray[0] === boardArray[4] && boardArray[0] === boardArray[8] && boardArray[0] != ' ') ||
    //         (boardArray[2] === boardArray[4] && boardArray[2] === boardArray[6] && boardArray[2] != ' ')
    //         ) {
    //         winnerModal.style.display = 'flex';
    //     }
    // };
    // showWinner();
    // public functions
    return {
        boardArray,
        displayBoard,
        updateBoard,
        // showWinner
    }
})();

// player factory
const Player = (marker, name) => {
    let makeMove = () =>{
        document.addEventListener('click', e=>{
            if(e.target.classList.contains('game-board__item') && e.target.innerHTML === "<p></p>" || e.target.classList.contains('game-board__item') && e.target.innerHTML === "<p> </p>"){
                const dataAttribute = Number(e.target.getAttribute('data-slot'));
                console.log(dataAttribute);
                // Gameboard.updateBoard(marker, dataAttribute);
                // Gameboard.displayBoard();
            }
        });
    };
    return {
        makeMove,
        name
    }
}

let player1 = Player('x', 'dani');

