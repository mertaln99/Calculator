function calculate() {
    // Get numbers entered by users.
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    // Add, subtract, multiply or divide numbers.
    var operator = prompt("Select action: +, -, * or /");
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

    // Show result
    document.getElementById("result").innerHTML = result;

}

function deleteElement() {
    var element = document.getElementById("num1", "num2");
    element.parentNode.removeChild(element);
}
