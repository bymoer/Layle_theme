$(document).ready(function(){
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop => 150){
            $(".navbar-box, .navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav .open .dropdown-menu, .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-default .navbar-toggle:focus").css("background-color", "rgba(50,88,110,1)");
        }
        if(scrollTop <= 150){
            $(".navbar-box, .navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav .open .dropdown-menu, .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-default .navbar-toggle:focus").css("background-color", "rgba(50,88,110,0.2)");
        }
    })
    var scrollTop = $(window).scrollTop();
    console.log(scrollTop);
})
