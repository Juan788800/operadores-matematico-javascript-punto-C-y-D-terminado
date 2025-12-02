/*Ejercico 1: Calculadora de gastos de viaje
Un grupo de amigos realiza un viaje con los siguientes costos fijos:
• Transporte: $120.000
• Alojamiento: $200.000
• Alimentación: $150.000
El total debe dividirse en partes iguales entre 4 personas. Además, cada persona
entregará $130.000 y se debe calcular el sobrante.
Requerimiento:
• Usa constantes para los costos y la cantidad de personas.
• Usa variables para el total, el aporte individual y el sobrante.
*/
// importamos la libreria de prompt-sync
import vaca from "prompt-sync";
const ingresar = vaca();
//creamos constantes para los costos
const transporte = parseFloat(ingresar("ingrese cuanto gasto en transporte :"));
const alojamiento = parseFloat(ingresar("ingrese cuanto gasto en alojamiento :"));
const alimentacion =  parseFloat(ingresar("ingrese cuanto gasto en alimentacion :"));
const cantidad_de_personas =  parseFloat(ingresar("ingrese con cuantas personas viajo :"));

//creamos variables para el total, el aporte individual y el sobrante 
let total_por_persona = (transporte + alojamiento + alimentacion) / cantidad_de_personas;

let aporte_individual = 130000;

let sobrante = total_por_persona - aporte_individual;

//imprimos el total a pagar por persona y el sobrante por persona 
console.log("El total a pagar por persona es: $" + total_por_persona);
console.log("El sobrante por persona es: $" + sobrante);