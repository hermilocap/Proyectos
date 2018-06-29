/*var nombre = "Hermilo Santiago Benito";
var edad = 18;
if (edad >= 18)
    alert("Eres mayor de 18 años");
else if (edad < 18)
    alert("Eres menor de edad");
else
    alert("Tienes 18 años");
    */
/*var aux = true;
var asignada = aux ? 'hola' : 'Adios';//si es verdadeero que ejcute lo que esta despues del signo de interrogaccion.

alert(asignada);
*/

//var a = "Hola";
//switch(a)
//{
//    case "hola":
//        alert("a=0");
//        break;
//    case "Hola":
//        alert("a=1");
//        break;
//    default:
//        alert("a=?");
//        break;
//}

//function factorial(num) {
//    var fact = 1;
//    for (num;num>0;num--)
//        fact = fact * num;
//    return fact;
//}

    //var resultado = factorial(3);

    //alert(resultado);
    //alert(factorial(3));



    //var factorial=function(num)
    //{
    // var fact = 1;
    // for (num; num > 0; num--)
    //     fact = fact * num;
    // alert(fact);

    //}

    //factorial(3)

//for (var i = 0; i < 10; i++)
//    alert(i);
//    alert("entre");

    //var x=0;
    //while (x < 10)
    //{
    //    alert(x);
    //    x++;
    //}
//var x = 0;
//do {
//    alert(x);
//    x++;
//}
//while (x < 10)

//var arreglo = [1,2,3,4];
//for (i in arreglo)
//{
//    alert(arreglo[i]);
//}

//var arreglo = Array();
//arreglo.push(3);
//arreglo.push('Hola Mundo');
//arreglo[0] = "Hermilo";
//console.log(arreglo[0]);

//var arreglo = [1, 2, 3, "Hermilo"];
//for (i = 0; i < arreglo.length;i++)
//{

//    console.log(arreglo[i]);

//}

//bidimensional

//var arreglo = [[1, 2, 3], ['a', 'b', 'c']];

//var cadena = arreglo[1].join('');
//console.log(cadena);

//for (i = 0; i < arreglo[1].length;i++)
//{
//    console.log(arreglo[1][i]);
//}

//var cadena = "Hermilo-Santiago"
//var arreglo = cadena.split('-');
//console.log(arreglo[1]);

//Un objeto es una clase
//var Gato = new gato("Amarrillo");
//var Gatodos = new gato("Blanco");

//function gato(nombre)
//{
//    this.nombre = nombre;
//    this.maulla = function () {
//        alert(this.nombre+" Miauu");
//    }

//}
//alert("El gato se llama: " + Gato.nombre);
//alert("El gato se llama: " + Gatodos.nombre);
//Gato.maulla();

//$(document).ready(function (){

//)}
//$(document).on('ready',function(){

//)}

//$(function (){

//)}

//var selccion;
$(document).ready(function(){

    //$("#parrafouno, #parrafodos, span").text("Hey somos iguales");

    // $("div.miDiv article p").text("Hola selectores avanzados");

    
       // 'background-color':'#000',
    //});

    //$("#prueba").text("<p>Hola Milo estas jquery</p>");
    //$(".prueba").html("<strong>Hola Milo estas jquery</strong>");

    //var selccion = $('.ejem1');
    //if (selccion.length)
    //    console.log('Existen: ' + selccion.length);
    //else
    //    console.log('No existe: ' + selccion.length);


    //selccion.not('.cl1').text('Este elemento tiene la clase cl1');
    //selccion.has('p').text('este texto tiene paragrap <p> su con');

    //un ul es como si fuera un arreglo
    //$('li').first().html('<strong>Soy el elemento1</strong>');

    //$('li').eq(2).text('Soy el elemento numero tres');

    //getter: obtener setter: colocar asignar
    //var almacen = $("#prueba").html();

    // este metodo para obtener el id
    var clase = $("#prueba").attr("id");
    alert(clase);

    // este metodo asigna un valor
    $("#prueba").attr("class", "ejemplo");


    //alert(almacen);
});

