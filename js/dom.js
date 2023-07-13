/**
 * Agrega valores al campo de entrada de la Calculadora
 * @param {string} value valor que se imprime en el campo de entrada
 */
function appendToResult(value) {
  document.getElementById('result').value += value;
}

/**
 * Limpia el campo de entrada
 */
function clearResult() {
  document.getElementById('result').value = '';
}

/**
 * Evalua la expresión ingresada utilizando la libreria "mathjs", si es correcta la resuelve e imprime el valor * por el campo de entrada, de lo contrario devuelve un error por el campo de entrada y por pantalla
 */
function calculateResult() {
  const expression = document.getElementById('result').value;
  
  try {
    const result = math.evaluate(expression);
    document.getElementById('result').value = result;
  } catch (error) {
    document.getElementById('result').value = 'Syntax error';
    mensajePantalla('Por favor no juegue con el sistema');
  }
}

/**
 * Función para manejar el evento de teclado
 * @param {KeyboardEvent} event Objeto del evento teclado
 */
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    calculateResult();
  }
}

// Agrega el evento de teclado al campo de entrada de la calculadora
document.getElementById('result').addEventListener('keydown', handleKeyPress);