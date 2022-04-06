function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(2));

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7
console.log(pi()); // Sempre usa () nas funções

// peso e altura são os parâmetros
function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80, 1.8)) // valores declarados as var peso e altura

function corFavorita(cor){
  if(cor === 'azul'){
    return 'Eu gosto do céu';
  } else if (cor === 'verde'){
    return 'Eu gosto de mato'
  }else{
    return 'Eu não gosto de cores'
  }
}

addEventListener('click', function(){ console.log('oi')});

function imc2(peso, altura) { // Não pode definir função com o mesmo nome, por isso IMC2
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(75, 1.80); // retorna o imc e undefined
//console.log(imc(80, 1.80)); // retorna o imc e undefined
console.log(imc2(1000, 1.80))

function terceiraIdade(idade2){
  if (idade2 >= 60){
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade('oi'));

function faltaVisitar(paisesVisitados){
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} países`;
}

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
//outrosDados(); // retorna um erro