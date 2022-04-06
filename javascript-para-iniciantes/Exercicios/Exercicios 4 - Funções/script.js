// Crie uma função para verificar se um valor é Truthy
function verificarValor(valor){
  return !!valor;
}
// Crie uma função matemática que retorne o perímetro de um quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}
// lembrando: perímetro é a soma dos quatro lados do quadrado

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobreNome){
  var nomeCompleto = nome + ' ' + sobreNome;
  // return nome + ' ' + sobreNome; também funciona
  return nomeCompleto;
}
// Crie uma função que verifica se um número é par
function verificarPar(valor){
  if(valor % 2){
    return 'não é par'
  }else if (valor = 0){
    return 'é par'
  }else{
    return 'é par'
  }
  return valor;
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function verificarDado(dado){
  return typeof dado;
}
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener('click', function(){
  console.log('Guilherme Rocha Lima')});
// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
 return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);