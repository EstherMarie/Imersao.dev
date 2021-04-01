var cartaMaquina;
var cartaJogador;
var cartas = [
	{
		nome: 'Creator',
		time: 'Team NV',
		raca: 'Protoss',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/creator.jpg',
		atributos: {
			Ataque: 3,
			Defesa: 3,
			Tática: 3,
			Mentalidade: 2,
			GameSense: 3,
			Micro: 4,
		},
	},
	{
		nome: 'DRG',
		time: 'Team NV',
		raca: 'Zerg',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/dongraegu.jpg',
		atributos: {
			Ataque: 4,
			Defesa: 3,
			Tática: 3,
			Mentalidade: 4,
			GameSense: 4,
			Micro: 2,
		},
	},
	{
		nome: 'Maru',
		time: 'Team NV',
		raca: 'Terran',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/maru.jpg',
		atributos: {
			Ataque: 5,
			Defesa: 5,
			Tática: 4,
			Mentalidade: 4,
			GameSense: 5,
			Micro: 5,
		},
	},
	{
		nome: 'Armani',
		time: 'Afreeca Freecs',
		raca: 'Zerg',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/armani.jpg',
		atributos: {
			Ataque: 3,
			Defesa: 3,
			Tática: 3,
			Mentalidade: 3,
			GameSense: 3,
			Micro: 4,
		},
	},
	{
		nome: 'Trap',
		time: 'Afreeca Freecs',
		raca: 'Protoss',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/trap.jpg',
		atributos: {
			Ataque: 4,
			Defesa: 5,
			Tática: 5,
			Mentalidade: 3,
			GameSense: 4,
			Micro: 5,
		},
	},
	{
		nome: 'TY',
		time: 'Afreeca Freecs',
		raca: 'Terran',
		imagem: 'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/ty.jpg',
		atributos: {
			Ataque: 4,
			Defesa: 5,
			Tática: 4,
			Mentalidade: 4,
			GameSense: 5,
			Micro: 3,
		},
	},
	{
		nome: 'ByuN',
		time: 'Shopify Rebelion',
		raca: 'Terran',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/byun.jpg',
		atributos: {
			Ataque: 5,
			Defesa: 3,
			Tática: 4,
			Mentalidade: 3,
			GameSense: 4,
			Micro: 5,
		},
	},
	{
		nome: 'Lambo',
		time: 'Shopify Rebelion',
		raca: 'Zerg',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/lambo.jpg',
		atributos: {
			Ataque: 5,
			Defesa: 2,
			Tática: 3,
			Mentalidade: 3,
			GameSense: 4,
			Micro: 3,
		},
	},
	{
		nome: 'Scarlett',
		time: 'Shopify Rebelion',
		raca: 'Zerg',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/scarlett.jpg',
		atributos: {
			Ataque: 3,
			Defesa: 3,
			Tática: 3,
			Mentalidade: 4,
			GameSense: 4,
			Micro: 3,
		},
	},
	{
		nome: 'Clem',
		time: 'Team Liquid',
		raca: 'Terran',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/clem.jpg',
		atributos: {
			Ataque: 5,
			Defesa: 4,
			Tática: 4,
			Mentalidade: 4,
			GameSense: 3,
			Micro: 5,
		},
	},
	{
		nome: 'Harstem',
		time: 'Team Liquid',
		raca: 'Protoss',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/harstem.jpg',
		atributos: {
			Ataque: 3,
			Defesa: 3,
			Tática: 3,
			Mentalidade: 4,
			GameSense: 4,
			Micro: 3,
		},
	},
	{
		nome: 'MaNa',
		time: 'Team Liquid',
		raca: 'Protoss',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/mana.jpg',
		atributos: {
			Ataque: 3,
			Defesa: 3,
			Tática: 3,
			Mentalidade: 3,
			GameSense: 3,
			Micro: 3,
		},
	},
	{
		nome: 'Rogue',
		time: 'DPG',
		raca: 'Zerg',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/rogue.jpg',
		atributos: {
			Ataque: 4,
			Defesa: 4,
			Tática: 5,
			Mentalidade: 4,
			GameSense: 5,
			Micro: 4,
		},
	},
	{
		nome: 'Zest',
		time: 'DPG',
		raca: 'Protoss',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/zest.jpg',
		atributos: {
			Ataque: 5,
			Defesa: 4,
			Tática: 4,
			Mentalidade: 4,
			GameSense: 4,
			Micro: 5,
		},
	},
	{
		nome: 'Cure',
		time: 'DPG',
		raca: 'Terran',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/cure.jpg',
		atributos: {
			Ataque: 4,
			Defesa: 5,
			Tática: 4,
			Mentalidade: 4,
			GameSense: 5,
			Micro: 4,
		},
	},
	{
		nome: 'Astrea',
		time: 'Alpha X',
		raca: 'Protoss',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/astrea.jpg',
		atributos: {
			Ataque: 3,
			Defesa: 4,
			Tática: 3,
			Mentalidade: 3,
			GameSense: 4,
			Micro: 3,
		},
	},
	{
		nome: 'Zoun',
		time: 'Alpha X',
		raca: 'Protoss',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/zoun.jpg',
		atributos: {
			Ataque: 4,
			Defesa: 3,
			Tática: 4,
			Mentalidade: 3,
			GameSense: 4,
			Micro: 3,
		},
	},
	{
		nome: 'RagnaroK',
		time: 'Alpha X',
		raca: 'Zerg',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/ragnarok.jpg',
		atributos: {
			Ataque: 4,
			Defesa: 3,
			Tática: 4,
			Mentalidade: 3,
			GameSense: 3,
			Micro: 3,
		},
	},
];

/*
  {
    nome: "",
    time: "",
    raca: "",
    imagem:
      "",
    atributos: {
      Ataque: ,
      Defesa: ,
      Tática: ,
      Mentalidade: ,
      GameSense: ,
      Micro: 
    }
  }
*/

function sortearCarta() {
	var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
	cartaMaquina = cartas[numeroCartaMaquina];

	var numeroCartaJogador = parseInt(Math.random() * cartas.length);
	while (numeroCartaJogador == numeroCartaMaquina) {
		numeroCartaJogador = parseInt(Math.random() * cartas.length);
	}
	cartaJogador = cartas[numeroCartaJogador];
	// console.log(cartaJogador);

	document.getElementById('btnSortear').disabled = true;
	document.getElementById('btnJogar').disabled = false;

	exibeCartaJogador();

	let card_back_player = document.querySelector('.card-back-player');
	let carta_jogador = document.querySelector('.carta-jogador');

	card_back_player.style.display = 'none';
	carta_jogador.style.display = 'flex';
}

function exibeCartaJogador() {
	let nome = document.querySelector('.player');
	nome.textContent = cartaJogador.nome;
	let imgCartaJogador = document.querySelector('.img-carta-jogador');
	imgCartaJogador.src = cartaJogador.imagem;
	let time = document.querySelector('.time');
	time.textContent = cartaJogador.time;
	let raca = document.querySelector('.raca');
	raca.textContent = cartaJogador.raca;

	var opcoesTexto = '';

	for (var atributo in cartaJogador.atributos) {
		opcoesTexto +=
			"<div><input type='radio' name='atributo' value='" +
			atributo +
			"'>" +
			atributo +
			' ' +
			cartaJogador.atributos[atributo] +
			'</div>';
	}

	let areaAtributos = document.querySelector('.area-atributos');
	areaAtributos.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
	var radioAtributo = document.getElementsByName('atributo');
	for (var i = 0; i < radioAtributo.length; i++) {
		if (radioAtributo[i].checked) {
			return radioAtributo[i].value;
		}
	}
}

function jogar() {
	var atributoSelecionado = obtemAtributoSelecionado();
	var divResultado = document.getElementById('resultado');

	if (
		cartaJogador.atributos[atributoSelecionado] >
		cartaMaquina.atributos[atributoSelecionado]
	) {
		htmlResultado = '<p class="resultado-final">Venceu!</p>';
	} else if (
		cartaJogador.atributos[atributoSelecionado] <
		cartaMaquina.atributos[atributoSelecionado]
	) {
		htmlResultado = '<p class="resultado-final">Perdeu :(</p>';
	} else {
		htmlResultado = '<p class="resultado-final">Empatou!</p>';
	}
	divResultado.innerHTML = htmlResultado;

	exibeCartaMaquina();

	let card_back_maquina = document.querySelector('.card-back-maquina');
	let carta_maquina = document.querySelector('.carta-maquina');

	card_back_maquina.style.display = 'none';
	carta_maquina.style.display = 'flex';
}

function exibeCartaMaquina() {
	let nomeMaq = document.querySelector('.player-maq');
	nomeMaq.textContent = cartaMaquina.nome;

	let imgCartaMaquina = document.querySelector('.img-carta-maquina');
	imgCartaMaquina.src = cartaMaquina.imagem;
	let timeMaq = document.querySelector('.time-maq');
	timeMaq.textContent = cartaMaquina.time;
	let racaMaq = document.querySelector('.raca-maq');
	racaMaq.textContent = cartaMaquina.raca;

	var opcoesTexto = '';

	for (var atributo in cartaMaquina.atributos) {
		opcoesTexto +=
			'<div><p>' +
			atributo +
			' ' +
			cartaMaquina.atributos[atributo] +
			'</p></div>';
	}

	let areaAtributosMaq = document.querySelector('.area-atributos-maq');
	areaAtributosMaq.innerHTML = opcoesTexto;
}
