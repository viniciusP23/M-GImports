const palavras = gsap.utils.toArray(".word");

const tl = gsap.timeline({
    repeat: -1
});

palavras.forEach((palavra) => {

    // Adiciona a animação CSS
    tl.call(() => {
        palavra.classList.add("tracking-in-contract-bck");
    });

    // Deixa a palavra aparecendo
    tl.to({}, {
        duration: 1.5
    });

    // Remove a classe
    tl.call(() => {
        palavra.classList.remove("tracking-in-contract-bck");
    });

    // Faz desaparecer
    tl.to(palavra, {
        opacity: 0,
        duration: 0.5
    });

});

const herolinks = document.querySelector(".hero-links")

document.addEventListener("scroll", () => {
    let scrollTop = window.scrollY

    if (scrollTop > 0) {
        herolinks.classList.add("rolar")
    } else {
        herolinks.classList.remove("rolar")
    }
})
