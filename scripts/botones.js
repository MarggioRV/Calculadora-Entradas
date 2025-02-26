document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
      this.classList.add('animate');
  
      setTimeout(() => {
        this.classList.remove('animate');
      }, 350); // Duración total de la animación (10s = 20000)
    });
  });