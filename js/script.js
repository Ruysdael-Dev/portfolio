$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});
document.addEventListener("DOMContentLoaded", function () {
    const box = document.getElementById("certificadoBox");
    const overlay = document.getElementById("certificadoOverlay");

    if (box && overlay) {
        box.addEventListener("click", function () {
            overlay.style.display = "flex";
        });

        overlay.addEventListener("click", function () {
            overlay.style.display = "none";
        });
    }
});