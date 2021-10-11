'use strict';

// Player constructor
// const Player = () => {
//     const makeMove = (mark) => {
//         document.addEventListener('click', e => {
//             if (e.target.classList.contains('game-board__item')) {
//                 const position = e.target.getAttribute('data-slot');
//                 GameModule.updateArray(position, mark);
//             }
//         });
//     }

//     return {
//         makeMove
//     }
// };

// creating a game module that includes all the behaviors
const GameModule = (function () {
    let boardArray = ['', '', '', '', '', '', '', '', ''];
    let turn = 'x';
    let mark = 'x';
    
    const makeMove = () => {
        document.addEventListener('click', e => {
            if (e.target.classList.contains('game-board__item')) {
                if (turn === 'x'){
                    mark = 'x';
                    turn = 'o';
                }else{
                    mark = 'o';
                    turn = 'x';
                }
                const position = e.target.getAttribute('data-slot');
                GameModule.updateArray(position, mark);
            }
        });

    }
    makeMove();
    // const changeTurn = ()=>{
    //     if(turn === 'x'){
    //         makeMove();
    //     }else if(turn === 'o'){
    //         makeMove();
    //     }
    // }
    // changeTurn();
    // reset and play Again buttons
    const displayBoard = () => {
        const gameFields = document.querySelectorAll('.game-board__item');
        gameFields.forEach(field => {
            const data = Number(field.getAttribute('data-slot'));
            field.innerHTML = `<p>${boardArray[data]}</p>`;
        });
    }

    const updateArray = (position, mark) => {
        boardArray[position] = mark;
        displayBoard();
    }

    const closeModal =()=>{
        const modal = document.querySelector('.modal-background');
        const closeBtn = document.querySelector('.modal-card__close');

        closeBtn.addEventListener('click', ()=>{
            boardArray = ['', '', '', '', '', '', '', '', ''];
            modal.style.display = 'none';
            mark = 'x';
            turn = 'x';
            displayBoard();
        });
    }

    const reset = () =>{
        const reset = document.querySelector('.restart');
        const modal = document.querySelector('.modal-background');
        const replay = document.querySelector('.modal-card__play-again');

        reset.addEventListener('click',()=>{
            boardArray = ['', '', '', '', '', '', '', '', ''];
            mark = 'x';
            turn = 'x';
            displayBoard();
        });

        replay.addEventListener('click',()=>{
            boardArray = ['', '', '', '', '', '', '', '', ''];
            modal.style.display = 'none';
            mark = 'x';
            turn = 'x';
            displayBoard();
        });
    }
    reset();
    closeModal();
    return {
        updateArray,
        turn
    }
})();