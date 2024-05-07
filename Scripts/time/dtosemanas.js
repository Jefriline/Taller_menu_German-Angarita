import { dtosemanas } from "../unitsTime.js";
import { mainMenu } from "../../main.js";

export function calculodtosemanas() {
    let dias = prompt("Ingrese la Cantidad de dias: ");
    let semanas = dtosemanas(parseFloat(dias));
    let resultadodtosemanas = prompt(`
        ${dias} dias son ${semanas} semanas.
        Digite: 
        1) Para convertir nuevamente de dias a semanas.
        2) Para regresar al menú principal.
        
        3) Para salir.`);

    return resultadodtosemanas;
}


export function opcionesdtosemanas() {
    let continuar = calculodtosemanas();
    if (continuar === "1") {
        opcionesdtosemanas(); 
    } else if (continuar === "2") {
        mainMenu(); 
    } else if (continuar === "3") {
        alert("Programa terminado");
    }else{
        alert("Por favor ingrese una opcion valida")
    }
}
