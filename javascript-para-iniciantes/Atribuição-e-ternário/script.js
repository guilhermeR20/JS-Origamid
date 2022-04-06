//Operadores de atribuição

var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

var numero = 20;

numero += 10;
console.log(numero);

//Operador Ternario
var idade = 19;
var podeBeber = (idade >= 18) ? 'Pode beber 1' : 'Não pode bebe 1';
console.log(podeBeber) // Pode beber

// condição ? true : false

var idade = 20;

var podeBeber;
var naoPossuiDiabetes = true;
podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode Beber 2 ' : 'Não pode beber 2 ';

console.log(podeBeber)

var possuiFaculdade = true;
if(possuiFaculdade)
 console.log('Sim possui');
 else
 console.log('Nao possui');