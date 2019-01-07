// ---- Accede a la calculadora --------------------

function calculadora() {
    var num1 = parseInt(prompt("Introduce el primer operando"));
    var num2 = parseInt(prompt("Introduce el segundo operando"))
    var suma = (num1) + (num2);
    var resta = num1 - num2;
    var producto = num1 * num2;
    var divide = num1 / num2;
alert("La suma de los operandos es " + suma);
alert("La resta de los operandos es " + resta)
alert("La multiplicación de los operandos es " + producto)
alert("La división de los operandos es " + divide)
}