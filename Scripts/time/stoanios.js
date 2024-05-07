import { stoanios } from "../unitsTime.js";
import { mainMenu } from "../../main.js";

export function calculostoanios() {
    let semanas = prompt("Ingrese la Cantidad de semanas: ");
    let anios = stoanios(parseFloat(semanas));
    let resultadostoanios = prompt(`
        ${semanas} semana son ${anios} años.
        Digite: 
        1) Para convertir nuevamente de semanas a años.
        2) Para regresar al menú principal.
        
        3) Para salir.`);

    return resultadostoanios;
}


export function opcionesstoanios() {
    let continuar = calculostoanios();
    if (continuar === "1") {
        opcionesstoanios(); 
    } else if (continuar === "2") {
        mainMenu(); 
    } else if (continuar === "3") {
        alert("Programa terminado");
    }else{
        alert("Por favor ingrese una opcion valida")
    }
}
