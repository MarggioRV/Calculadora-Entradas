// VBotones de + y -

function increase() {
    const cantidadInput = document.getElementById('cantidad');
    cantidadInput.value = parseInt(cantidadInput.value) + 1;
  }

function decrease() {
    const cantidadInput = document.getElementById('cantidad');
    if (cantidadInput.value > 0) {
      cantidadInput.value = parseInt(cantidadInput.value) - 1;
    }
  }

// Array de precios según el rango de edad
const priceRanges = [
  { min: 0, max: 12, price: 4, type: 'Niño' },    // 0 - 12 años
  { min: 13, max: 25, price: 6, type: 'Joven' },   // 13 - 25 años
  { min: 26, max: 45, price: 9, type: 'Adulto' },  // 26 - 45 años
  { min: 46, max: 115, price: 5, type: 'Anciano' }  // 46 - 115 años
];

// Variable para almacenar los totales de cada cálculo
let totalPrices = [];

// Función para aumentar la cantidad de entradas
function increase() {
  var cantidadInput = document.getElementById("cantidad");
  var currentValue = parseInt(cantidadInput.value);
  cantidadInput.value = currentValue + 1;
}

// Función para disminuir la cantidad de entradas
function decrease() {
  var cantidadInput = document.getElementById("cantidad");
  var currentValue = parseInt(cantidadInput.value);
  if (currentValue > 0) {
    cantidadInput.value = currentValue - 1;
  }
}

// Función para agregar una nueva línea con el precio calculado
function addLine() {
  var age = parseInt(document.getElementById("age").value);
  var quantity = parseInt(document.getElementById("cantidad").value);

  // Encontrar el precio según la edad
  let price = 0;
  let type = '';

  for (let i = 0; i < priceRanges.length; i++) {
    if (age >= priceRanges[i].min && age <= priceRanges[i].max) {
      price = priceRanges[i].price;
      type = priceRanges[i].type;
      break;
    }
  }

  // Calcular el precio total
  var totalPrice = price * quantity;

  // Guardar el total calculado en el array
  totalPrices.push(totalPrice);

  // Crear una nueva línea para mostrar el resultado
  var newLine = document.createElement("p");
  newLine.innerHTML = `Edad: ${age} | Tipo: ${type} | ${quantity} Entrada(s) | Total: ${totalPrice} €`;

  // Agregar la nueva línea al contenedor
  document.getElementById("priceOutput").appendChild(newLine);
}

// Función para calcular el total de todos los resultados
function calculateTotalSum() {
  var totalSum = totalPrices.reduce((acc, price) => acc + price, 0); // Suma todos los precios

  // Mostrar el total sumado en el contenedor #totalContainer
  document.getElementById("totalAmount").innerHTML = `Total: ${totalSum} €`;
}
