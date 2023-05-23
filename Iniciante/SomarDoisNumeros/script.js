function somarNumeros() {
    if (EntradaNumero1.value != '' && EntradaNumero2.value != '' ) {
    // Recuperar os valores dos campos de entrada
    var num1 = parseFloat(document.getElementById('EntradaNumero1').value);
    var num2 = parseFloat(document.getElementById('EntradaNumero2').value);
    
    // Realizar a soma
    var resultado = num1 + num2;

    // Exibir o resultado
    document.getElementById('Resultado').innerHTML = `<p> Resultado da soma entre ${num1} e ${num2} é: <strong> ${resultado} </strong> </p>`

    } else {
    document.getElementById('Resultado').innerHTML = `<p> <strong> [Error] </strong> Valor inválido </p>`
    }
}

function limparNumeros() {
    var limparNum1 = document.getElementById('EntradaNumero1')
    var limparNum2 = document.getElementById('EntradaNumero2')

    limparNum1.value = ''
    limparNum2.value = ''

    document.getElementById('Resultado').innerHTML = ''
}