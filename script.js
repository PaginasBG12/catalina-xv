/* ============================================
   INVITACIÓN DIGITAL - CATALINA 15 AÑOS
   JavaScript - Funcionalidades Interactivas
   ============================================ */

// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    initSplashScreen();
    initCountdown();
    initCopyPrex();
    initFormValidation();
    initScrollAnimations();
    initMusicPlayer();
});

/* ============================================
   PANTALLA INICIAL / SPLASH SCREEN
   ============================================ */

function initSplashScreen() {
    const splashScreen = document.getElementById('splashScreen');
    const mainContent = document.getElementById('mainContent');
    const openInvitationBtn = document.getElementById('openInvitationBtn');

    if (!openInvitationBtn) return;

    openInvitationBtn.addEventListener('click', function() {
        // Agregar clase opened para abrir el sobre
        splashScreen.classList.add('opened');

        // Esperar a que se abra el sobre antes de cerrar
        setTimeout(function() {
            splashScreen.classList.add('hidden');
            mainContent.classList.add('visible');
        }, 800);
    });

    // También permitir presionar Enter en la pantalla splash
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !mainContent.classList.contains('visible')) {
            openInvitationBtn.click();
        }
    });
}

/* ============================================
   CUENTA REGRESIVA
   ============================================ */

function initCountdown() {
    const eventDate = new Date('2026-11-15T21:00:00').getTime();
    const countdownInterval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        // Si el evento ya pasó
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').style.display = 'none';
            const message = document.getElementById('countdownMessage');
            message.textContent = '¡El evento ya comenzó! 🎉';
            message.style.fontSize = '1.25rem';
            message.style.color = '#d4a574';
            message.style.fontWeight = 'bold';
            return;
        }

        // Calcular los valores
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Actualizar los elementos
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    // Ejecutar una vez inmediatamente
    updateCountdown();
}

/* ============================================
   COPIAR NÚMERO PREX
   ============================================ */

function initCopyPrex() {
    const copyBtn = document.getElementById('copyPrexBtn');
    const successMessage = document.getElementById('copySuccessMessage');
    const prexNumber = '1308674';

    if (!copyBtn) return;

    copyBtn.addEventListener('click', function() {
        // Copiar al portapapeles
        navigator.clipboard.writeText(prexNumber).then(function() {
            // Mostrar mensaje de éxito
            successMessage.classList.add('show');

            // Cambiar texto del botón temporalmente
            const originalText = copyBtn.textContent;
            copyBtn.textContent = '✓ COPIADO';
            copyBtn.disabled = true;

            // Restaurar después de 2 segundos
            setTimeout(function() {
                copyBtn.textContent = originalText;
                copyBtn.disabled = false;
                successMessage.classList.remove('show');
            }, 2000);
        }).catch(function(err) {
            console.error('Error al copiar:', err);
            // Fallback - seleccionar y copiar manualmente
            fallbackCopyToClipboard(prexNumber);
        });
    });
}

// Fallback para navegadores antiguos
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
        const successMessage = document.getElementById('copySuccessMessage');
        successMessage.classList.add('show');
        setTimeout(function() {
            successMessage.classList.remove('show');
        }, 2000);
    } catch (err) {
        console.error('Error al copiar:', err);
    }
    document.body.removeChild(textArea);
}

/* ============================================
   VALIDACIÓN Y ENVÍO DEL FORMULARIO
   ============================================ */

function initFormValidation() {
    const form = document.getElementById('confirmationForm');
    if (!form) return;

    // Validar al hacer cambios en los campos
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('change', function() {
            validateField(this);
        });
        input.addEventListener('blur', function() {
            validateField(this);
        });
    });

    // Validar al enviar el formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitForm();
        }
    });
}

function validateField(field) {
    const fieldName = field.name;
    const fieldValue = field.value.trim();
    const errorElement = document.getElementById(fieldName + 'Error');
    let isValid = true;
    let errorMessage = '';

    // Validar campo Nombre
    if (fieldName === 'name') {
        if (!fieldValue) {
            isValid = false;
            errorMessage = 'Por favor, ingresá tu nombre y apellido.';
        } else if (fieldValue.length < 3) {
            isValid = false;
            errorMessage = 'El nombre debe tener al menos 3 caracteres.';
        }
    }

    // Validar campo Asistencia
    if (fieldName === 'attendance') {
        if (!fieldValue) {
            isValid = false;
            errorMessage = 'Por favor, indicá si vas a asistir.';
        }
    }

    // Validar campo Cantidad de personas
    if (fieldName === 'guests') {
        if (!fieldValue) {
            isValid = false;
            errorMessage = 'Por favor, indicá la cantidad de personas.';
        }
    }

    // Actualizar UI
    if (isValid) {
        field.classList.remove('error');
        if (errorElement) {
            errorElement.classList.remove('show');
            errorElement.textContent = '';
        }
        return true;
    } else {
        field.classList.add('error');
        if (errorElement) {
            errorElement.textContent = errorMessage;
            errorElement.classList.add('show');
        }
        return false;
    }
}

function validateForm() {
    const form = document.getElementById('confirmationForm');
    const nameField = document.getElementById('name');
    const attendanceField = document.getElementById('attendance');
    const guestsField = document.getElementById('guests');

    let isFormValid = true;

    // Validar cada campo requerido
    isFormValid &= validateField(nameField);
    isFormValid &= validateField(attendanceField);
    isFormValid &= validateField(guestsField);

    return isFormValid;
}

function submitForm() {
    const form = document.getElementById('confirmationForm');
    const successMessage = document.getElementById('successMessage');
    const formAction = form.getAttribute('action');

    // Verificar que el endpoint de Formspree esté configurado
    if (formAction.includes('REEMPLAZAR')) {
        showError('❌ El formulario no está configurado. Por favor, reemplazá "REEMPLAZAR" con tu endpoint de Formspree.');
        return;
    }

    // Aquí el formulario se enviaría a Formspree automáticamente
    // debido al atributo method="POST" y action del formulario

    // Mostrar mensaje de éxito temporalmente
    successMessage.textContent = '✓ ¡Confirmación enviada! Gracias por confirmar tu asistencia. 🎉';
    successMessage.classList.add('show');

    // Limpiar formulario después de 3 segundos
    setTimeout(function() {
        form.reset();
        successMessage.classList.remove('show');
        
        // Limpiar errores
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.classList.remove('error');
        });
    }, 3000);
}

function showError(message) {
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = message;
    successMessage.style.color = '#FF6B6B';
    successMessage.classList.add('show');

    setTimeout(function() {
        successMessage.classList.remove('show');
        successMessage.style.color = '#90EE90';
    }, 4000);
}

/* ============================================
   ANIMACIONES AL HACER SCROLL
   ============================================ */

function initScrollAnimations() {
    // Obtener todos los elementos con animación
    const elementsToAnimate = document.querySelectorAll(
        'section, .event-card, .gift-card, .countdown-item'
    );

    if (!elementsToAnimate.length) return;

    // Crear un Intersection Observer
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                // Opcional: dejar de observar después de la primera vez
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elementsToAnimate.forEach(function(element) {
        observer.observe(element);
    });
}

/* ============================================
   FUNCIONES AUXILIARES
   ============================================ */

// Función para verificar si el usuario prefiere menos movimiento
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Función para obtener la zona horaria de Uruguay
function getUruguayTime() {
    return new Date().toLocaleString('es-UY', {
        timeZone: 'America/Montevideo'
    });
}

/* ============================================
   REPRODUCTOR DE MÚSICA
   ============================================ */

function initMusicPlayer() {
    const musicToggle = document.getElementById('musicToggle');
    const musicPlayer = document.getElementById('musicPlayer');
    
    if (!musicToggle) return;

    let isPlaying = false;
    const youtubeUrl = 'https://youtu.be/cNGjD0VG4R8?si=9BbWEHxldFso3UJP';

    musicToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        
        if (!isPlaying) {
            // Abrir la canción en YouTube en una nueva ventana
            window.open(youtubeUrl, '_blank');
            
            isPlaying = true;
            musicToggle.classList.add('playing');
            musicToggle.innerHTML = '🎵';
        } else {
            isPlaying = false;
            musicToggle.classList.remove('playing');
            musicToggle.innerHTML = '🎵';
        }
    });

    // Mostrar hint al entrar
    setTimeout(function() {
        musicPlayer.style.opacity = '1';
    }, 2000);
}

// Log para debugging (opcional)
console.log('✨ Invitación de Catalina - 15 años');
console.log('Evento: 15 de noviembre de 2026 a las 21:00 hs');
console.log('Ubicación: Salón Los Álamos');
