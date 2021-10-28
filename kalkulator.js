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

    function Kalkulator(operations) {


        var a = document.getElementById("liczba a").value;
        var b = document.getElementById("liczba b").value;
        var wynik;

        document.getElementById("+").addEventListener("click", operations = "+");
        document.getElementById("-").addEventListener("click", operations = "-");
        document.getElementById("*").addEventListener("click", operations = "*");
        document.getElementById("/").addEventListener("click", operations = "/");


        switch (operations) {
            case '+':
                wynik = addition(a, b);
                break;
            case '-':
                wynik = substraction(a, b);
                break;
            case '*':
                wynik = multiplication(a, b);
                break;
            case '/':
                wynik = division(a, b);
                break;
        }

        document.getElementById('result').value = '= ' + wynik;

    }

