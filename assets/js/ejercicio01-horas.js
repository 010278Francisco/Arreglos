/**Buenos dias 6-11
 * beunas tardes 9-18
 * buenas noches 19-23
 * Dejame dormir 0-5
 */


let hora = prompt("Dame tu hora");

if(hora >= 6 && hora < 11){
    console.log("Buenos dias");

}else if(hora >=9 && hora <=18 ){
    console.log("Buennas Tarde");

}else if(hora >=19 && hora<=23){
    console.log("Buenas noches");

}else{
    console.log("Deja dormir ")
}