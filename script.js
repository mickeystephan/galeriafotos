// Inicializa o índice da imagem atual como 0
let currentIndex = 0;

// Seleciona todas as imagens dentro do contêiner da galeria
const images = document.querySelectorAll('.gallery-container img');

// Função para exibir a imagem no índice dado
function showImage(index) {
    
    // Remove a classe 'active' de todas as imagens e adiciona apenas à imagem atual
    images.forEach((img, i) => img.classList.toggle('active', i === index));
}

// Função para exibir a próxima imagem na galeria
function nextImage() {
    // Atualiza o índice e exibe a próxima imagem
    showImage((currentIndex = (currentIndex + 1) % images.length));
}
