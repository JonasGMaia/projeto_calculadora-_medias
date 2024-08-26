const form = document.getElementById('formulario');
const emojiAprovado = '<img src="aprovado.png" alt="emoji celebrando" />';
const emojiReprovado = '<img src="reprovado.png" alt="emoji chateado" />';
const listaAtividades = [];
const listaNotas = [];
const spanAprovado = '<span class = "resultado_aprovado">Aprovado</span>';
const spanReprovado = '<span class = "resultado_reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();

});

function adicionaLinha() {
    const inputAtividade = document.getElementById('atividade');
    const inputNota = document.getElementById('nota');

    if (listaAtividades.includes(inputAtividade.value)) {
        alert(`${inputAtividade.value} é uma atividade já inserida`);
    }

    else{
        listaAtividades.push(inputAtividade.value);
        listaNotas.push(parseFloat(inputNota.value));
    
        let linha = '<tr>';
        linha += `<td>${inputAtividade.value}</td>`;
        linha += `<td>${inputNota.value}</td>`;
        linha += `<td>${inputNota.value >= notaMinima ? emojiAprovado : emojiReprovado}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }


    inputAtividade.value = '';
    inputNota.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function calculaMediaFinal() {
    let somaNotas = 0;

    for(let i = 0; i < listaNotas.length; i++){
        somaNotas += listaNotas[i];
    }

    return somaNotas / listaNotas.length;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();
    document.getElementById('mediaFinal-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('mediaFinal-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}