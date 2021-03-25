var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"]
//var nomesFilmes = [["Toy Story","Star Wars","Interestellar"]]

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">")
}


// Explicação da aula:
/* 
var filmes = ["Star Wars", "Toy Story", "Interestellar"]

for (var i = 0; i < filmes.length; i++){
  console.log(filmes[i]) // exibe todos os filmes da array
}
*/

// Anotações - Array - While - For
/*
- Array (Métodos comuns para inserir e retirar itens)
    filmes.shift() -> retira o primeiro item da array
    filmes.unshift() -> coloca um item no início da array

    filmes.push() -> coloca um item no final da array
    filmes.pop -> retira o último item da array

////////////

- While:
    var a = 3;
    while (a > 0){
        a--
    }

- For é a mesma coisa, só que escrito de outro modo:

    for (var i = 3; i > 0; i--){
        console.log(i) // return 3 | 2 (em outra linha) | 1 (em outra linha)
    }

////

- Explicação:
    for (declaração da variável; condição para entrar no loop; ação realizada a cada loop){
    }

    * i = iteração, o objeto em que a gente vai iterar

*/
