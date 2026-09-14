/* ============================================================
   ANIMAÇÃO DAS PALAVRAS DO HERO
   Cada palavra (.word) aparece com a animação de "tracking"
   (definida no CSS), fica visível e depois desaparece,
   em loop infinito, uma após a outra.
   ============================================================ */

const palavras = gsap.utils.toArray(".word");

const tl = gsap.timeline({
    repeat: -1 // repete a timeline para sempre
});

palavras.forEach((palavra) => {

    // Adiciona a classe que dispara a animação CSS de entrada
    tl.call(() => {
        palavra.classList.add("tracking-in-contract-bck");
    });

    // Mantém a palavra visível por 1.5s
    tl.to({}, {
        duration: 1.5
    });

    // Remove a classe da animação de entrada
    tl.call(() => {
        palavra.classList.remove("tracking-in-contract-bck");
    });

    // Faz a palavra desaparecer suavemente antes da próxima
    tl.to(palavra, {
        opacity: 0,
        duration: 0.5
    });

});


/* ============================================================
   MENU FIXO (hero-links)
   Adiciona a classe "rolar" quando a página é rolada,
   mudando o fundo do menu de transparente para branco.
   ============================================================ */

const herolinks = document.querySelector(".hero-links");

document.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    if (scrollTop > 0) {
        herolinks.classList.add("rolar");
    } else {
        herolinks.classList.remove("rolar");
    }
});