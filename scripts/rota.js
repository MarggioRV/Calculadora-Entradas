document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.inner');
    const cards = document.querySelectorAll('.card');
    let angle = 0;
  
    // Función que rota las tarjetas
    function rotateCards() {
      angle += 1; // Aumentar el ángulo de rotación
  
      cards.forEach((card, index) => {
        // Cálculo de la posición angular de cada tarjeta
        const cardAngle = (360 / quantity) * index + angle;
  
       
        // Cambiamos el z-index dependiendo del ángulo
        if (cardAngle % 360 >= 0 && cardAngle % 360 <= 180) {
          card.style.zIndex = 3; // Tarjetas al frente
        } else {
          card.style.zIndex = 1; // Tarjetas atrás
        }
      });
    }
  
    // Ejecutar la función cada 16ms (aproximadamente 60 FPS)
    setInterval(rotateCards, 16);
  });
  