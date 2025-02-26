let numeros = [];  // Array para almacenar los números ingresados 
let operacion = null; // Para que funcione el cambio de Signo
let historial = [];  // Array para almacenar los resultados previos

/*Operaciones*/

// Asignar operación para cada botón de operación
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

/*Apartado de Operaciones*/

document.getElementById('start').addEventListener('click', function() {
    // Primero, actualizamos los valores de los números antes de cualquier operación
    let input1Value = document.getElementById('input1').value;
    let input3Value = document.getElementById('input3').value;

    // Expresión regular para permitir solo números (sin letras ni símbolos)
    var regex = /^[0-9]*$/;

    // Validación: Si alguno de los campos tiene letras o símbolos
    if (!regex.test(input1Value) || !regex.test(input3Value)) {
        alert("Ups, esta calculadora solo usa Números Naturales");
        return;  // Detener la ejecución de la operación
    }

    // Actualizar los valores de los números con los valores actuales de los inputs
    let num1 = parseFloat(document.getElementById('input1').value) || 0;
    let num2 = parseFloat(document.getElementById('input3').value) || 0;
    numeros[0] = num1; // Actualizamos numeros[0] con el valor de input1
    numeros[1] = num2; // Actualizamos numeros[1] con el valor de input3

    if (numeros.length < 2) {
        alert("Por favor ingrese ambos números.");
        return;
    }

    let resultado = 0;

    // Si hay historial, el primer número es el último resultado en el historial
    if (historial.length > 0) {
        numeros[0] = historial[historial.length - 1];  // Usamos el último resultado como el primer número
    }

    // Realizamos la operación seleccionada
    if (operacion === 'sumar') {
        resultado = numeros[0] + numeros[1];
    } else if (operacion === 'restar') {
        resultado = numeros[0] - numeros[1];
    } else if (operacion === 'multiplicar') {
        resultado = numeros[0] * numeros[1];
    } else if (operacion === 'dividir') {
        if (numeros[1] !== 0) {
            resultado = numeros[0] / numeros[1];
        } else {
            resultado = 'No se puede dividir por 0'; // **Esto se asigna al h3 "resultado" si se intenta dividir por 0**
        }
    }

    document.getElementById('resultado').textContent = resultado; // El resultado se muestra aquí


    if (!isNaN(resultado)) {  // Verificamos si el resultado es un número
        historial.push(resultado); // Agregar el resultado al historial
        mostrarHistorial(); // Llamar a la función para mostrar el historial
        document.getElementById('input1').value = resultado; // Asignar el resultado al input1 solo si es un número
    } else {
        document.getElementById('input1').value = ''; // Limpiar el campo input1 si no es un número (error)
    }

    // Colocar el resultado en el campo 1 y resetear el 2
    document.getElementById('input3').value = ''; // Limpiar este campo
});

// Función para un reseteo simple
document.getElementById('reset').addEventListener('click', function() {
    // Limpiar solo los campos de números, el resultado y la operación
    document.getElementById('input1').value = '';
    document.getElementById('input3').value = '';
    document.getElementById('resultado').textContent = '0';
    document.getElementById('operacion').textContent = ''; 
});

// Función para mostrar el historial de operaciones
function mostrarHistorial() {
    const ul = document.getElementById('numeros');
    ul.innerHTML = ''; // Limpiar la lista antes de agregar los nuevos elementos

    // Mostrar solo el resultado del historial
    historial.forEach(function(resultado) {
        let li = document.createElement('li');
        li.textContent = `Resultado = ${resultado}`; // Mostrar solo el resultado
        ul.appendChild(li);
    });
}
