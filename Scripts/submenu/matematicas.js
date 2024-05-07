import { mainMenu } from "../../main.js";
import { opcionessuma } from "../math/suma.js";
import { opcionesresta } from "../math/resta.js";
import { opcionesmultiplicar } from "../math/multiplicacion.js";
import { opcionesdividir } from "../math/division.js";
export function menuMatematicas() {
    let menuOption2 = prompt(`
    -----------Operaciones Aritméticas-----------
    Digite:
    1) Para Suma.
    2) Para Resta.
    3) Para Multiplicación.
    4) Para División.
    
    0) Para regresar al menu principal.`
    );
    if (menuOption2 == "1") {
        opcionessuma();
    }else if (menuOption2 == "2") {
        opcionesresta();
    }else if (menuOption2 == "3") {
        opcionesmultiplicar();
    }else if (menuOption2 == "4") {
        opcionesdividir();
    }else if (menuOption2 == "0"){
        mainMenu();
    }else{
        alert("Por favor ingrese una opcion valida")
    }
}