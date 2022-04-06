// Verifique se a sua idade é maior do que a de algum parente
var idade = 21;
var idadePai = 51;

if((idade > idadePai)){
  console.log('Você é mais velho que seu pai')
}else if(idade === idadePai){
  console.log('Você tem a mesma idade que seu pai');
}else{
  console.log('Você é mais novo que seu pai.')
}
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
// Qual valor é retornado na seguinte expressão? R= Verdadeira
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);
// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if((brasil>china)){
  console.log('Brasil tem mais habitantes que China');
}else{
  console.log('Brasil tem menos habitantes que China')
}

// O que irá aparecer no console? False
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console? Nada, || significa ou
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}