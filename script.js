// Função para o menu hambúrguer
function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('active');
}

// Adiciona a rolagem suave ao clicar nos links de navegação
const links = document.querySelectorAll('.navbar a');

for (const link of links) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();  // Previne a ação padrão do link
    const targetId = e.currentTarget.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    window.scrollTo({
        top: targetSection.offsetTop - 60, // Ajuste de acordo com a altura do header fixo
        behavior: 'smooth'
    });
}

// Ajusta o comportamento do botão de doação
document.getElementById('botaoDoacao').addEventListener('click', function () {
    window.location.href = '2index.html'; // Redireciona para a página de doação
});

// Verifica se o vídeo de fundo está carregado corretamente
document.querySelector('.background-video video').addEventListener('loadeddata', function () {
    this.play();
});

// Menu hambúrguer fecha ao clicar em um link (para dispositivos móveis)
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('nav ul').classList.remove('active');
    });
});
