$(document).ready(function(){ 
    
    $(".part").animated("fadeInDown", "pulse");

    $("#btn-toogle").click(function() {
        $(".hero").toggleClass("hero_open");
    });
    
});