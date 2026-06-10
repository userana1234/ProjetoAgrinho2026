// Tema escuro

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    themeBtn.textContent =
    document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";
});

// Contadores

document.querySelectorAll(".counter")
.forEach(counter => {

    const target =
    Number(counter.dataset.target);

    let count = 0;

    function update(){

        count += Math.ceil(target / 100);

        if(count < target){

            counter.innerText = count;
            requestAnimationFrame(update);

        }else{

            counter.innerText = target;
        }
    }

    update();
});

// Dicas

const dicas = [
    "Faça análise periódica do solo.",
    "Utilize rotação de culturas.",
    "Monitore pragas semanalmente.",
    "Use irrigação eficiente.",
    "Invista em agricultura de precisão.",
    "Proteja o solo com cobertura vegetal."
];

document
.getElementById("tipBtn")
.addEventListener("click", () => {

    const dica =
    dicas[Math.floor(Math.random() * dicas.length)];

    document.getElementById("tipBox").innerHTML = dica;
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
    });

});

modal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Scroll Reveal

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

// Voltar ao topo

document
.getElementById("topBtn")
.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});