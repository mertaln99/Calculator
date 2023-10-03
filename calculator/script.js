function calculate() {
    // Kullanıcıların girdiği sayıları alın.
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    // Sayıları toplayın, çıkarın, çarpın veya bölün.
    var operator = prompt("İşlemi seçin: +, -, * or /");
    var result;
    if (operator == "+") {
        result = parseFloat(num1) + parseFloat(num2);
    } else if (operator == "-") {
        result = num1 - num2;
    } else if (operator == "*") {
        result = num1 * num2;
    } else if (operator == "/") {
        result = num1 / num2;
    }

    // Sonucu gösterin
    document.getElementById("result").innerHTML = result;

}

function deleteElement() {
    var element = document.getElementById("num1", "num2");
    element.parentNode.removeChild(element);
}
