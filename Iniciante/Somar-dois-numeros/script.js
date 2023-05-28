function somarNumeros() {
    if (EntradaNumero1.value != '' && EntradaNumero2.value != '' ) {
    // Pegar os valores de entrada e armanzenar nas variáveis
    var num1 = parseFloat(document.getElementById('EntradaNumero1').value)
    var num2 = parseFloat(document.getElementById('EntradaNumero2').value)
    
    // Realizar a soma
    var resultado = num1 + num2;

    // Exibir o resultado
    document.getElementById('Resultado').innerHTML = `<p> Resultado da soma entre <span class='ClassJS'>${num1}</span> e <span class='ClassJS'>${num2}</span> é: <span class='ClassJS'> ${resultado} <span> </p>`
    
    // Mensagem de erro
    } else {
    document.getElementById('Resultado').innerHTML = `<p> <span class='ClassJS'> [Error] </span> Valor inválido </p>`
    }
}

// Função para limpar as entradas
function limparNumeros() {
    var limparNum1 = document.getElementById('EntradaNumero1')
    var limparNum2 = document.getElementById('EntradaNumero2')

    limparNum1.value = ''
    limparNum2.value = ''

    document.getElementById('Resultado').innerHTML = ''
}