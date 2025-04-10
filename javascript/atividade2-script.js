document.addEventListener('DOMContentLoaded', function() {
    const inputNome = document.getElementById('nome');
    const btnSaudar = document.getElementById('btnSaudar');
    const saudacaoDiv = document.getElementById('saudacao');

    function exibirSaudacao() {
        const nome = inputNome.value.trim();
        if (nome) {
            saudacaoDiv.textContent = `Olá, ${nome}! Bem-vindo!`;
        } else {
            saudacaoDiv.textContent = "Por favor, insira seu nome.";
        }
    }

    btnSaudar.addEventListener('click', exibirSaudacao);
});
