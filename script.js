function solicitarNumero() {
    let entrada;
    let numero;
  
    do {
      entrada = prompt("Introduce un número para calcular su factorial:");
      numero = Number(entrada);
  
      if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
        alert("Por favor, introduce un número entero positivo válido.");
      }
    } while (isNaN(numero) || numero < 0 || !Number.isInteger(numero));
  
    return numero;
  }
  
  function calcularFactorial(n) {
    if (n === 0 || n === 1) return 1;
  
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  }
  
  const numero = solicitarNumero();
  const resultado = calcularFactorial(numero);
  
  document.getElementById("resultado").textContent = `El factorial de ${numero} es ${resultado}.`;