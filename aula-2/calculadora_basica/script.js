// realizar os calculos
// adicionar a possibilidade de clicar nos números
// exibir os números na tela

let input = document.querySelector('input');
let buttons = document.querySelectorAll('button');

let clicked = [];

console.log(input);
console.log(buttons);

// Grande gambiarra:
buttons.forEach((btn) => {
	btn.addEventListener('click', () => {
		clicked.push(btn.value);
		console.log(clicked);

		input.value = clicked.join('');
		console.log(input.value);

		let lastClicked = input.value[input.value.length - 1];
		console.log(lastClicked);

		if (lastClicked === 'C') {
			clicked = [];
			input.value = '';
		}
		if (lastClicked === '=') {
			clicked.pop();

			input.value = clicked.join('');

			if (input === '') {
				input.value = 'Operação Inválida';
			} else {
				console.log(input.value);

				let result = eval(input.value);
				input.value = result;
				console.log(result);

				clicked = [];
			}
		}
	});
});
