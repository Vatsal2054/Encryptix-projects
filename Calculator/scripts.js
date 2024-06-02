// scripts.js
let display = document.getElementById('display');

function appendCharacter(character) {
    display.innerText += character;
}

function clearDisplay() {
    display.innerText = '';
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = 'Error';
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (!isNaN(key)) {
        appendCharacter(key);
    }
    
    if (['+', '-', '*', '/', '%', '.'].includes(key)) {
        appendCharacter(key);
    }

    if (key === 'Enter') {
        event.preventDefault();
        calculateResult();
    }

    if (key === 'Backspace') {
        deleteLast();
    }

    if (key === 'Escape') {
        clearDisplay();
    }
});
