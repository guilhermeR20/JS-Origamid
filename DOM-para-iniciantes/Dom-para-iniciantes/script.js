//window.alert(" Usei Window alerta para te avisar sobre este alerta :D");

const href = window.location.href;

console.log(href); // Retornando href da pagina

if (href === 'http://127.0.0.1:5500/Index.html'){
  console.log('é igualzinho');
}else{
  console.log('Não é igual D:');
}
console.log('Oi');
const  h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;

function callbackh1(){
  console.log('Clicou em', h1Selecionado.innerText);
}

/*h1Selecionado.addEventListener('click', function(){
  console.log('Clicou em ', h1Selecionado.innerText);
}) */

h1Selecionado.addEventListener('click', callbackh1);
