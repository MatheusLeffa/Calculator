// Retorna para o display e histórico, o resultado da operação. Função ativada após clicar no botão "=", representado na linha 59 do HTML. 
function resultado() {
    let operaçao = document.getElementById("display").value;
    let historico; 

    if (/[^0-9\+\-\*\/\.\(\)\**]/.test(form1.display.value)) {

        alert("São aceitos somente valores numéricos[0-9] e sinais matemáticos[+, -, *, /, **, (), .] na conta.");

    } else {
        let result = eval(document.getElementById("display").value);
        
        if (Number.isInteger(result)) { 
            
            document.getElementById("display").value = result; 
            historico = `${operaçao} = ${result}`;

        } else {

            document.getElementById("display").value = result.toFixed(2); 
            historico = `${operaçao} = ${result.toFixed(2)}`;

        }
        list(historico);
    }
}

// Função para criar elementos no historico com a conta e o resultado das operações.
function list(operação) {
    let lista = document.getElementById("lista");
    let item = document.createElement("li");
    item.appendChild(document.createTextNode(operação));
    lista.appendChild(item);
}

// Limpa o histórico. Função ativada após clicar no botão "Limpar histórico", representado na linha 40 do HTML. 
function limparHistórico() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";
}

// Apaga o último caractere do display.
function apagarCaracter() {
    let str = document.getElementById("display").value;
    str = str.substring(0, str.length - 1);
    document.getElementById("display").value = str;
}
