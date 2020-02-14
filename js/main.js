

// $(document).ready(function() {
//     $('body').css('padding-bottom', $('footer').height() + 32);
// });

// $(window).resize(function(){
//     $('body').css('padding-bottom', $('footer').height() + 32);
// });

// $(document).on("click","",function() {
 
// }); 


$('.slider').owlCarousel({
    loop:false,
    nav:true,
    dota:false,
    margin:12,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});






$(document).on("click",".top-wrap .login",function() {
    $('.form-box-wrap.login_pop').addClass('open');
    $('.form-box-wrap.sign_pop').removeClass('open');
	$('.top-wrap div').removeClass('active');
    $(this).addClass('active');
    
});

$(document).on("click",".signup",function() {
    $('.form-box-wrap.login_pop').removeClass('open');
    $('.form-box-wrap.sign_pop').addClass('open');
    $('.top-wrap div').removeClass('active');
    $(this).addClass('active');
});




$(document).on("click",".menu .login-wrap .login",function() {
    $('.login_popup').fadeIn();
    $('.form-box-wrap.login_pop').addClass('open');
    $('.top-wrap .login').addClass('active');
    $('body').addClass('hidden-b')
});

$(document).on("click",".menu .login-wrap .signup",function() {
    $('.login_popup').fadeIn();
    $('.form-box-wrap.sign_pop').addClass('open');
    $('.top-wrap .signup').addClass('active');
    $('body').addClass('hidden-b')
}); 

$(document).on("click",".close-popup",function() {
    $('.popup').fadeOut();
    $('.form-box-wrap.login_pop ,.form-box-wrap.sign_pop').removeClass('open');
    $('.top-wrap div').removeClass('active');
    $('body').removeClass('hidden-b');
}); 