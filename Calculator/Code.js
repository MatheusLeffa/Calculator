// Retorna para o display e histórico, o resultado da operação. Função ativada após clicar no botão "=", representado na linha 59 do HTML. 
function resultado() {
    let operaçao = document.getElementById("display").value; // Pega o elemento com ID "display", que está na linha 23 do HTML, e atribuí seu valor dentro da variável "operação".
    let historico; // Cria a variavel histórico.

    if (/[^0-9\+\-\*\/\.\(\)\**]/.test(form1.display.value)) { // Testa o display, se não está com valores diferentes de [0-9] e [+-*/.()].

        alert("São aceitos somente valores numéricos[0-9] e sinais matemáticos[+, -, *, /, **, (), .] na conta.");

    } else {
        let result = eval(document.getElementById("display").value); // A função interna do JS "eval" irá considerar o valor string do display como um código JS, e irá executá-lo. Atribuíndo a variável "result" o resultado da operação.

        if (Number.isInteger(result)) { // Testa se o resultado é inteiro. Se sim, mostra no display o resultado sem ponto flutuante. Se não for inteiro, mostra no display o resultado com 2 casas decimais após a virgula.

            document.getElementById("display").value = result; // Retorna para o display o resultado da operação.
            historico = `${operaçao} = ${result}`; // Atribuí à variável "historico" uma string com a conta e o resultado.

        } else {

            document.getElementById("display").value = result.toFixed(2); // Retorna para o display o resultado da operação.
            historico = `${operaçao} = ${result.toFixed(2)}`; // Atribuí à variável "historico" uma string com a conta e o resultado.

        }
        list(historico) // Retorna para o histórico a conta e o resultado das operações. 
    }
}

// Função para criar elementos no historico com a conta e o resultado das operações.
function list(operação) {
    let lista = document.getElementById("lista"); // Pega o elemento com ID "lista", que está na linha 79 do HTML.
    let item = document.createElement("li"); // Cria o elemento "li"
    item.appendChild(document.createTextNode(operação)); // Atribuí a string da variável "historico" das linhas 16 ou 21 deste documento, como um nó filho do elemento "li".
    lista.appendChild(item); // Acrecenta o elemento "li" com todos os seus valores ao elemento de ID "lista"(linha 79 do HTML).
}

// Limpa o histórico. Função ativada após clicar no botão "Limpar histórico", representado na linha 40 do HTML. 
function limparHistórico() {
    let lista = document.getElementById("lista"); // Pega o elemento com ID "lista", que está na linha 79 do HTML.
    lista.innerHTML = ""; // Substituí tudo que está dentro do elemento com ID "lista" por ""(espaço vazio). Ou seja, apaga tudo que está dentro do elemento com ID "lista" da linha 51 do HTML.
}

// Apaga o último caractere do display.
function apagarCaracter() {
    let str = document.getElementById("display").value; // Atribuí o valores do elemento com ID "lista" à variável "srt".
    str = str.substring(0, str.length - 1) // Utilizo o método substring para remover o ultimo elemento da string "display".
    document.getElementById("display").value = str; // Retorna para o display a string sem o ultimo elemento.
}