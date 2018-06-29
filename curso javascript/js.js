//var x = "1";
//var y = "2";
//var suma = x + y;

//aqui convierto texto cadena a numero;
//var n =Number(x);
//var p = Number(y);

//var redondeo = 10.5;

//console.log(n + p);
//math.round: redondea numeros
//console.log(Math.round(redondeo));

//window.alert(n+p);

//obtener valor minimo y maximo

//var x = 10, y = 20, z = 1;
//var m = Math.max(x, y, z);
//console.log(m);
//window.alert(m);


//var cadena = "Hola a todos menos a ti";
//slice es para corte
//console.log(cadena.slice(4,10));
//console.log(cadena.slice(4));

//Fecha
var fecha = new Date();//fecha hora
//var fecha = new Date(2017, 5, 15);
//var fecha = new Date(2017, 5, 15, 2, 20, 27);

/*console.log(fecha.getMonth());
console.log(fecha.getYear());
console.log(fecha.getDate());
console.log(fecha.getFullYear());
console.log(fecha.getTime());
*/



var x = 10;

/*if (x != 1) {
    console.log("Se cumple la condicion");
} else {
    console.log("No se cumple la condicion");
}*/
//javacript no distigue si los numeros son distitos
//triple igual === valida si son uguales y del mismo tipo.

var y=10;

/*if (x == 1) {
    console.log("Se cumple condicion");
    if (y == 10) {
        console.log("Se cumple la condicion");
    }
    else {
        console.log("No de cumple la condicion");
    }
} else {
    console.log("No se cumple la condicion");
}*/

//var n = 20;

/*while (n < 20) {
    console.log("numero:");
    console.log(n);
    n = n + 1;
    //n++;
}*/

/*do{
    console.log("Numero:");
    console.log(n);
    n++;
}while(n<20)
*/

/*for (var n = 0; n <=20; n++) {
    console.log(n);

}*/

/*function nombre() {
    console.log("funcion mostrar nombre: Milo");
}
//llamando funcion
nombre();
*/

/*
function mostrarnombre(x) {
    console.log(x+1);
}

mostrarnombre(1);
*/

//permite ignorar parametros
/*function saludo(x) {
    console.log(x);
}
saludo(10, 1, 2, 9, "Hola");
*/

/*function saludo(x,y,z) {
    console.log(x);
    console.log(y);
    console.log(z);
}

saludo(10);
*/

/*function saludo() {
    var c = 1;
    console.log(c);
    }

saludo();
console.log(c);
*/

//jacript permite combinar varios tipos de datos;
/*var arreglo = [];

arreglo[0] = 1;
arreglo[1] = 10;
arreglo[2] = 20;
arreglo[3] = "Milo";
*/
//accediendo al elemento
//console.log(arreglo[3]);

//for (x = 1; x < arreglo; x++) {

//}

//var arreglo = [1, 10, 20, "Milo"];

//console.log(arreglo[0]);

//objetos

//var persona = { nombre: "Milo", Edad: 18, mexicano: true };

//persona.Edad
//persona["Edad"]


/*
for (x = 0; x < arreglo.length; x++) {
    console.log(x);
}
*/

//DOM: modelo de objetos de docuento

//var t = document.getElementById("x").innerHTML;
//console.log(t);

//var elemento = document.getElementById("x");

//setAtribute(propiedad,valor)
//elemento.setAttribute("align", "right");
//elemento.getAttribute(propiedad);

var elemento = document.createElement("li");

elemento.innerHTML = "Elemento desde javascript";
document.getElementById("x").appendChild(elemento);

