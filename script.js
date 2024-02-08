document.addEventListener("DOMContentLoaded", function () {
    const time = document.getElementById('time');

    const interval = setInterval(() => {
        const localTime = new Date();
        time.innerHTML = localTime.toLocaleTimeString();
    }, 1000);

    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    // Mostrar el primer slide al cargar la página
    showSlide(currentSlide);

    // Agregar eventos para los botones de siguiente y anterior
    document.querySelector(".prev").addEventListener("click", prevSlide);
    document.querySelector(".next").addEventListener("click", nextSlide);
});

document.addEventListener("DOMContentLoaded", function () {
    const imageToFullscreen = document.getElementById('imageToFullscreen');

    imageToFullscreen.addEventListener('click', function () {
        toggleFullscreen();
    });

    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            imageToFullscreen.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }
});

function redirectToIndex() {
    window.location.href = 'index.html';
  }


  // Función para abrir la ventana emergente
function abrirVentanaEmergente() {
    document.getElementById("ventana-emergente").style.display = "block";
  }
  
  // Función para cerrar la ventana emergente
  function cerrarVentanaEmergente() {
    document.getElementById("ventana-emergente").style.display = "none";
  }
  