// Retorna para o display e histórico, o resultado da operação. Função ativada após clicar no botão "=", representado na linha 59 do HTML. 
function result() {
    let operation = document.getElementById("display").value;
    let history; 

    if (/[^0-9\+\-\*\/\.\(\)\**]/.test(form1.display.value)) {

        alert("São aceitos somente valores numéricos[0-9] e sinais matemáticos[+, -, *, /, **, (), .] na conta.");

    } else {
        let result = eval(document.getElementById("display").value);
        
        if (Number.isInteger(result)) { 
            
            document.getElementById("display").value = result; 
            history = `${operation} = ${result}`;

        } else {

            document.getElementById("display").value = result.toFixed(2); 
            history = `${operation} = ${result.toFixed(2)}`;

        }
        list(history);
    }
}

// Função para criar elementos no historico com a conta e o resultado das operações.
function list(operação) {
    let list = document.getElementById("list");
    let item = document.createElement("li");
    item.appendChild(document.createTextNode(operação));
    list.appendChild(item);
}

// Limpa o histórico. Função ativada após clicar no botão "Limpar histórico", representado na linha 40 do HTML. 
function cleanHistory() {
    let list = document.getElementById("list");
    list.innerHTML = "";
}

// Apaga o último caractere do display.
function EraseLastDigit() {
    let str = document.getElementById("display").value;
    str = str.substring(0, str.length - 1);
    document.getElementById("display").value = str;
}
