// Seleccionar todos los enlaces con la clase 'text-button' y el texto específico
// Seleccionar todos los enlaces con la clase 'text-button'
document.querySelectorAll('.text-button').forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Evita la acción predeterminada del clic, como recargar la página
        alert('¡Estamos trabajando en la rutina! Próximamente podrás descargarla. Gracias por tu paciencia.');
        // Si quieres evitar completamente la navegación, asegúrate de que el atributo href no sea "#" o esté vacío
        button.setAttribute('href', 'javascript:void(0);');
    });
});
