// Mostrar el modal cuando se hace clic en el botón "Iniciar Cuestionario"
document.querySelector('.main-button a').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    document.getElementById('quizModal').style.display = 'flex';
});

// Cerrar el modal
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('quizModal').style.display = 'none';
});

// Mostrar/ocultar el campo de texto para detalles de la condición médica
document.getElementById('medicalCondition').addEventListener('change', function() {
    const conditionDetails = document.getElementById('conditionDetails');
    if (this.value === 'si') {
        conditionDetails.style.display = 'block';
    } else {
        conditionDetails.style.display = 'none';
    }
});

// Manejar el envío del cuestionario
document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener valores seleccionados
    const gender = document.querySelector('select[name="physicalGender"]').value;
    const physicalCondition = document.querySelector('select[name="physicalCondition"]').value;
    const trainingGoal = document.querySelector('select[name="trainingGoal"]').value;
    const medicalCondition = document.querySelector('select[name="medicalCondition"]').value;
    const conditionDetails = document.querySelector('input[name="conditionDetails"]').value;

    // Verificar si se seleccionó "Sí" para condición médica
    if (medicalCondition === 'si' && !conditionDetails) {
        alert('Por favor, especifica tu padecimiento o lesión.');
        return;
    }

    // Determinar la ruta del PDF basado en las respuestas
    let pdfPath = '';
    
    if (gender === 'male') {
        if (trainingGoal === 'Aumentar tu masa muscular' || physicalCondition === 'poca' ) {
            pdfPath = 'assets/pdf/men/RUTINAS EVO HOMBRES AUMENTO MASA MUSCULAR.pdf';
        } else {
            pdfPath = 'assets/pdf/men/PROGRAMAS EVO HOMBRE ENDO PP.pdf';
        }
    } else if (gender === 'female') {
        if (trainingGoal === 'Aumentar tu masa muscular' || physicalCondition === 'poca') {
            pdfPath = 'assets/pdf/women/PROGRAMAS EVO MUJERES AUMENTO MASA MUSCULAR.pdf';
        } else {
            pdfPath = 'assets/pdf/women/PROGRAMAS EVO MUJERES PERDIDA DE PESO.pdf';
        }
    }

    if (pdfPath) {
        alert('Cuestionario enviado con éxito! Iniciando descarga de tu rutina personalizada.');

        // Iniciar la descarga del PDF
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = 'rutina_entrenamiento_personalizada.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Limpiar el DOM
    } else {
        alert('Hubo un error al generar tu rutina. Por favor, revisa las respuestas e inténtalo de nuevo.');
    }

    // Cerrar el modal después del envío
    document.getElementById('quizModal').style.display = 'none';
});