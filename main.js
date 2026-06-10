document.addEventListener("DOMContentLoaded", () => {


// =====================
// TEMA ESCURO
// =====================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        themeBtn.textContent = "☀️";
    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const dark =
            document.body.classList.contains("dark");

        themeBtn.textContent = dark ? "☀️" : "🌙";

        localStorage.setItem("theme", dark ? "dark" : "light");
    });
}


// =====================
// CONTADORES
// =====================

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.dataset.target;

            let count = 0;

            const update = () => {

                count += Math.ceil(target / 100);

                if (count < target) {
                    counter.innerText = count;
                    requestAnimationFrame(update);
                } else {
                    counter.innerText = target;
                }
            };

            update();
            observer.unobserve(counter);
        }
    });

});

counters.forEach(c => observer.observe(c));


// =====================
// DICAS
// =====================

const dicas = [
    "Realize análises periódicas do solo para corrigir deficiências nutricionais.",
    "Adote a rotação de culturas para reduzir pragas e melhorar a fertilidade.",
    "Utilize irrigação eficiente para economizar água.",
    "Invista em agricultura de precisão para aumentar produtividade.",
    "Mantenha cobertura vegetal para proteger o solo.",
];

const tipBtn = document.getElementById("tipBtn");
const tipBox = document.getElementById("tipBox");

if (tipBtn && tipBox) {

    tipBtn.addEventListener("click", () => {

        const dica = dicas[Math.floor(Math.random() * dicas.length)];
        tipBox.textContent = dica;

    });
}


// =====================
// MODAL
// =====================

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

if (modal && modalImg) {

    document.querySelectorAll(".card img").forEach(img => {

        img.addEventListener("click", () => {

            modal.style.display = "flex";
            modalImg.src = img.src;
            modalImg.alt = img.alt;

        });

    });

    modal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") {
            modal.style.display = "none";
        }
    });

}


// =====================
// REVEAL
// =====================

function reveal() {

    document.querySelectorAll(".reveal").forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            item.classList.add("active");
        }

    });

}

window.addEventListener("scroll", reveal);
reveal();


// =====================
// BOTÃO TOPO
// =====================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        topBtn.style.display =
            window.scrollY > 300 ? "block" : "none";

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}


});