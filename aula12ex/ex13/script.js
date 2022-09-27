function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Crianca
                img.setAttribute('src', 'Mcrianca.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'Mjovem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'Madulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'Mvelho.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Crianca
                img.setAttribute('src', 'Fcrianca.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'Fjovem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'Fadulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'Fvelho.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos\n`
        res.appendChild(img)
    }
}