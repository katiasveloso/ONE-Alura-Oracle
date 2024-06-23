alert('Boas vindas ao Jodo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');

//se chute for igual ao número secretos
if (chute == numeroSecreto) {
  alert('Isso ai! Você descobriu o número secreto(5)');
}else {
    alert('Você errou :(')
}
