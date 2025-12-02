/*2.	Las tres notas del estudiante
Un aprendiz obtuvo tres notas en sus evaluaciones. Necesita calcular el promedio
para saber cómo le fue en la asignatura. Crea un programa que, a partir de tres
valores numéricos, muestre el promedio en pantalla.
*/
// importamos la libreria de prompt-sync
import vaca from "prompt-sync";
const calcular = vaca();

// creamos el constructor 
let nota1 = calcular();
let nota2 = calcular();
let nota3 = calcular();

//solicitamos en la consola las 3 notas del aprendiz
let primera_nota = parseFloat(calcular("ingrese la primera nota :"));
let segunda_nota = parseFloat(calcular("ingrese la segunda nota :"));
let tercera_nota = parseFloat(calcular("ingrese la tercera nota :"));
const promedio = (primera_nota + segunda_nota + tercera_nota) /3;

// imprimimos el promedio del aprendiz
console.log("el promedio del aprendiz es de: " + promedio)

// npm init -y

// npm i prompt-sync