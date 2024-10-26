// Mostrar el modal cuando se hace clic en el botón "Iniciar Cuestionario"
document.querySelector('.main-button a').addEventListener('click', function() {
    document.getElementById('quizModal').style.display = 'flex';
});

// Cerrar el modal
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('quizModal').style.display = 'none';
});

// Manejar el envío del cuestionario
document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Verificar si se seleccionó "lesión"
    const injuryValue = document.querySelector('select[name="injury"]').value;
    if (injuryValue === 'lesión') {
        alert('Por favor, consulta a un fisioterapeuta o médico adecuado para asegurarte de que puedes realizar ejercicios físicos. Aun hay tiempo no te apresures tomate un respiro');
    } else {
        alert('Cuestionario enviado con éxito!');

        // Iniciar la descarga del PDF (reemplaza 'path/to/your/file.pdf' con la ruta correcta)
        const link = document.createElement('a');
        link.href = 'assets/pdf/pdf-rutina-de-entrenamiento-para-principiantes.pdf'; //! URL del PDF a descargar
        link.download = 'rutina para principiantes.pdf'; //? Nombre del archivo al descargar
        document.body.appendChild(link);
        link.click(); // Simular clic para iniciar descarga
        document.body.removeChild(link); // Limpiar el DOM
    }

    // Cerrar el modal después del envío
    document.getElementById('quizModal').style.display = 'none';
});