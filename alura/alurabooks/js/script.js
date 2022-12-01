async function buscaEndereco(cep) {
    var menssagemErro = document.getElementById('erro')
    menssagemErro.innerHTML = ""
  try {
    var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    var consultaCepConvertido = await consultaCep.json();
    console.log(consultaCepConvertido);
    if (consultaCepConvertido.erro) {
      throw Error("CPF não existente!");
    }
    var cidade = document.getElementById('cidade')
    var logradouro = document.getElementById('endereco')
    var estado = document.getElementById('estado')

    cidade.value = consultaCepConvertido.localidade
    logradouro.value = consultaCepConvertido.logradouro
    estado.value = consultaCepConvertido.uf

    console.log(consultaCepConvertido);
    return consultaCepConvertido;
  } catch (erro) {
    menssagemErro.innerHTML = "<p>CEP inválido. Tente novamente!</p>"
    console.log(erro);
  }
}

var cep = document.getElementById('cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value))