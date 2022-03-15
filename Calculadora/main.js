const screen = document.getElementById('screen');

const _updateScreen = content => screen.innerText += content;
const _clearScreen = () => screen.innerText = '';
const _deleteLastCharacter = () => screen.innerText = screen.textContent.slice(0, -1);
const _doOperation = () =>  screen.innerText = eval(screen.textContent) + '';
const _checkValue = operator => {
    const regex = /^(0\d)|((\+|-|\/|\*|%)0{2,})|[+\-*/%\.]{2}$|\d+\.\d*\.$|^\./;
    const currentValue = screen.textContent + operator;
    if (!regex.test(currentValue)) return _updateScreen(operator);
};

const _checkKey = element => {
    const key = element.textContent;
    const operators = ['+', '-', '*', '/', '%','0','.'];
    if (Number(key) || operators.includes(key)) return _checkValue(key);

    const keys = {
        'C': () => _clearScreen(),
        'DEL': () =>  _deleteLastCharacter(),
        '=': () => _doOperation(),
        'default': () => {},
    };

    (keys[key] || keys['default'])();
};