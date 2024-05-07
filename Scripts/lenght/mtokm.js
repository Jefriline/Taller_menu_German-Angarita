import { mtokm } from "../unitsLength.js";
import { mainMenu } from "../../main.js";
export function calculomtokm() {
    let metros = prompt("Ingrese la Cantidad de m que desea convertir a Km: ");
    let kilometros = mtokm(parseFloat(metros));
    let resultadomtkm = prompt(`
        ${metros} m son ${kilometros} Km.
        Digite: 
        1) Para convertir nuevamente de m a Km.
        2) Para regresar al menú principal.

        3) Para salir.`);

    return resultadomtkm;
}


export function opcionesmtokm() {
    let continuar = calculomtokm();
    if (continuar === "1") {
        opcionesmtokm(); 
    } else if (continuar === "2") {
        mainMenu(); 
    } else if (continuar === "3") {
        alert("Programa terminado");
    }else{
        alert("Por favor ingrese una opcion valida")
    }
}
