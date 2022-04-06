var pessoa = {
  nome: 'Guilherme',
  idade: 21,
}

console.log(pessoa.idade);

var quadrado = {
  lados: 4,
  area (lado){
    return lado * lado;
  },
  perimetro (lado){
    return this.lados * lado;
  },
 /* testeCinco(){
    return 5;
  },*/
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random());

console.log('Hello World :D');

var menu = {
  width: 800,
  height: 50,
  BackgroundColor: '#035',
}

menu.BackgroundColor = '#000';
menu.color = 'blue';

menu.esconder = function(){
  console.log('Escondi');
}

var bg = menu.BackgroundColor; //Bg = background color