const dataEntrada  = document.getElementById('EntradaData')

const saidaAnos    = document.querySelector('.Anos')
const saidaMeses   = document.querySelector('.Meses')
const saidaDias    = document.querySelector('.Dias')

const btnCalcular  = document.getElementById('BtnCalcular')

btnCalcular.addEventListener('click',calcularIdade)

const meses = [31,28,31,30,31,30,31,31,30,31,30,31]

function calcularIdade() {
  var hoje = new Date()
  var entradaHoje = new Date(dataEntrada.value)
  var resultadoAno, resultadoMes, resultadoDia

  var entradaAno = entradaHoje.getFullYear()
  var entradaMes = entradaHoje.getMonth()+1
  var entradaDia = entradaHoje.getDay()

  var anoAtual = today.getFullYear()
  var mesAtual = today.getMonth()+1
  var diaAtual = today.getDay()
  
  leapYearCheck(anoAtual)

  if ((entradaAno > anoAtual) ||
      (entradaMes > mesAtual && entradaAno == anoAtual) || 
      (entradaDia > diaAtual && entradaMes == mesAtual && entradaAno == anoAtual))
  
  { document.getElementById('MsgErro').innerHTML = `<p>[ Erro ] Data inválida </p>`
  displayResult('0','0','0')
  return }



}