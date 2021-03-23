// Feito na aula:

var primeiroValor = parseInt(prompt('Digite o primeiro valor:'));
var segundoValor = parseInt(prompt('Digite o segundo valor:'));

var operacao = prompt(
	'Digite 1 para fazer uma divisão, 2 para multiplicação, 3 para soma, 4 para subtração'
);

if (operacao == 1) {
	var resultado = primeiroValor / segundoValor;
	document.write(
		'<h2>' +
			primeiroValor +
			' / ' +
			segundoValor +
			' = ' +
			resultado +
			'</h2>'
	);
} else if (operacao == 2) {
	var resultado = primeiroValor * segundoValor;
	document.write(
		'<h2>' +
			primeiroValor +
			' x ' +
			segundoValor +
			' = ' +
			resultado +
			'</h2>'
	);
} else if (operacao == 3) {
	var resultado = primeiroValor + segundoValor;
	document.write(
		'<h2>' +
			primeiroValor +
			' + ' +
			segundoValor +
			' = ' +
			resultado +
			'</h2>'
	);
} else if (operacao == 4) {
	var resultado = primeiroValor - segundoValor;
	document.write(
		'<h2>' +
			primeiroValor +
			' - ' +
			segundoValor +
			' = ' +
			resultado +
			'</h2>'
	);
} else {
	document.write('<h2>Opção Inválida</h2>');
}

// Gambiarra
/*
var primeiroValor = parseInt(prompt('Digite o primeiro valor:'))
var segundoValor = parseInt(prompt('Digite o segundo valor:'))

var operacao = prompt('Digite a operação pretendida: \n\n soma: + \n subtração: - \n multiplicação: * \n divisão: /')
console.log(operacao)


var resultadoStr = primeiroValor + operacao + segundoValor
var resultado = eval(resultadoStr)
console.log(resultado)
document.write('<h2>' + primeiroValor + ' ' + operacao + ' ' + segundoValor + ' = ' + resultado + '</h2>')

*/

// Anotações
/*
- document.write() => escreve na tela
- concatenação => juntar palavra com variaveis - ("palavre" + variável)
- if => se
- else => senão
- else if => senão se
- eval() => Função que consegue calcular uma String :D
*/
