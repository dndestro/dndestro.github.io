document.getElementById('quem-sou-eu').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h1>Quem Sou Eu</h1>
        <p>Eu sou um desenvolvedor apaixonado por web design e programação!</p>
    `;
});

document.getElementById('projetos').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h1>Projetos</h1>
        <p>Aqui estão alguns dos meus projetos mais recentes.</p>
    `;
});
