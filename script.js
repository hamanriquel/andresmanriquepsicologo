// Animación fade-in al hacer scroll

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});

document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll("section, .valor-card, .bio-text, .bio-image");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.15 });

    elements.forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });

});


document.addEventListener("DOMContentLoaded", function () {

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            // Cerrar los demás
            faqItems.forEach(el => {
                if (el !== item) {
                    el.classList.remove("active");
                }
            });

            // Activar el actual
            item.classList.toggle("active");
        });
    });

});



// GALERÍA MODAL

const modal = document.getElementById("modalGaleria");
const modalImg = document.getElementById("imgModal");
const cerrar = document.querySelector(".cerrar");

document.querySelectorAll(".galeria-item img").forEach(img => {
    img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

cerrar.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});




document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll(".impacto-item img");

    // Crear modal dinámicamente
    const modal = document.createElement("div");
    modal.classList.add("impacto-modal");

    const modalImg = document.createElement("img");
    modal.appendChild(modalImg);

    document.body.appendChild(modal);

    // Abrir imagen
    images.forEach(img => {
        img.addEventListener("click", function () {
            modalImg.src = this.src;
            modal.classList.add("active");
        });
    });

    // Cerrar modal al hacer clic fuera
    modal.addEventListener("click", function () {
        modal.classList.remove("active");
    });

});


<script>
const puntos = document.querySelectorAll(".punto");
const tooltip = document.getElementById("tooltip");
const tooltipImg = document.getElementById("tooltip-img");
const tooltipText = document.getElementById("tooltip-text");

puntos.forEach(punto => {

    punto.addEventListener("mouseenter", (e) => {

        tooltip.style.display = "block";
        tooltipImg.src = punto.getAttribute("data-img");
        tooltipText.textContent = punto.getAttribute("data-text");

        tooltip.style.top = (e.pageY - 150) + "px";
        tooltip.style.left = (e.pageX + 20) + "px";
    });

    punto.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
    });

});
</script>


<script>
document.querySelectorAll(".faq-question").forEach(question => {
  question.addEventListener("click", () => {
    const item = question.parentElement;
    item.classList.toggle("active");
  });
});
</script>



