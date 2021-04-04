let card_back_player = document.querySelector('.card-back-player');
let carta_jogador = document.querySelector('.carta-jogador');
let card_back_maquina = document.querySelector('.card-back-maquina');
let carta_maquina = document.querySelector('.carta-maquina');

let cartaMaquina;
let cartaJogador;
let cartas = [
	{
		nome: 'Creator',
		time: 'Team NV',
		raca: 'Protoss',
		pais: 'https://duckduckgo.com/i/35f25a64.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
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
		nome: 'SoS',
		time: 'Team NV',
		raca: 'Protoss',
		pais: 'https://duckduckgo.com/i/35f25a64.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/week2/sos.jpg',
		atributos: {
			Ataque: 4,
			Defesa: 3,
			Tática: 5,
			Mentalidade: 5,
			GameSense: 3,
			Micro: 3,
		},
	},
	{
		nome: 'DRG',
		time: 'Team NV',
		raca: 'Zerg',
		pais: 'https://duckduckgo.com/i/35f25a64.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/zerg.svg',
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
		pais: 'https://duckduckgo.com/i/35f25a64.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/terran.svg',
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
		nome: 'Stats',
		time: 'Afreeca Freecs',
		raca: 'Protoss',
		pais: 'https://duckduckgo.com/i/35f25a64.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/week2/stats.jpg',
		atributos: {
			Ataque: 4.5,
			Defesa: 5,
			Tática: 3.5,
			Mentalidade: 4,
			GameSense: 5,
			Micro: 4.5,
		},
	},
	{
		nome: 'Armani',
		time: 'Afreeca Freecs',
		raca: 'Zerg',
		pais: 'https://duckduckgo.com/i/35f25a64.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/zerg.svg',
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
		pais: 'https://duckduckgo.com/i/35f25a64.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
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
		pais: 'https://duckduckgo.com/i/35f25a64.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/terran.svg',
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
		time: 'Shopify Rebellion',
		raca: 'Terran',
		pais: 'https://duckduckgo.com/i/35f25a64.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/terran.svg',
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
		time: 'Shopify Rebellion',
		raca: 'Zerg',
		pais: 'https://duckduckgo.com/i/912c9392.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/zerg.svg',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/week2/lambo.jpg',
		atributos: {
			Ataque: 4,
			Defesa: 2,
			Tática: 4,
			Mentalidade: 3,
			GameSense: 3,
			Micro: 3,
		},
	},
	{
		nome: 'Scarlett',
		time: 'Shopify Rebellion',
		raca: 'Zerg',
		pais: 'https://duckduckgo.com/i/42d29b63.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/zerg.svg',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/week2/scarlett.jpg',
		atributos: {
			Ataque: 3,
			Defesa: 3,
			Tática: 4,
			Mentalidade: 4,
			GameSense: 3,
			Micro: 3,
		},
	},
	{
		nome: 'Clem',
		time: 'Team Liquid',
		raca: 'Terran',
		pais: 'https://duckduckgo.com/i/901a1c0a.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/terran.svg',
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
		pais: 'https://duckduckgo.com/i/719588b1.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
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
		pais: 'https://duckduckgo.com/i/8f6c042d.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
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
		nome: 'Kelazhur',
		time: 'Team Liquid',
		raca: 'Terran',
		pais: 'https://duckduckgo.com/i/cb286b9b.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/terran.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/730091580706259084/827699011858989066/Kelazhur.jpg',
		atributos: {
			Ataque: 4,
			Defesa: 3,
			Tática: 3,
			Mentalidade: 4,
			GameSense: 3,
			Micro: 4,
		},
	},
	{
		nome: 'Rogue',
		time: 'DPG',
		raca: 'Zerg',
		pais: 'https://duckduckgo.com/i/35f25a64.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/zerg.svg',
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
		pais: 'https://duckduckgo.com/i/35f25a64.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
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
		pais: 'https://duckduckgo.com/i/35f25a64.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/terran.svg',
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
		pais: 'https://duckduckgo.com/i/65032114.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
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
		pais: 'https://duckduckgo.com/i/35f25a64.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
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
		pais: 'https://duckduckgo.com/i/35f25a64.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/zerg.svg',
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
	{
		nome: 'INnoVation',
		time: 'KaiZi Gaming',
		raca: 'Terran',
		pais: 'https://duckduckgo.com/i/35f25a64.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/terran.svg',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/innovation.jpg',
		atributos: {
			Ataque: 5,
			Defesa: 4,
			Tática: 4,
			Mentalidade: 5,
			GameSense: 4,
			Micro: 4,
		},
	},
	{
		nome: 'Solar',
		time: 'KaiZi Gaming',
		raca: 'Zerg',
		pais: 'https://duckduckgo.com/i/35f25a64.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/zerg.svg',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/solar.jpg',
		atributos: {
			Ataque: 5,
			Defesa: 4,
			Tática: 4,
			Mentalidade: 3,
			GameSense: 5,
			Micro: 4,
		},
	},
	{
		nome: 'TIME',
		time: 'KaiZi Gaming',
		raca: 'Terran',
		pais: 'https://duckduckgo.com/i/86271b84.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/terran.svg',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/TIME.jpg',
		atributos: {
			Ataque: 4,
			Defesa: 3,
			Tática: 4,
			Mentalidade: 3,
			GameSense: 3,
			Micro: 4,
		},
	},
	{
		nome: 'Patience',
		time: 'GGG',
		raca: 'Protoss',
		pais: 'https://duckduckgo.com/i/35f25a64.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/patience.jpg',
		atributos: {
			Ataque: 3,
			Defesa: 4,
			Tática: 2,
			Mentalidade: 3,
			GameSense: 2,
			Micro: 4,
		},
	},
	{
		nome: 'Dream',
		time: 'GGG',
		raca: 'Terran',
		pais: 'https://duckduckgo.com/i/35f25a64.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/terran.svg',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/dream.jpg',
		atributos: {
			Ataque: 4,
			Defesa: 4,
			Tática: 3,
			Mentalidade: 3,
			GameSense: 4,
			Micro: 4,
		},
	},
	{
		nome: 'Cyan',
		time: 'GGG',
		raca: 'Protoss',
		pais: 'https://duckduckgo.com/i/86271b84.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/cyan.jpg',
		atributos: {
			Ataque: 3,
			Defesa: 4,
			Tática: 3,
			Mentalidade: 2,
			GameSense: 2,
			Micro: 3,
		},
	},
	{
		nome: 'Cham',
		time: 'Team eXoN',
		raca: 'Zerg',
		pais: 'https://duckduckgo.com/i/5d875af6.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/zerg.svg',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/cham.jpg',
		atributos: {
			Ataque: 3,
			Defesa: 3,
			Tática: 3,
			Mentalidade: 3,
			GameSense: 2,
			Micro: 3,
		},
	},
	{
		nome: 'SpeCial',
		time: 'Team eXoN',
		raca: 'Terran',
		pais: 'https://duckduckgo.com/i/5d875af6.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/terran.svg',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/week2/special.jpg',
		atributos: {
			Ataque: 4,
			Defesa: 3,
			Tática: 4,
			Mentalidade: 4,
			GameSense: 4,
			Micro: 4,
		},
	},
	{
		nome: 'XY',
		time: 'Invictus Gaming',
		raca: 'Terran',
		pais: 'https://duckduckgo.com/i/86271b84.png',
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/terran.svg',
		imagem:
			'https://tl.net/staff/Waxangel/CTC/WTL2021summer/powergon/week2/xy.jpg',
		atributos: {
			Ataque: 1,
			Defesa: 3,
			Tática: 2,
			Mentalidade: 5,
			GameSense: 3,
			Micro: 1,
		},
	},
];

/*
  {
    nome: "",
    time: "",
    raca: "",
    pais: "",
    imagem: "",
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

let pontosJogador = 0;
let pontosMaquina = 0;

/* Atenção aqui: */
let arrCartasJogador = [];

let metade = cartas.length / 2;

for (let i = 0; i < metade; i++) {
	let numeroCarta = parseInt(Math.random() * cartas.length);
	arrCartasJogador.push(cartas[numeroCarta]);
	cartas.splice(numeroCarta, 1);

	// console.log('i', i);
	// console.log('numeroCarta', numeroCarta);
	// console.log('arrCartasJogador', arrCartasJogador);
	// console.log('cartas', cartas);
}

let arrCartasMaquina = cartas;

/* Fim da edição
 */

atualizaPlacar();
atualizaQuantidadeDeCartas();

function atualizaQuantidadeDeCartas() {
	let divQuantidadeCartas = document.querySelector('.quantidade-cartas');
	// let html = 'Quantidade de cartas no jogo: ' + cartas.length;
	let html =
		'Sua quantidade de cartas no jogo: ' +
		arrCartasJogador.length +
		' | ' +
		'Quantidade de cartas do computador: ' +
		arrCartasMaquina.length;

	divQuantidadeCartas.innerHTML = html;
}

function atualizaPlacar() {
	let divPlacar = document.querySelector('.placar');
	let html = 'Jogador ' + pontosJogador + ' / ' + pontosMaquina + ' Máquina';

	divPlacar.innerHTML = html;
}

function sortearCarta() {
	// let numeroCartaMaquina = parseInt(Math.random() * cartas.length);
	// cartaMaquina = cartas[numeroCartaMaquina];
	// cartas.splice(numeroCartaMaquina, 1);

	// let numeroCartaJogador = parseInt(Math.random() * cartas.length);
	// cartaJogador = cartas[numeroCartaJogador];
	// cartas.splice(numeroCartaJogador, 1);

	let numeroCartaMaquina = parseInt(Math.random() * arrCartasMaquina.length);
	cartaMaquina = arrCartasMaquina[numeroCartaMaquina];

	let numeroCartaJogador = parseInt(Math.random() * arrCartasJogador.length);
	cartaJogador = arrCartasJogador[numeroCartaJogador];

	document.getElementById('btnSortear').disabled = true;
	/*
  document.getElementById("btnJogar").disabled = false;
  */

	exibeCartaJogador();

	/* Declarada no escopo global:
  let card_back_player = document.querySelector(".card-back-player");
  let carta_jogador = document.querySelector(".carta-jogador");
  */

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
	let pais = document.querySelector('.pais');
	pais.src = cartaJogador.pais;
	let icon = document.querySelector('.icon');
	icon.src = cartaJogador.icon;

	var opcoesTexto = '';

	for (var atributo in cartaJogador.atributos) {
		opcoesTexto +=
			"<div><input type='radio' name='atributo' onClick='ativarBotaoJogar()' value='" +
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

function ativarBotaoJogar() {
	document.getElementById('btnJogar').disabled = false;
}

function jogar() {
	var atributoSelecionado = obtemAtributoSelecionado();
	var divResultado = document.getElementById('resultado');
	let btnRodada = document.getElementById('btnJogar');

	let indexCartaMaquina = arrCartasMaquina.indexOf(cartaMaquina);
	let indexCartaJogador = arrCartasJogador.indexOf(cartaJogador);

	if (
		cartaJogador.atributos[atributoSelecionado] >
		cartaMaquina.atributos[atributoSelecionado]
	) {
		htmlResultado = '<p class="resultado-final">Venceu!</p>';
		pontosJogador++;
		arrCartasJogador.push(cartaMaquina);
		arrCartasMaquina.splice(indexCartaMaquina, 1);
	} else if (
		cartaJogador.atributos[atributoSelecionado] <
		cartaMaquina.atributos[atributoSelecionado]
	) {
		htmlResultado = '<p class="resultado-final">Perdeu :(</p>';
		pontosMaquina++;
		arrCartasMaquina.push(cartaJogador);
		arrCartasJogador.splice(indexCartaJogador, 1);
	} else {
		htmlResultado = '<p class="resultado-final">Empatou!</p>';
	}

	// console.log('arrCartasJogador', arrCartasJogador.map( o => o.nome ));
	// console.log('arrCartasMaquina', arrCartasMaquina.map( o => o.nome ));

	/*
  let fimDeJogo = document.querySelector("wrapper");
  */

	// if (cartas.length == 0) {
	// 	alert('Fim de jogo');
	// 	btnRodada.disabled = true;
	// 	if (pontosJogador > pontosMaquina) {
	// 		htmlResultado =
	// 			'<p class="resultado-final">Parabéns! :D <br> Você venceu!</p>';
	// 	} else if (pontosJogador < pontosMaquina) {
	// 		htmlResultado = '<p class="resultado-final">Você perdeu ☹</p>';
	// 	} else {
	// 		htmlResultado = '<p class="resultado-final">Empate!</p>';
	// 	}
	// }
	if (arrCartasMaquina == 0) {
		htmlResultado =
			'<p class="resultado-final">Parabéns! :D <br> Você venceu!</p>';
		btnRodada.disabled = true;
	} else if (arrCartasJogador == 0) {
		htmlResultado = '<p class="resultado-final">Você perdeu ☹</p>';
		btnRodada.disabled = true;
	} else {
		document.getElementById('btnProximaRodada').disabled = false;
	}

	divResultado.innerHTML = htmlResultado;

	btnRodada.textContent = 'Próxima rodada';

	if (btnRodada.textContent === 'Próxima rodada') {
		//  btnProximaRodada.addEventListener('click', proximaRodada())
		btnRodada.setAttribute('onclick', 'proximaRodada()');
	} else {
		btnRodada.setAttribute('onclick', 'jogar()');
	}

	/*
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnProximaRodada").disabled = false;
  */
	atualizaPlacar();

	exibeCartaMaquina();
	atualizaQuantidadeDeCartas();

	/* Declarada no escopo global:
  let card_back_maquina = document.querySelector(".card-back-maquina");
  let carta_maquina = document.querySelector(".carta-maquina");
  */

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
	let paisMaq = document.querySelector('.pais-maq');
	paisMaq.src = cartaMaquina.pais;
	let iconMaq = document.querySelector('.icon-maq');
	iconMaq.src = cartaMaquina.icon;

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

function proximaRodada() {
	card_back_player.style.display = 'flex';
	carta_jogador.style.display = 'none';
	card_back_maquina.style.display = 'flex';
	carta_maquina.style.display = 'none';

	document.getElementById('btnSortear').disabled = false;

	document.getElementById('btnJogar').disabled = true;
	document.getElementById('btnProximaRodada').disabled = true;

	var divResultado = document.getElementById('resultado');
	divResultado.innerHTML = '';
	let btnJogar = document.querySelector('.button-jogar');
	btnJogar.textContent = 'Jogar';
	btnJogar.setAttribute('onclick', 'jogar()');
}
