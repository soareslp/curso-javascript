function verificaSeOChutePossuiValorValido(chute) {
    const numero =+ chute;

    if (chuteForInvalido(numero)) {
       elementoChute.innerHTML += '<div>Chute inválido. Fale um número</div>'
       return
    }

    if (numeroMaiorOuMenorQuePermitido(numero)) {
        elementoChute.innerHTML += `<div>Chute fora do limite. Deve estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h1>Parabéns! Você acertou!!</h1>
        <h3>O número secreto é o ${numeroSecreto}</h3>
        <h3>Você acertou em ${tentativas} tentativa(s)</h3>
        
        <button id="reiniciar" class="btnJogar">Jogar Novamente</button>`
    }else if (numero > numeroSecreto) {
        tentativas++;
        elementoChute.innerHTML += 
        `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    }else {
        tentativas++
        elementoChute.innerHTML += 
        `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }
}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == "reiniciar") {
        window.location.reload()
    }
})

recognition.addEventListener('end', () => recognition.start())