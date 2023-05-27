function verificar () {
  var numeroUm   = parseInt(document.getElementById('Numero1').value)
  var numeroDois = parseInt(document.getElementById('Numero2').value)
  var numeroTres = parseInt(document.getElementById('Numero3').value)
}

function limpar() {
  var numeroUmLimpar   = document.getElementById('Numero1')
  var numeroDoisLimpar = document.getElementById('Numero2')
  var numeroTresLimpar = document.getElementById('Numero3')

  numeroUmLimpar.value = ''
  numeroDoisLimpar.value = ''
  numeroTresLimpar.value = ''
}