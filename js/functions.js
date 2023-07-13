/**
 * @param {string} valor Dato a revisar y validar
 * @param {string} expresionRegular Expresión regular para validar
 * @returns {true} Retorn True si encontro un Match o un False si no encontro
 */
function validarString(valor, expresionRegular) {
  if (expresionRegular.test(valor)) return true;

  return false;
}

/**
 * Recibe un mensaje para ser mostrado por pantalla
 * @param {string} mensaje 
 */
function mensajePantalla(mensaje) {
  alert(mensaje);
}