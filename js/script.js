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
    const boxes = document.querySelectorAll(".box");
    const overlay = document.getElementById("certificadoOverlay");
    const img = document.getElementById("certificadoImagem");

    boxes.forEach(box => {
        box.addEventListener("click", () => {
            const src = box.getAttribute("data-certificado");
            if (src) {
                img.src = src;
                overlay.style.display = "flex";
            }
        });
    });

    overlay.addEventListener("click", () => {
        overlay.style.display = "none";
        img.src = "";
    });
});
