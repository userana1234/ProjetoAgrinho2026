// Tema escuro com salvamento

const themeBtn = document.getElementById("themeBtn");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const dark =
    document.body.classList.contains("dark");

    themeBtn.textContent =
    dark ? "☀️" : "🌙";

    localStorage.setItem(
        "theme",
        dark ? "dark" : "light"
    );
});

// Contadores

const counters =
document.querySelectorAll(".counter");

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter =
            entry.target;

            const target =
            +counter.dataset.target;

            let count = 0;

            const update = () => {

                count += Math.ceil(target / 100);

                if(count < target){

                    counter.innerText = count;
                    requestAnimationFrame(update);

                }else{

                    counter.innerText = target;
                }
            };

            update();

            observer.unobserve(counter);
        }
    });

});

counters.forEach(c => observer.observe(c));

// Dicas

const dicas = [
    "Realize análises periódicas do solo para corrigir deficiências nutricionais.",
    "Adote a rotação de culturas para reduzir pragas e melhorar a fertilidade.",
    "Monitore constantemente a ocorrência de doenças e insetos na lavoura.",
    "Utilize sistemas de irrigação eficientes para evitar desperdícios de água.",
    "Invista em agricultura de precisão para otimizar insumos e aumentar a produtividade.",
    "Mantenha cobertura vegetal para proteger o solo contra erosão.",
    "Planeje o manejo integrado de pragas para reduzir impactos ambientais.",
    "Utilize sementes certificadas para garantir maior desempenho produtivo.",
    "Acompanhe as condições climáticas para tomar decisões mais estratégicas.",
    "Promova práticas sustentáveis que conciliem produtividade e preservação ambiental."
];

document
.getElementById("tipBtn")
.addEventListener("click", () => {

    const dica =
    dicas[Math.floor(Math.random() * dicas.length)];

    document.getElementById("tipBox").textContent = dica;
});

// Modal

const modal =
document.getElementById("modal");

const modalImg =
document.getElementById("modalImg");

document
.querySelectorAll(".card img")
.forEach(img => {

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

    if(e.key === "Escape"){
        modal.style.display = "none";
    }

});

// Reveal

function reveal(){

    document
    .querySelectorAll(".reveal")
    .forEach(item => {

        const top =
        item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            item.classList.add("active");
        }

    });

}

window.addEventListener("scroll", reveal);
reveal();

// Botão topo

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    topBtn.style.display =
    window.scrollY > 300
    ? "block"
    : "none";

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});