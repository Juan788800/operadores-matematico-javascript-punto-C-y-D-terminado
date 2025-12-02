/*El contador de visitas
Un sitio web comienza con un contador de visitas en 100. En un día recibe 25
visitas adicionales, luego pierde 10 por un error de registro, y finalmente se
duplican las visitas. Representa esta situación y determina cuál es el valor final del
contador*/

//contador de visitas
// importamos la libreria de prompt-sync
import vaca from "prompt-sync";
const calcular = vaca();

let contador_de_visitas = parseFloat(calcular("por favor ingrese el contador de visitas:"));

let visitas_adicionales = parseFloat(calcular("por favor ingrese cuantas visitas adicionales obtuvo :"));

let vistas_perdidas= parseFloat(calcular("por favor ingrese cuantas visitas perdidas obtuvo :"));

let vistas_duplicadas = (contador_de_visitas + visitas_adicionales - vistas_perdidas) * 2;

console.log("el valor final del contador de visitas es de: " + vistas_duplicadas);