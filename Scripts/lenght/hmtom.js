import { hmtom } from "../unitsLength.js";
import { mainMenu } from "../../main.js";

export function calculohmtom() {
    let hectometros = prompt("Ingrese la Cantidad de hm que desea convertir a m: ");
    let metros = hmtom(parseFloat(hectometros));
    let resultadohmtom = prompt(`
        ${hectometros} hm son ${metros} m.
        Digite: 
        1) Para convertir nuevamente de hm a m.
        2) Para regresar al menú principal.
        
        3) Para salir.`);

    return resultadohmtom;
}


export function opcioneshmtom() {
    let continuar = calculohmtom();
    if (continuar === "1") {
        opcioneshmtom(); 
    } else if (continuar === "2") {
        mainMenu(); 
    } else if (continuar === "3") {
        alert("Programa terminado");
    }else{
        alert("Por favor ingrese una opcion valida")
    }
}
