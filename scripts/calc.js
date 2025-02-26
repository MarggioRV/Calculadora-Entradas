let numeros = [];  // Array para almacenar los números ingresados 
let operacion = null; // Para que funcione el cambio de Signo
let historial = [];  // Array para almacenar los resultados previos

/*Operaciones*/

document.getElementById('sumar').addEventListener('click', function() {
    operacion = 'sumar';
    document.getElementById('operacion').textContent = '+';  // Cambiar el símbolo a "+"
});

document.getElementById('restar').addEventListener('click', function() {
    operacion = 'restar';
    document.getElementById('operacion').textContent = '-';  // Cambiar el símbolo a "-"
});

document.getElementById('multiplicar').addEventListener('click', function() {
    operacion = 'multiplicar';
    document.getElementById('operacion').textContent = '×';  // Cambiar el símbolo a "×"
});

document.getElementById('dividir').addEventListener('click', function() {
    operacion = 'dividir';
    document.getElementById('operacion').textContent = '÷';  // Cambiar el símbolo a "÷"
});

/*Imputs a usar*/

document.getElementById('input1').addEventListener('input', function() {
    let num1 = parseFloat(this.value) || 0;
    numeros[0] = num1;  // Guardamos el primer número en el array
});

document.getElementById('input3').addEventListener('input', function() {
    let num2 = parseFloat(this.value) || 0;
    numeros[1] = num2;  // Guardamos el segundo número en el array
});
