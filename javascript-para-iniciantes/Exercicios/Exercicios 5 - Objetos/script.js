// Crie um objeto com os seus dados pessoais
var pessoa = {
  nome: 'Guilherme',
  sobreNome: 'Rocha Lima',
  cpf: '049.277.251-70',
  idade: 21,
  
}
// Deve possui pelo menos duas propriedades nome e sobrenome
pessoa.nomeCompleto = function(){
  return `${this.nome} ${this.sobreNome}`;
}
// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;
// Crie um objeto de um cachorro que represente um labrador,
var cachorro ={
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  latir(pessoa){
    if(pessoa === 'homem') {
      return 'latir';
    }else{
        return 'Nada';
      }
  }
}
// preto com 10 anos, que late ao ver um homem
