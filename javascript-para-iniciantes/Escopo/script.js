// Escopo de Função
//Papel do escopo é evitar conflitos entre nome de variaveis
var carro = 'fusca';
function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

// Escopo de função (pai)
var carro = 'Fusca';

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro);  // Fusca

//Escopo de bloco
if(true) {
  let mes = 'dezembro';
  console.log(mes);
}
//console.log(mes); // Mes

// A partir de agora usar const e let no lugar de var
if(true) {
  const carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // erro, carro is not defined
// For Loop só será criado com let a partir de agora
var i = 50;

for(let i = 0; i < 10; i++){
  console.log(`Número ${i}`);
}

console.log(i *10);

// usar const para criar variaveis
const mes = 'Dezembro';
mes;
const semana = 'sexta'; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29; // Funciona
data;

// Let ele vai manter o escope e permite a modificação do valor da variavel
let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

//let ano = 2020; // erro, redeclarou a variável