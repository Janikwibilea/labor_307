$(document).ready(function(){

$(".bilderunten1").on("click" ,function(){
$("#bilddiashowgross").attr("src", "img/2000px-PHP-logo.svg.png");
});
$(".bilderunten2").on("click" ,function(){
    $("#bilddiashowgross").attr("src", "img/xammp.jpg");
    });
    $(".bilderunten3").on("click" ,function(){
        $("#bilddiashowgross").attr("src", "img/Visual_Studio_2013_Logo.svg.png");
        });


        $("#btn1").on("click",function(){
           
            $("#text1").toggle();
           
        }
        )
        $("#btn2").on("click",function(){
            $("#text2").toggle();
        })

        $("#btn3").on("click",function(){
            $("#text3").toggle();
        })

        $("#btn4").on("click",function(){
            $("#text4").toggle();
        })


        







        var slide_width = parseInt($( ".slide img" ).css("max-width")),
        margin = 0,
        slideshow_width = 0,
        animation = false,
        autoslide;
    $( ".slide" ).each( function() {
        slideshow_width += slide_width;
    });
    slideshow_width -= slide_width;
    autoslide = setInterval(function(){ slide("right"); }, 3000);
    $( ".slide-control .left" ).click(function(element) {
        slide("left");
    });
    $( ".slide-control .right" ).click(function(element) {
        slide("right");
    });
    function slide( direction ) {
        if (animation) return;
        clearInterval(autoslide);
        if (direction == "left") {
            margin += slide_width;
            if (margin > 0) {
                margin = 0 - slideshow_width;
            }
        } else if (direction == "right") {
            margin -= slide_width;
            if (Math.abs(margin) > slideshow_width) {
                margin = 0;
            }
        }
        animation = true;
        $( ".sildeshow-inner" ).animate( { "margin-left": margin + "px" }, 500, function() { animation = false; });
        autoslide = setInterval(function(){ slide("right"); }, 3000);
    }









    });