$(document).ready(function () {
    $(".p1").hover(function () {
        $(this).css("font-family", "Times New Roman");
    }, function () {
        $(this).css("font-family", "Georgia");
    });


    $("button").click(function () {
        $(".pets").hide();
    });
    $("#rainbows").dblclick(function(){
        alert("You double-clicked me!");
    });
    $("input").focus(function(){
        $(this).css("background-color", "lightblue");
     });
     $("input").keyup(function(){
        $(this).css("color", "red");
    });
});