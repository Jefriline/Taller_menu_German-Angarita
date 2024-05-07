import { mtocm } from "../unitsLength.js";
import { mainMenu } from "../../main.js";

export function calculomtocm() {
    let metros = prompt("Ingrese la Cantidad de m que desea convertir a cm: ");
    let centimetros = mtocm(parseFloat(metros));
    let resultadomtocm = prompt(`
        ${metros} m son ${centimetros} cm.
        Digite: 
        1) Para convertir nuevamente de m a cm.
        2) Para regresar al menú principal.
        
        3) Para salir.`);

    return resultadomtocm;
}


export function opcionesmtocm() {
    let continuar = calculomtocm();
    if (continuar === "1") {
        opcionesmtocm(); 
    } else if (continuar === "2") {
        mainMenu(); 
    } else if (continuar === "3") {
        alert("Programa terminado");
    }else{
        alert("Por favor ingrese una opcion valida")
    }
}
