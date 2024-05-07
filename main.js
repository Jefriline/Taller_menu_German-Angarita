import { menuLongitud } from "./Scripts/submenu/longitudes.js";
import { menuMatematicas } from "./Scripts/submenu/matematicas.js";
import { menuTiempo } from "./Scripts/submenu/tiempo.js";
export function mainMenu() {
    let menuOptions = prompt(
    `-----------Bienvenid@ a nuestra aplicación científica----------- 
    Digite:
    1) Para convertir unidades de longitud.
    2) Para operaciones aritméticas.
    3) Para convertir unidades de tiempo.
    0) Para Salir.`);
    if (menuOptions == "1") {
        menuLongitud();
    }else if(menuOptions == "2"){
        menuMatematicas();
    }else if(menuOptions == "3"){
        menuTiempo();
    }else if(menuOptions == "0"){
        alert("Programa terminado")
    }else{
        alert("Por favor ingrese una opcion valida")
    }
}
mainMenu();