'use strict';

// creating a game module that includes all the behaviors
const GameModule = (function () {
    let boardArray = ['', '', '', '', '', '', '', '', ''];
    let turn = 'x';
    let mark = 'x';
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    // check if the previous mark was an x or o and changes it
    const makeMove = () => {
        document.addEventListener('click', e => {
            if (e.target.classList.contains('game-board__item')) {
                if (turn === 'x') {
                    mark = 'x';
                    turn = 'o';
                } else {
                    mark = 'o';
                    turn = 'x';
                }
                const position = e.target.getAttribute('data-slot');
                updateArray(position, mark);
            }
        });
    }

    const displayBoard = () => {
        const gameFields = document.querySelectorAll('.game-board__item');
        gameFields.forEach(field => {
            const data = Number(field.getAttribute('data-slot'));
            field.innerHTML = `<p>${boardArray[data]}</p>`;
        });
    }

    const updateArray = (position, mark) => {
        if(boardArray[position] === ''){
            boardArray[position] = mark;
        }
        displayBoard();
    }

    const closeModal = () => {
        const modal = document.querySelector('.modal-background');
        const closeBtn = document.querySelector('.modal-card__close');

        closeBtn.addEventListener('click', () => {
            boardArray = ['', '', '', '', '', '', '', '', ''];
            modal.style.display = 'none';
            mark = 'x';
            turn = 'x';
            displayBoard();
        });
    }

    const reset = () => {
        const reset = document.querySelector('.restart');
        const modal = document.querySelector('.modal-background');
        const replay = document.querySelector('.modal-card__play-again');

        reset.addEventListener('click', () => {
            boardArray = ['', '', '', '', '', '', '', '', ''];
            mark = 'x';
            turn = 'x';
            displayBoard();
        });

        replay.addEventListener('click', () => {
            boardArray = ['', '', '', '', '', '', '', '', ''];
            modal.style.display = 'none';
            mark = 'x';
            turn = 'x';
            displayBoard();
        });
    }
    // check winner and return the value
    const checkWinner = () => {
        let whoWon = '';
        for (let i = 0; i < winningConditions.length; i++) {
            let a = boardArray[winningConditions[i][0]];
            let b = boardArray[winningConditions[i][1]];
            let c = boardArray[winningConditions[i][2]];
            if (a != b || b != c) {
                continue;
            }

            if (a === b && b === c) {
                whoWon = a;
                break;
            }
        }
        if (!boardArray.includes('') && whoWon === '') {
            return 'tie';
        }
        return whoWon;
    };

    const displayWinner = () => {
        const modalCard = document.querySelector('.modal-background');
        const modalMessage = document.querySelector('.modal-card__message');
        document.addEventListener('click', () => {
            if (checkWinner() === 'x') {
                modalCard.style.display = 'flex';
                modalMessage.textContent = "X's won this match!!";
            } else if (checkWinner() === 'o') {
                modalCard.style.display = 'flex';
                modalMessage.textContent = "O's won this match!!";
            } else if (checkWinner() === 'tie') {
                modalCard.style.display = 'flex';
                modalMessage.textContent = "It's a TIE!!";
            }
        })
    }
    // call the functions that should be running all the time
    makeMove();
    displayWinner();
    reset();
    closeModal();
})();