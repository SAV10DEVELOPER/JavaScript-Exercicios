// Função principal
function verificar() {
  // Gravar os valores de entrada
  var numeroUm     = parseInt(document.getElementById('Numero1').value)
  var numeroDois   = parseInt(document.getElementById('Numero2').value)
  var numeroTres   = parseInt(document.getElementById('Numero3').value)
  var numeroQuatro = parseInt(document.getElementById('Numero4').value)
  var numeroCinco  = parseInt(document.getElementById('Numero5').value)

  // Variáveis para salvar o maior e menor número
  var maiorNumero
  var menorNumero

  // Validar se houve alguma entrada
  if (!isNaN(numeroUm)) {
  maiorNumero = numeroUm
  menorNumero = numeroUm }     

  else if (!isNaN(numeroDois)) {
  maiorNumero = numeroDois
  menorNumero = numeroDois }

  else if (!isNaN(numeroTres)) {
  maiorNumero = numeroTres
  menorNumero = numeroTres }
  
  else if (!isNaN(numeroQuatro)) {
  maiorNumero = numeroQuatro
  menorNumero = numeroQuatro }

  else if (!isNaN(numeroCinco)) {
  maiorNumero = numeroCinco
  menorNumero = numeroCinco } 
  
  else {    
  // Tratar caso nenhum valor válido tenha sido fornecido
  document.getElementById('MsgError').innerHTML = `<p> <span class='ClassJS'>[Error]</span> digite pelo menos um número. </p>`
  return }
  
  // Validação de qual é o maior e menor
  if (numeroDois > maiorNumero) { maiorNumero = numeroDois }
  else if (numeroDois < menorNumero) { menorNumero = numeroDois }

  if (numeroTres > maiorNumero) { maiorNumero = numeroTres }
  else if (numeroTres < menorNumero) { menorNumero = numeroTres }

  if (numeroQuatro > maiorNumero) { maiorNumero = numeroQuatro }
  else if (numeroQuatro < menorNumero) { menorNumero = numeroQuatro }

  if (numeroCinco > maiorNumero) { maiorNumero = numeroCinco }
  else if (numeroCinco < menorNumero) { menorNumero = numeroCinco }
  
  // Validação de número par e ímpar
  var parImparUm
  var parImparDois

  if (maiorNumero % 2 == 0) { parImparUm = `número <span class='ClassJS'>par</span>.` }
  else { parImparUm = `número <span class='ClassJS'>ímpar</span>.` }

  if (menorNumero % 2 == 0) { parImparDois = `número <span class='ClassJS'>par</span>.` }
  else { parImparDois = `número <span class='ClassJS'>ímpar</span>.` }
  
  // Mostrar os resultados de maior e menor número + se são par ou impar
  document.getElementById('ResultadoMaior').innerHTML = `<p> O maior número foi: <span class='ClassJS'>${maiorNumero}</span>, este é um ${parImparUm}</p>`
  document.getElementById('ResultadoMenor').innerHTML = `<p> O menor número foi: <span class='ClassJS'> ${menorNumero}</span>, este é um ${parImparDois} </p>`
}

// Função Limpar
function limpar() {
  var numeroUmLimpar     = document.getElementById('Numero1')
  var numeroDoisLimpar   = document.getElementById('Numero2')
  var numeroTresLimpar   = document.getElementById('Numero3')
  var numeroQuatroLimpar = document.getElementById('Numero4')
  var numeroCincoLimpar  = document.getElementById('Numero5')

  numeroUmLimpar.value     = ''
  numeroDoisLimpar.value   = ''
  numeroTresLimpar.value   = ''
  numeroQuatroLimpar.value = ''
  numeroCincoLimpar.value  = ''

  document.getElementById('ResultadoMaior').innerHTML = ''
  document.getElementById('ResultadoMenor').innerHTML = ''
  document.getElementById('MsgError').innerHTML       = ''
}