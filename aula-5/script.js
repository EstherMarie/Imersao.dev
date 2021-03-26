let input = document.querySelector('#filme');
let listaFilmes = document.querySelector('#listaFilmes');
let filmesAdicionados = [];

function adicionarFilme() {
	let link = input.value; // se for declarada fora da função, retornará o valor inicial, ou seja, uma string vazia
	let img = document.createElement('img');

	if (filmesAdicionados.includes(link)) {
		alert('Filme já adicionado');
	} else if (link.endsWith('.jpg')) {
		listaFilmes.appendChild(img);
		img.setAttribute('src', link);

		filmesAdicionados.push(link);
	} else {
		alert('Imagem inválida');
	}

	input.value = '';

	// console.log(link);
	// console.log(img);
	//listaFilmes.innerHTML = `<img src="${input.value}">`
}

// Feito na aula:
/*
function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector("#filme");
  var filmeFavorito = campoFilmeFavorito.value;
  var filmesAdicionados = [];

  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    alert("Imagem inválida");
  }

  campoFilmeFavorito.value = ""; // obs: adicionar um espaço entre as aspas impede que o texto placeholder apareça
}

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector("#listaFilmes");
  var elementoFilme = "<img src=" + filme + ">";
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;

  // console.log(listaFilmes.innerHTML)
}

*/

// link imagem: https://m.media-amazon.com/images/M/MV5BNjAzZTdmMmUtZDRjNi00NDRmLWFjZGQtYjhmMWVhNWI0YTIwXkEyXkFqcGdeQXVyMTE5MjE5NzMw._V1_UX182_CR0,0,182,268_AL_.jpg

// https://m.media-amazon.com/images/M/MV5BY2YyYmUyNmItYzRhMi00OWI1LTk2M2EtNmI0ZjZmYmY0MTZiXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_UY268_CR3,0,182,268_AL_.jpg

// Funções -> são blocos de códigos que são executados em um determinado momento (apenas quando são chamadas)
