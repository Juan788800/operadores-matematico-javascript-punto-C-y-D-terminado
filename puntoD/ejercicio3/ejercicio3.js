/*Ejercicio 3: Producción de una fábrica
Una máquina produce 250 piezas por hora.
En 8 horas de trabajo se necesita calcular:
• El total de piezas fabricadas.
• Cuántas cajas de 12 piezas se llenan.*/

// importamos la libreria de prompt-sync
import vaca from "prompt-sync";
const ingresar = vaca();

// creamos las constantes para saber cuantas piezas produce y las horas trabajadas
const piezas_por_hora = parseFloat(ingresar("ingrese cuantas piezas produce la fabrica por hora : "))

const horas_de_trabajo = parseFloat(ingresar("ingrese cuantas  horas trabajo en la fabrica : "))

// creamos las variable del total de piezas, cajas llenas y peizas sueltas

let total_piezas = piezas_por_hora * horas_de_trabajo;

let cajas_llenas = total_piezas / 12;

let piezas_sueltas = total_piezas % 12;

// imprimimos los resultados
console.log("El total de piezas fabricadas en " + horas_de_trabajo + " horas es: " + total_piezas);
console.log("El numero de cajas llenas de 12 piezas fueron: " + cajas_llenas);
console.log("El numero de piezas sueltas fueron: " + piezas_sueltas);