/*Ejercicio 2: Conversor de tiempo
Un aprendiz registró 7.200 segundos de actividad física. Necesita expresarlos en:
• Minutos.
• Horas.
• Días.
Requerimiento:
• Usa una constante para los segundos.
• Declara variables para almacenar las conversiones.*/

// importamos la libreria de prompt-sync
import vaca from "prompt-sync";
const ingresar = vaca();
// creamos una constante para los segundos_registrados 
const segundos_registrados = parseFloat(ingresar("ingrese cuantos segundos registro en su actividad fisica :"));

// creamos variable para los minutos, horas y dias 
let minutos = segundos_registrados / 60;

let horas = minutos / 60;

let dias = horas / 24;
//imprimimos el registro de la actividad fifisca del aprendiz en minutos,horas y segundos 
console.log("el aprendiz registro en minutos: " + minutos);
console.log("el aprendiz registro en Horas: " + horas);
console.log("el aprendiz registro en Días: " + dias);