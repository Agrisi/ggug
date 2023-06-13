function verificarNumeroPrimo(numero) {
    // Verifica se o número é menor ou igual a 1
    if (numero <= 1) {
      return false;
    }
  
    // Verifica se o número é divisível por algum número além de 1 e ele mesmo
    for (var i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    // Se o número passar por todas as verificações, é primo
    return true;
  }