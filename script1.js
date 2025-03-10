const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultSpan = document.getElementById('result');
const historyList = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistory');


function calculate(op) {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Будь ласка, введіть коректні числа.");
        return;
    }

    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Ділення на нуль неможливе!");
                return;
            }
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        case '^':
            result = Math.pow(num1, num2);
            break;
        default:
            alert("Невідома операція.");
            return;
    }

    resultSpan.textContent = result;
    saveToHistory(`${num1} ${op} ${num2} = ${result}`);
}

function calculateSquareRoot() {
    const num1 = parseFloat(num1Input.value);
    
    if (isNaN(num1)) {
        alert("Будь ласка, введіть коректне число.");
        return;
    }
    const result = Math.sqrt(num1);
    resultSpan.textContent = result;
    saveToHistory(`√${num1} = ${result}`);
}

function saveToHistory(calculation) {
    let history = JSON.parse(localStorage.getItem('history')) || [];

    if (history.length >= 10) {
        history.pop();
    }

    history.unshift(calculation); 

    localStorage.setItem('history', JSON.stringify(history));
    updateHistoryDisplay();
}
function updateHistoryDisplay() {
    const history = JSON.parse(localStorage.getItem('history')) || [];
    historyList.innerHTML = history.map(item => `<li>${item}</li>`).join('');
}
function clearHistory() {
    localStorage.
removeItem('history');
    updateHistoryDisplay();
}
const operationButtons = document.querySelectorAll('.operation');
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        const op = button.dataset.op;
        calculate(op);
    });
});
document.getElementById('sqrtBtn').addEventListener('click', calculateSquareRoot);
clearHistoryBtn.addEventListener('click', clearHistory);
updateHistoryDisplay();