function senhaRange() {
  var senhaTamnho         = document.getElementById("TamanhoSenha");
  var senhaTamnhoRange    = document.getElementById("TamanhoSenhaRange");
  senhaTamnho.textContent = senhaTamnhoRange.value;
}

function gerarSenha() {
  var senhaComprimento = document.getElementById("TamanhoSenhaRange").value;
  var checkMaiusculas = document.getElementById("Maiusculas").checked;
  var checkMainusculas = document.getElementById("Minusculas").checked;
  var checkNumeros = document.getElementById("Numeros").checked;
  var checkEspeciais = document.getElementById("Especiais").checked;

  // Verificar se pelo menos uma opção está marcada
  if (!checkMaiusculas && !checkMainusculas && !checkNumeros && !checkEspeciais) {
    document.getElementById('MsgErro').innerHTML = `<p> [Erro] Escolha pelo menos um tipo de caracteres para gerar a senha.</p>`;
    return; // Retorna para evitar a geração da senha sem opções selecionadas
  }

  var caracteresSenha = "";

  if (checkMaiusculas) { caracteresSenha += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; }
  if (checkMainusculas) { caracteresSenha += "abcdefghijklmnopqrstuvwxyz"; }
  if (checkNumeros) { caracteresSenha += "0123456789"; }
  if (checkEspeciais) { caracteresSenha += "!@#$%^&*()_+=-{}[]|\:;'<>,.?/"; }

  var senhaGerada = "";

  for (var i = 0; i < senhaComprimento; i++) {
    var randomIndex = Math.floor(Math.random() * caracteresSenha.length);
    senhaGerada += caracteresSenha[randomIndex];
  }

  var passwordContainer = document.querySelector(".senhaResultado");
  passwordContainer.textContent = senhaGerada;
}

function copiarSenha() {

}