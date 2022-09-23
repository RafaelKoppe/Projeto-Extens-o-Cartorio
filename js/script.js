$(document).ready(function(){
    $('.conciliacao').click(function(){
        $(this).next('.submenu').slideToggle();
        $(this).find('.conciliacao').toggleClass();
    })
});
