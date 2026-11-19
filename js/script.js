// ===============================
// 1. LÓGICA DO CARROSSEL
// ===============================
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSlide(index) {
    // Esconde todos os slides
    slides.forEach(slide => slide.classList.remove("ativo"));
    
    // Ajusta o índice para não sair dos limites
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    
    // Mostra o slide atual
    slides[slideIndex].classList.add("ativo");
}

function mudarSlide(direcao) {
    mostrarSlide(slideIndex + direcao);
}

// Inicializa o carrossel
mostrarSlide(0);
// Passa o slide automaticamente a cada 5 segundos
setInterval(() => mudarSlide(1), 5000);


// ===============================
// 2. INTERAÇÃO DOS CARDS (VER DETALHES)
// ===============================
function toggleDetalhes(id, botao) {
    const detalhe = document.getElementById(id);
    
    if (detalhe.classList.contains("escondido")) {
        // Se estiver escondido, mostra o texto
        detalhe.classList.remove("escondido");
        botao.textContent = "Ocultar detalhes";
    } else {
        // Se estiver visível, esconde o texto
        detalhe.classList.add("escondido");
        botao.textContent = "Ver detalhes";
    }
}