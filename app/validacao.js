function verificaChute(chute) {
  const numero = +chute

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += `<div>Não é um número</div>`
    return
  }

  if (numeroNaoPermitido(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
    return
  }

  if (numero  === numeroSecreto) {
    document.body.innerHTML = `
    <h1>Você acertou!</h1>
    
    <h3>O número secreto é ${numeroSecreto}</h3>
    `
  } else if (numero < numeroSecreto) {
    elementoChute.innerHTML += ` <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
  } else {
    elementoChute.innerHTML += ` <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero)
}

function numeroNaoPermitido(numero) {
  return numero > maiorValor || numero < menorValor
}