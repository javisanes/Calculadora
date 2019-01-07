// ---- Accede a la calculadora --------------------

function calculadora() {
    let num1 = parseInt(prompt("Introduce el primer operando"));
    num2 = parseInt(prompt("Introduce el segundo operando"))
    suma = (num1) + (num2);
    resta = num1 - num2;
    producto = num1 * num2;
    divide = num1 / num2;

// ---- Mostramos los resultados obtenidos por la calculadora --------------

alert("La suma de los operandos es " + suma);
alert("La resta de los operandos es " + resta)
alert("La multiplicación de los operandos es " + producto)
alert("La división de los operandos es " + divide)
}