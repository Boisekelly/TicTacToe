const gameBoard = document.querySelector('.gameboard');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');
const box6 = document.getElementById('box6');
const box7 = document.getElementById('box7');
const box8 = document.getElementById('box8');
const box9 = document.getElementById('box9');
const modal = document.getElementById('modal');
const resetButton = document.getElementById('reset-button');
const popupMessage = document.querySelector('.popup-message');

const player = (selection) => {
    let counter = 0;
    const getSelection = () => selection;

    const displaySelection = (box) => {
        switch (box.id){
            case 'box1':
                box1.innerText = getSelection();
                break;
            case 'box2':
                box2.innerText = getSelection();
                break;
            case 'box3':
                box3.innerText = getSelection();
                break;        
            case 'box4':
                box4.innerText = getSelection();
                break;
            case 'box5':
                box5.innerText = getSelection();
                break;
            case 'box6':
                box6.innerText = getSelection();
                break;
            case 'box7':
                box7.innerText = getSelection();
                break;
            case 'box8':
                box8.innerText = getSelection();
                break;
            case 'box9':
                box9.innerText = getSelection();
                break;
        }

    };
    const played = () => counter++;
    return {displaySelection, getSelection, played,};
};

function displayModal(){
    modal.showModal();
}

function resetbox(){
    box1.innerText = '';
    box2.innerText = '';
    box3.innerText = '';
    box4.innerText = '';
    box5.innerText = '';
    box6.innerText = '';
    box7.innerText = '';
    box8.innerText = '';
    box9.innerText = '';
}

function closeModal(){
    resetbox();
    modal.close();
}

const getResult = () => {
    switch (true){
        case (box1.innerText === player1.getSelection() && box2.innerText === player1.getSelection() && box3.innerText === player1.getSelection()) :
            popupMessage.innerText = `${player1.getSelection()} You are the winner!`;
            displayModal();
            break;
        case (box4.innerText === player1.getSelection() && box5.innerText === player1.getSelection() && box6.innerText === player1.getSelection()) :
            popupMessage.innerText = `${player1.getSelection()} You are the winner!`;
            displayModal();
            break;
        case (box7.innerText === player1.getSelection() && box8.innerText === player1.getSelection() && box9.innerText === player1.getSelection()) :
            popupMessage.innerText = `${player1.getSelection()} You are the winner!`;
            displayModal();
            break;        
        case (box1.innerText === player1.getSelection() && box4.innerText === player1.getSelection() && box7.innerText === player1.getSelection()) :
            popupMessage.innerText = `${player1.getSelection()} You are the winner!`;
            displayModal();
            break;
        case (box2.innerText === player1.getSelection() && box5.innerText === player1.getSelection() && box8.innerText === player1.getSelection()) :
            popupMessage.innerText = `${player1.getSelection()} You are the winner!`;
            displayModal();
            break;
        case (box3.innerText === player1.getSelection() && box6.innerText === player1.getSelection() && box9.innerText === player1.getSelection()) :
            popupMessage.innerText = `${player1.getSelection()} You are the winner!`;
            displayModal();
            break;
        case (box1.innerText === player1.getSelection() && box5.innerText === player1.getSelection() && box9.innerText === player1.getSelection()) :
            popupMessage.innerText = `${player1.getSelection()} You are the winner!`;
            displayModal();
            break;
        case (box3.innerText === player1.getSelection() && box5.innerText === player1.getSelection() && box7.innerText === player1.getSelection()) :
            popupMessage.innerText = `${player1.getSelection()} You are the winner!`;
            displayModal();
            break;
        case (box1.innerText === player2.getSelection() && box2.innerText === player2.getSelection() && box3.innerText === player2.getSelection()) :
            popupMessage.innerText = `${player2.getSelection()} You are the winner!`;
            displayModal();
            break;
        case (box4.innerText === player2.getSelection() && box5.innerText === player2.getSelection() && box6.innerText === player2.getSelection()) :
            popupMessage.innerText = `${player2.getSelection()} You are the winner!`;
            displayModal();
            break;
        case (box7.innerText === player2.getSelection() && box8.innerText === player2.getSelection() && box9.innerText === player2.getSelection()) :
            popupMessage.innerText = `${player2.getSelection()} You are the winner!`;
            displayModal();
            break;        
        case (box1.innerText === player2.getSelection() && box4.innerText === player2.getSelection() && box7.innerText === player2.getSelection()) :
            popupMessage.innerText = `${player2.getSelection()} You are the winner!`;
            displayModal();
            break;
        case (box2.innerText === player2.getSelection() && box5.innerText === player2.getSelection() && box8.innerText === player2.getSelection()) :
            popupMessage.innerText = `${player2.getSelection()} You are the winner!`;
            displayModal();
            break;
        case (box3.innerText === player2.getSelection() && box6.innerText === player2.getSelection() && box9.innerText === player2.getSelection()) :
            popupMessage.innerText = `${player2.getSelection()} You are the winner!`;
            displayModal();
            break;
        case (box1.innerText === player2.getSelection() && box5.innerText === player2.getSelection() && box9.innerText === player2.getSelection()) :
            popupMessage.innerText = `${player2.getSelection()} You are the winner!`;
            displayModal();
            break;
        case (box3.innerText === player2.getSelection() && box5.innerText === player2.getSelection() && box7.innerText === player2.getSelection()) :
            popupMessage.innerText = `${player2.getSelection()} You are the winner!`;
            displayModal();
            break;
        default:
            if (box1.innerText !== '' && box2.innerText !== '' && box3.innerText !== '' &&
                box4.innerText !== '' && box5.innerText !== '' && box6.innerText !== '' &&
                box7.innerText !== '' && box8.innerText !== '' && box9.innerText !== ''){
                popupMessage.innerText = `It's a cat's game. Try again.`;
                displayModal();
            }
            break;   
    }
};


const player1 = player('X');
const player2 = player('O');


gameBoard.addEventListener('click', (e) => {
    const target = e.target;

    if (target.innerText !== player1.getSelection() && target.innerText !== player2.getSelection() && player1.played() === player2.played()){
        player1.displaySelection(target);
        player1.played();
    }else if (target.innerText !== player1.getSelection() && target.innerText !== player2.getSelection() && player1.played() > player2.played()){
        player2.displaySelection(target);
        player2.played();
    }
    getResult();
});

resetButton.addEventListener('click', closeModal);