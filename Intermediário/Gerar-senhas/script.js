// Declarando variável global
var senhaGerada = ''

function senhaRange() {
  // Salvando o valor do range para sincronizar com o número
  var senhaTamnho         = document.getElementById('TamanhoSenha')
  var senhaTamnhoRange    = document.getElementById('TamanhoSenhaRange')
  senhaTamnho.textContent = senhaTamnhoRange.value
}

function gerarSenha() {
  // Salvando os valores dos checkboxs do range
  var senhaComprimento = document.getElementById('TamanhoSenhaRange').value
  var checkMaiusculas  = document.getElementById('Maiusculas').checked
  var checkMainusculas = document.getElementById('Minusculas').checked
  var checkNumeros     = document.getElementById('Numeros').checked
  var checkEspeciais   = document.getElementById('Especiais').checked

  // Verificar se pelo menos uma opção está marcada
  if (!checkMaiusculas && !checkMainusculas && !checkNumeros && !checkEspeciais) {
    document.getElementById('MsgErro').innerHTML = `<p> <span class='classJS'>[ Error ]</span> Escolha pelo menos um tipo de caracteres para gerar a senha. </p>`
    document.getElementById('senhaResultado').innerHTML = ''
    return // Retorna para evitar a geração da senha sem opções selecionadas
  }

  var caracteresSenha = ''

  if (checkMaiusculas)  { caracteresSenha += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' }
  if (checkMainusculas) { caracteresSenha += 'abcdefghijklmnopqrstuvwxyz' }
  if (checkNumeros)     { caracteresSenha += '0123456789' }
  if (checkEspeciais)   { caracteresSenha += '!@#$%^&*()_+=-{}[]|:;"<>,.?/' }

  senhaGerada = ''

  for (var i = 0; i < senhaComprimento; i++) {
    var entradaAleatoria = Math.floor(Math.random() * caracteresSenha.length)
    senhaGerada += caracteresSenha[entradaAleatoria] }

  var senhaContainer = document.querySelector("#senhaResultado")
  senhaContainer.textContent = senhaGerada
  document.getElementById('MsgErro').innerHTML = ``
}

// Função para limpar as entradas
function limparSenha() {
  document.getElementById('MsgErro').innerHTML = ``
  document.getElementById('senhaResultado').innerHTML = ``

  document.getElementById('Maiusculas').checked = false
  document.getElementById('Minusculas').checked = false
  document.getElementById('Numeros').checked    = false
  document.getElementById('Especiais').checked  = false

  document.getElementById('TamanhoSenhaRange').value = 10
  senhaRange()

  senhaGerada = ``
}

// Função para copiar a senha gerada
function copiarSenha() {
  if (senhaGerada) {
  // Cria um elemento de input temporário
  var inputTemporario = document.createElement('input')
  inputTemporario.setAttribute('type', 'text')
  inputTemporario.setAttribute('value', senhaGerada)

  // Adiciona o elemento temporário à página
  document.body.appendChild(inputTemporario)

  // Seleciona o conteúdo do campo de texto temporário
  inputTemporario.select()
  inputTemporario.setSelectionRange(0, 99999) // Para dispositivos móveis

  // Copia o conteúdo selecionado
  document.execCommand("copy")

  // Remove o elemento temporário da página
  document.body.removeChild(inputTemporario)

    alert('Senha copiada')
  } else {
    // Exibe uma mensagem se não houver senha gerada
    document.getElementById('MsgErro').innerHTML = `<p><span class='classJS'>[ Error ]</span> Sem senha gerada.</p>`
  }
}
