function somarNumeros() {
    // Recuperar os valores dos campos de entrada
    var num1 = parseFloat(document.getElementById('EntradaNumero1').value);
    var num2 = parseFloat(document.getElementById('EntradaNumero2').value);
    
    // Realizar a soma
    var resultado = num1 + num2;
    
    // Exibir o resultado
    document.getElementById('Resultado').innerHTML = 'Resultado: ' + resultado;
}