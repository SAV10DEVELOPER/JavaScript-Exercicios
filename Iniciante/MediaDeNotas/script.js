function media() {
    var nota1 = parseFloat(document.getElementById('Nota1').value)
    var nota2 = parseFloat(document.getElementById('Nota2').value)
    var nota3 = parseFloat(document.getElementById('Nota3').value)
    var nota4 = parseFloat(document.getElementById('Nota4').value)

    var media = (nota1 + nota2 + nota3 + nota4) / 4

    document.getElementById('Resultado').innerHTML = `<p> A média das notas ${nota1}, ${nota2}, ${nota3} e ${nota4} foi ${media}. </p>`
}

function limpar() {
    var limparNota1 = document.getElementById('Nota1')
    var limparNota2 = document.getElementById('Nota2')
    var limparNota3 = document.getElementById('Nota3')
    var limparNota4 = document.getElementById('Nota4')

    limparNota1.value = ''
    limparNota2.value = ''
    limparNota3.value = ''
    limparNota4.value = ''

    document.getElementById('Resultado').innerHTML = ''
}