import { dmtom } from "../unitsLength.js";
import { mainMenu } from "../../main.js";

function calculodmtom() {
    let decimetros = prompt("Ingrese la Cantidad de dm que desea convertir a m: ");
    let metros = dmtom(parseFloat(decimetros));
    let resultadodmtom = prompt(`
        ${decimetros} dm son ${metros} m.
        Digite: 
        1) Para convertir nuevamente de dm a m.
        2) Para regresar al menú principal.
        
        3) Para salir.`);

    return resultadodmtom;
}


export function opcionesdmtom() {
    let continuar = calculodmtom();
    if (continuar === "1") {
        opcionesdmtom(); 
    } else if (continuar === "2") {
        mainMenu(); 
    } else if (continuar === "3") {
        alert("Programa terminado");
    }else{
        alert("Por favor ingrese una opcion valida")
    }
}
