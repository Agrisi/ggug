function verificarSenha(senha) {
    // Verifica se a senha tem pelo menos 8 caracteres
    if (senha.length < 8) {
      return false;
    }
  
    // Verifica se a senha contém pelo menos uma letra maiúscula, uma letra minúscula e um número
    var temLetraMaiuscula = false;
    var temLetraMinuscula = false;
    var temNumero = false;
  
    for (var i = 0; i < senha.length; i++) {
      var char = senha.charAt(i);
  
      if (char >= 'A' && char <= 'Z') {
        temLetraMaiuscula = true;
      } else if (char >= 'a' && char <= 'z') {
        temLetraMinuscula = true;
      } else if (!isNaN(char)) {
        temNumero = true;
      }
  
      // Se todos os critérios forem atendidos, retorna true
      if (temLetraMaiuscula && temLetraMinuscula && temNumero) {
        return true;
      }
    }
  
    // Se algum dos critérios não for atendido, retorna false
    return false;
  }
  