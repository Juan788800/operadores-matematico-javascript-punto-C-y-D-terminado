/*El terreno rectangular
Un agricultor tiene un terreno rectangular y conoce su base y su altura en metros.
Quiere calcular tanto el área como el perímetro del terreno para cercarlo y sembrar.
Diseña un programa en el que él pueda obtener ambos valores.
*/
import vaca from "prompt-sync";
const pollito = vaca();



let base = parseFloat(pollito ("ingrese el valor de la base :"));
let altura = parseFloat(pollito ("ingrese el valor de la altura :"));

const area = base * altura;
const perimetro = (base + altura ) * 2;

console.log("el area del terreno rectangular es de :" + area + "m²");
console.log("el perimetro del terreno rectangular es de :" + perimetro + "m");
