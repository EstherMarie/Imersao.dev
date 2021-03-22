function startFunction(){
    let inputDolar = document.querySelector("#inputDolar").value
    let valorDolar = parseFloat(inputDolar)
    let resultado = document.querySelector(".resultado")

    console.log(valorDolar)

    var valorEmRealFixado = (valorDolar * 5.50).toFixed(2)

    resultado.innerHTML = `<h3>R$ </h3> ${valorEmRealFixado}`
}



/* 
var valorEmDolarNumero = parseFloat(prompt("Qual o valor em dolar que você quer converter?")) 
// parseInt => transforma o número dentro de uma string em número inteiro
// parseFloat => aceita casas decimais

var valorEmRealFixado = (valorEmDolarNumero * 5.50).toFixed(2)
// toFixed => define/fixa o número de casas decimais

alert("R$ " + valorEmRealFixado)
*/