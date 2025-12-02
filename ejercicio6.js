/*Ejercicio 2: Conversor de tiempo
Un aprendiz registró 7.200 segundos de actividad física. Necesita expresarlos en:
• Minutos.
• Horas.
• Días.
Requerimiento:
• Usa una constante para los segundos.
• Declara variables para almacenar las conversiones.*/

const segundos_registrados = 7200;

let minutos = segundos_registrados / 60;

let horas = minutos / 60;

let dias = horas / 24;

console.log("el aprendiz registro en minutos: " + minutos);
console.log("el aprendiz registro en Horas: " + horas);
console.log("el aprendiz registro en Días: " + dias);