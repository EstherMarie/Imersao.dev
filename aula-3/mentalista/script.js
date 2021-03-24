let button = document.querySelector('button');
let resultado = document.querySelector('.page-result');

let numeroSecreto = Math.floor(Math.random() * 10);
console.log('Número Secreto ', numeroSecreto);

let h3 = document.querySelector('h3');
let span = document.querySelector('span');

var tentativas = 3;

button.addEventListener('click', function jogo() {
	var input = document.querySelector('input');
	var chute = parseInt(input.value);
	button.textContent = 'Verificar';
	resultado.innerHTML = '';

	if (numeroSecreto == chute && tentativas >= 0) {
		h3.innerHTML = 'Acertou!';

		button.textContent = 'Jogar Novamente';
	} else if (chute > numeroSecreto && tentativas > 0) {
		resultado.innerHTML = 'O número secreto é menor.';
		chute = parseInt(input.value);
		console.log(chute);
		button.textContent = 'Verificar';
		tentativas--;
		span.innerHTML = tentativas;
		console.log('Tentativas: ', tentativas);
	} else if (chute < numeroSecreto && tentativas > 0) {
		resultado.innerHTML = 'O número secreto é maior.';
		chute = parseInt(input.value);
		console.log(chute);
		button.textContent = 'Verificar';
		tentativas--;
		span.innerHTML = tentativas;
		console.log('Tentativas: ', tentativas);
	} else if (tentativas == 0) {
		h3.innerHTML =
			'Suas tentativas acabaram. O número secreto era ' + numeroSecreto;

		button.textContent = 'Jogar Novamente';
	}

	if (button.textContent == 'Jogar Novamente') {
		button.addEventListener('click', () => {
			window.location.reload(true);
		});
	}
});

// Feito na aula:
/*
var numeroSecreto = parseInt(Math.random() * 10);
var tentativas = 3;

while (tentativas > 0) {
	var chute = parseInt(prompt('Digite um número entre 0 e 10'));

	if (numeroSecreto == chute) {
		alert('Acertou');
		break;
	} else if (chute > numeroSecreto) {
		alert('O número secreto é menor.');
		tentativas--;
	} else if (chute < numeroSecreto) {
		alert('O número secreto é maior.');
		tentativas--;
	}
}

if (chute != numeroSecreto) {
	alert('Suas tentativas acabaram. O número secreto era ' + numeroSecreto);
}
*/
