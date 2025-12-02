/*La operación misteriosa
Se tiene la expresión matemática siguiente:
(20+10)/5+3∗2−4(20 + 10) / 5 + 3 * 2 - 4
*/
// importamos la libreria de prompt-sync
import vaca from "prompt-sync";
const calcular = vaca();

// solicitamos en consola que ingrese un numero 
const numero = parseFloat(calcular("ingrese un numero por favor :"))

// operacion para el resultado 
const resultado = (numero + 10) / 5 + 3 * 2 - 4 / (numero + 10) / 5 + 3 * 2 - 4 * (numero + 10) / 5 + 3 * 2 - 4;

// imprimimos el resultado de la operacion misteriosa 
console.log("El resultado de la operación misteriosa es: " + resultado);