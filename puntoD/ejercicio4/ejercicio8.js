/*Ejercicio 4: Estadísticas de calificaciones
Un aprendiz obtuvo las siguientes 4 notas: 4.5, 3.8, 2.9 y 4.0.
Se debe calcular:
• La suma de las 4 notas.
• El promedio.
• El resultado de la siguiente operación:
(nota1 + nota2) * (nota3 + nota4) / 2;
Requerimiento:
• Declara cada nota como constante.
• Usa variables para la suma, el promedio y el resultado de la expresión.*/

// importamos la libreria de prompt-sync
import vaca from "prompt-sync";
const ingresar = vaca();

// creamos las constantes para que ingresen las 4 notas
const nota1 = parseFloat(ingresar("ingrese su primera nota por favor: "))
const nota2 = parseFloat(ingresar("ingrese su segunda nota por favor: "))
const nota3 = parseFloat(ingresar("ingrese su tercera nota por favor: "))
const nota4 = parseFloat(ingresar("ingrese su cuarta nota por favor: "))

// creamos las variable para la suma de las notas el promedio y el resultado de la operacion
let suma_de_las_notas = nota1 + nota2 + nota3 + nota4;

let promedio_de_las_notas = (nota1 + nota2 + nota3 + nota4) / 4 ;

let resultado_de_la_operacion = (nota1 + nota2) * (nota3 + nota4) /2;

// imprimimos los resultados 
console.log("la suma de las 4 notas es :" + suma_de_las_notas);

console.log("el promedio de ls 4 nota es  :" + promedio_de_las_notas);

console.log("el resultado de la operacion es :" + resultado_de_la_operacion);
