function addition(a, b) {
    return a + b;
};

function substraction(a, b) {
    return a - b;
};

function multiplication (a, b) {
    return a * b;
};

function division (a, b) {
    return a / b;
};
var a = document.getElementById("liczba a").value;
var b = document.getElementById("liczba b").value;
var operation = '-';

switch (operation) {
    case '+': console.log(addition(a, b));
        break;
    case '-': console.log(substraction(a, b));
        break;
    case '*': console.log(multiplication(a, b));
        break;
    case '/': console.log(division(a, b));
        break;
}

