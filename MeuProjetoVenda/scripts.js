// Selecionando os botões (usei a classe da imagem dentro do botão como você postou)
const btnProximo = document.querySelector('.arrow-right');
const btnAnterior = document.querySelector('.arrow-left');
const carros = document.querySelectorAll('.CarEvolution img');

let indiceAtivo = 0;

function trocarCarro(direcao) {
    // 1. Remove a classe 'active' do carro atual
    carros[indiceAtivo].classList.remove('active');

    if (direcao === 'proximo') {
        indiceAtivo++;
        if (indiceAtivo >= carros.length) indiceAtivo = 0; // Volta pro primeiro
    } else {
        indiceAtivo--;
        if (indiceAtivo < 0) indiceAtivo = carros.length - 1; // Vai pro último
    }

    // 2. Adiciona a classe 'active' no novo carro
    carros[indiceAtivo].classList.add('active');
}

// Eventos de clique
btnProximo.parentElement.onclick = () => trocarCarro('proximo');
btnAnterior.parentElement.onclick = () => trocarCarro('anterior');

// Teste rápido: Digite console.log("JS Carregado") para ver se aparece no F12 do navegador
console.log("Script rodando!");


