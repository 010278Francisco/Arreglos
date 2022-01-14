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
 
 let cuponDescuento = prompt("Dame tipo de cupon de los ejemplos:");
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