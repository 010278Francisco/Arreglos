let miVariable = 10;
console.log(miVariable);

/**Estrcturas de control de flujo */


let edad = 17;
let tienesINE = false;

if(edad >= 18 && tienesINE == true){
    console.log("Puedes entrar")

}else{
    console.log("No se puede entrar");
}


/*Operador ternario*/
/*
let edadUno = 17;

(edadUno >=18) 
    ? console.log("Mayor de edad")
    : console.log("Menor de edad....");*/
    let edadUno = 19;
    let pregunta = (edadUno>=18)
        ? "Mayor de edad"
        : "Menor de edad";

        console.log(pregunta);

        let preguntaEdad = `Tengo ${edadUno} años y soy ${(edadUno>=18) ? "Mayor" : "Menor de edad"} de edad`;
        console.log(preguntaEdad);



/*

if(dia === 0){
    console.log("Domingo");

    
}else if (dia ===1){
    console.log("Lunes");
}else if (dia ===2){
    console.log("Martes");
}else if (dia === 3){
    console.log("Miercoles");
}else if(dia === 4){
    console.log("Jueves");
}else if(dia === 5){
    console.log("viernes");

}else if (dia === 6){
    console.log("martes");
}else{
    console.log("No hay dia");
}
*/


/**Switc - case */

/*EStructura*/
/*
switch(variable a evaluar)
    case valor:
        codigo a ejecutar
    break;
    case valor:
        codigo a ejecutar
    break:
    default

*/
let dia = 5;

switch(dia){
    case 0:
        console.log("Dia Domingo");
        break;
    case 1:
        console.log("Dia Lunes");
        break;
    case 2:
        console.log("Dia Martes");
        break;
    case 3:
        console.log("Dia Miercoles");
        break;
    case 4:
        console.log("Dia Jueves");
        break;
    case 5:
        console.log("Dia Viernes");
        break;
    case 6:
        console.log("Dia Sabado");
        break;
    default:
        console.log("No es un dia valido");
        break;
}


/**Escribir un programa que detecte el cupón que tiene el usuario

Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%

-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con 
el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" 
en caso de que sea un 
 cupón equivocado
 */

let cuponDescuento;
let descuento;

switch(cuponDescuento){
    case "Bronce":
        descuento = 5;
        break;
    case "Plata":
        descuento = 10;
        break;
    case "oro":
        descuento = 15;
        break;
    default:
        console.log("Cupon erroneo");
        break;
}