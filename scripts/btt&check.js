// Seleccionamos el checkbox
const checkbox = document.getElementById('screen');

// Variable para contar cuántas veces se activa el checkbox
let toggleCount = 0;

// Añadir un event listener para detectar el cambio en el checkbox
checkbox.addEventListener('change', () => {
    toggleCount++;
    
    // Si el checkbox se activa por segunda vez
    if (toggleCount % 2 === 0) {
        checkbox.classList.add('second-activation');
    } else {
        checkbox.classList.remove('second-activation');
    }
});

/*Botones Calc*/
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.add('animate');
    
        setTimeout(() => {
            this.classList.remove('animate');
        }, 350); // Duración total de la animación (350ms)
    });
});
