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








    
    




    });