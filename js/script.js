let botaoMedia = document.querySelector('.botao')
botaoMedia.addEventListener('click', function( ) {
    
    let tnota1 = document.getElementById('inota1')
    let tnota2 = document.getElementById('inota2')
    let tnota3 = document.getElementById('inota3')
    let aprov = document.getElementById('aprovado')

    let nota1 = Number(tnota1.value)
    let nota2 = Number(tnota2.value)
    let nota3 = Number(tnota3.value)

    let m = (nota1 + nota2 + nota3) / 3
    
    if(m >= 7 ) {
        aprov.innerHTML = `Aprovado...`
        document.querySelector('#mediaNotas').value = m.toFixed(2)

    } else {
        aprov.innerHTML = `Reprovado`
        document.querySelector('#mediaNotas').value = m.toFixed(2)
       
    } 
})
