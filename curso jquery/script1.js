$(document).ready(function () {
    //$('body,hmtl').css('background', '#FFF');

    //estlo con json
    //var cssH1={
    //    'text-align': 'center',
    //     'color': 'red'
    //}
    //$('h1').css('text-align', 'center');
    //$('h1').css(cssH1);

    //var bgItem2 = $('#item2').css('background-color');
    //var cItem2 = $('#item2').css('color');
    //if (bgItem2 === cItem2)
    //    $('#item2').css('color','#FFF');
    $(document).on("click", function () {
        //adclass: ñade
        //$("#test").addClass("test");
        //remove: quita la clase color rojo
        //$("#test").removeClass("test");
        //si no tiene class lo añade y lo tiene lo quita color rojo.
        $("#test").toggleClass("test");
        if ($("#test").hasClass("test")) {
            $("#test").text("Soy rojo");
        }
        else {
            $("#test").text("No Soy rojo");
        }
    });
});
