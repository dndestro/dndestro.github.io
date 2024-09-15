// Menu interativo "Quem Sou Eu"
document.getElementById('home').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h1>Quem Sou Eu</h1>
        <p>Eu sou um desenvolvedor apaixonado por web design e programação!</p>
    `;
});

// Menu interativo "Projetos"
document.getElementById('projetos').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h1>Projetos</h1>
        <p>Aqui estão alguns dos meus projetos mais recentes.</p>
    `;
});

// Menu "Language" com submenu
document.getElementById('language').addEventListener('click', function(event) {
    event.preventDefault();
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.classList.toggle('show'); // Alterna a classe para mostrar/esconder
});

// Opções de idioma
document.getElementById('portugues').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h1>Idioma: Português</h1>
        <p>Você escolheu o idioma Português.</p>
    `;
});

document.getElementById('english').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h1>Language: English</h1>
        <p>You have chosen English as the language.</p>
    `;
});

// Fechar o submenu se o usuário clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('#language')) {
        const dropdown = document.querySelector('.dropdown-content');
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
};
