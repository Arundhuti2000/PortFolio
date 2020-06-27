$(document).ready(function(){
    $('.menu-toggler').on('click', function(){
        $(this).toggleClass('open'),
        $('.top-nav').toggleClass('open');
    });
    $('.nav-link').on('click',function(){
        $(this).toggleClass('open'),
        $('.top-nav').toggleClass('open')
    });
        
    $('.visit-site').on('click',function(){
        location.replace("index.html")
    });
});