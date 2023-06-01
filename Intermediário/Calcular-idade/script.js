// Armazendando a data de entrada
const dataEntrada = document.getElementById('EntradaData')

// Selecionando os elementos da saída
const saidaAnos  = document.querySelector('.Anos')
const saidaMeses = document.querySelector('.Meses')
const saidaDias  = document.querySelector('.Dias')

// Quando o botão Calcular idade for clicado, inicia a função 'calcularIdade()', código funciona sem isso também
const btnCalcular = document.getElementById('BtnCalcular')
btnCalcular.addEventListener('click', calcularIdade)

// Array com os dias de cada mês
const meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

// Função para calcular a idade
function calcularIdade() {
  var hojeDia = new Date() // Salvar a data e hora atual do sistema
  var entradaHojeDia = new Date(dataEntrada.value) // Entrada do usuário
  var resultadoAno, resultadoMes, resultadoDia

  // Verificar se com o campo de entrada tem algum valor
  if (!dataEntrada.value) {
    document.getElementById('MsgErro').innerHTML = `<p><span class='classJS'>[ Erro ]</span> Insira uma data.</p>`
    mostrador('0', '0', '0') // Chama a função para limpar
    return
  }

  // Salvar os valores da entrada no padrão de datas
  var entradaAno = entradaHojeDia.getFullYear()
  var entradaMes = entradaHojeDia.getMonth() + 1
  var entradaDia = entradaHojeDia.getDate()

  // Verificando a data atual
  var anoAtual = hojeDia.getFullYear()
  var mesAtual = hojeDia.getMonth() + 1
  var diaAtual = hojeDia.getDate()

  // Chamar a função anoBissexto  
  anoBissexto (anoAtual)

  // Validar se a entrada é uma data válida
  if (entradaHojeDia > hojeDia ||
     (entradaMes > mesAtual && entradaAno === anoAtual) ||
     (entradaDia > diaAtual && entradaMes === mesAtual && entradaAno === anoAtual)) 
  
  // Mensagem de data inválida
  { document.getElementById('MsgErro').innerHTML = `<p><span class='classJS'>[ Erro ]</span> Data inválida. Insira uma data anterior à data atual.</p>`
    mostrador('0', '0', '0')
    return }
  
  // Calcular as diferenças
  resultadoAno = anoAtual - entradaAno
  resultadoMes = mesAtual - entradaMes
  resultadoDia = diaAtual - entradaDia
  
  // Calcular os meses
  if (resultadoMes < 0) {
      resultadoAno--
      resultadoMes = 12 + resultadoMes }
  
  // Calcular os dias
  if (resultadoDia < 0) {
    if (mesAtual === 1) {
       resultadoMes--
       var ultimoDiaMesAnterior = meses[11]
       resultadoDia = ultimoDiaMesAnterior + resultadoDia }
    
    else {
      if (entradaMes === mesAtual && entradaAno < anoAtual) {
         resultadoMes--
         var ultimoDiaMesAnterior = meses[mesAtual - 2]
         resultadoDia = ultimoDiaMesAnterior + resultadoDia } 
      else {
         resultadoMes--
         var ultimoDiaMesAnterior = meses[entradaMes - 2]
         resultadoDia = ultimoDiaMesAnterior + resultadoDia } } }

  if (resultadoMes < 0) {
     resultadoAno--
     resultadoMes = 12 + resultadoMes }

  mostrador(resultadoAno, resultadoMes, resultadoDia)
  document.getElementById('MsgErro').innerHTML = ``
}

// Verificar se o ano atual é bissexto
function anoBissexto (ano) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) { meses[1] = 29 }
  else { meses[1] = 28 }
}

// Mostrar o resultado
function mostrador(anos, meses, dias) {
  saidaAnos.textContent  = anos
  saidaMeses.textContent = meses
  saidaDias.textContent  = dias
}

// Limpar os dados
function limparDados() {
  dataEntrada.value = ``
  mostrador('0', '0', '0')
  document.getElementById('MsgErro').innerHTML = ``
}
