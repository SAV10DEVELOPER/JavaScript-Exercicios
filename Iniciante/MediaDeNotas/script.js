// Calcular a média das notas
function media() {
    // Salvar o nome do aluno
    var aluno = document.getElementById('NomeAluno').value

    // Pegar os valores de entrada e armanzenar nas variáveis
    var nota1 = parseFloat(document.getElementById('Nota1').value)
    var nota2 = parseFloat(document.getElementById('Nota2').value)
    var nota3 = parseFloat(document.getElementById('Nota3').value)
    var nota4 = parseFloat(document.getElementById('Nota4').value)
    
    // Calcular a média das notas
    var mediaNota = (nota1 + nota2 + nota3 + nota4) / 4
    var mediaNotaFinal = mediaNota.toFixed(2)
    
    // Mostrar o resultado das médias
    document.getElementById('Resultado').innerHTML = `<p> A média entre as notas: <strong> [ ${nota1}, ${nota2}, ${nota3} e ${nota4} ]</strong>, do aluno (a) ${aluno}, foi de <strong> ${mediaNotaFinal} pts </strong> </p>`
    
    // Mensagem de error caso alguma entrada fique vazia
    if (Nota1.value == '' || Nota2.value == '' || Nota3.value == '' || Nota4.value == '' || NomeAluno.value == '') {
    document.getElementById('Resultado').innerHTML = `<p> <strong> [ Error ] </strong> Valores inválidos, tente novamente. </P> `
    }

    // Condição para ser aprovado
    else if (mediaNotaFinal >= 6) {
    document.getElementById('ResultadoVericacao').innerHTML = `<p> <strong> [ Aprovado ] </strong> Nota >= 6.0 pts </p>` }
    
    // Condição para ficar de recuperção
    else if (mediaNotaFinal >= 5) {
    document.getElementById('ResultadoVericacao').innerHTML = `<p> <strong> [ Recuperação ] </strong> Notas entre 5,0 pts ~ 6,0 pts </p>` }   
    
    // Se nenhuma das duas condições de notas acima não forem, o aluno ficou reprovado
    else {
    document.getElementById('ResultadoVericacao').innerHTML = `<p> <strong> [ Reprovado ] </strong> Nota < 5.0 pts </p>` } 
}

// Função para limpar as entradas
function limpar() {
    var limparNome = document.getElementById('NomeAluno')
    var limparNota1 = document.getElementById('Nota1')
    var limparNota2 = document.getElementById('Nota2')
    var limparNota3 = document.getElementById('Nota3')
    var limparNota4 = document.getElementById('Nota4')

    limparNome.value = ''    
    limparNota1.value = ''
    limparNota2.value = ''
    limparNota3.value = ''
    limparNota4.value = ''

    document.getElementById('Resultado').innerHTML = ''
    document.getElementById('ResultadoVericacao').innerHTML = ''
}