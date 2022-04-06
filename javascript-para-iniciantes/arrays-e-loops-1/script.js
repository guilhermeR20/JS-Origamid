var videoGames = ['Switch', 'PS5', 'Xbox'];

videoGames[0] // Switch 
videoGames[2] // Xbox

var ultimoItem = videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3 (tamanho atual da array)

for(var numero = 0; numero < 10; numero++){
  console.log(numero);
}
console.log('-----------------------------------------------------------------');
var i = 0;
while (i < 10) {
  console.log(i);
  i++
}

var videoGames2 = ['PSP','PS3','PS2','Wii'];

for(var item = 0; item < 4; item++){
  console.log(videoGames2[item]);
  if(videoGames2[item] === 'PS3'){
    break;
  }
}

var frutas = ['Banana','Pera','Maça','Abacaxi', 'Uva'];

frutas.forEach(function(fruta, index){
  console.log(fruta, index, frutas);
})


//Forma não positiva de fazer o for
var numero = 0;
var maximo = 50;
for(;numero < maximo;) {
  console.log(numero);
  numero++;
}
