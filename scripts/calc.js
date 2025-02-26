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


