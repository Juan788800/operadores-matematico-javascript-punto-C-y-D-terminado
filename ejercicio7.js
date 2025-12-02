/*Ejercicio 3: Producción de una fábrica
Una máquina produce 250 piezas por hora.
En 8 horas de trabajo se necesita calcular:
• El total de piezas fabricadas.
• Cuántas cajas de 12 piezas se llenan.*/


const piezas_por_hora = 250;

const horas_de_trabajo = 8;

let total_piezas = piezas_por_hora * horas_de_trabajo;

let cajas_llenas = total_piezas / 12;

let piezas_sueltas = total_piezas % 12;

console.log("El total de piezas fabricadas en " + horas_de_trabajo + " horas es: " + total_piezas);
console.log("El numero de cajas llenas de 12 piezas fueron: " + cajas_llenas);
console.log("El numero de piezas sueltas fueron: " + piezas_sueltas);