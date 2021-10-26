$(function () {
    let isShow = true;

    $("#nav-toggle").on("click", function(event) {
        event.preventDefault();
    
        $("#nav").toggleClass("show");
        isShow = true;
    });    

    $(window).on("scroll", function(){
        if($("#nav").css("display") === "flex" && isShow){
            isShow = false;
            $("#nav").toggleClass("show");
        }
    });
});


