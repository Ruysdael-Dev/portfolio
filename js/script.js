// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
  // Menu Mobile toggle (jQuery)
  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  // Controle do scroll: remover menu, mostrar botão topo e animação do scroll suave
  $(window).on('scroll load', () => {
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if ($(window).scrollTop() > 0) {
      $('.top').fadeIn();
    } else {
      $('.top').fadeOut();
    }
  });

  // Scroll suave para links de âncora
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    const destino = $(this).attr('href');
    if ($(destino).length) {
      $('html, body').animate({
        scrollTop: $(destino).offset().top
      }, 600, 'swing');
    }
  });

  // Certificados: abrir overlay ao clicar nas caixas com data-certificado
  const boxes = document.querySelectorAll('.box[data-certificado]');
  const overlay = document.getElementById('certificadoOverlay');
  const img = document.getElementById('certificadoImagem');

  boxes.forEach(box => {
    box.addEventListener('click', () => {
      const src = box.getAttribute('data-certificado');
      if (src) {
        img.src = src;
        overlay.style.display = 'flex';
      }
    });
  });

  // Fechar overlay ao clicar nele
  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    img.src = '';
  });

  // Neon Marker - indicador no menu lateral
  const marker = document.querySelector('#marker');
  const links = document.querySelectorAll('header .navbar ul li a');

  // Função para mover o marcador para o item ativo
  function moveMarker(el) {
    marker.style.left = `${el.offsetLeft}px`;
    marker.style.width = `${el.offsetWidth}px`;
  }

  // Evento mouseenter para mover o marcador
  links.forEach(link => {
    link.addEventListener('mouseenter', e => moveMarker(e.target));
  });

  // Opcional: marcar item ativo baseado na rolagem da página
  function highlightMenuOnScroll() {
    let scrollPos = window.scrollY || window.pageYOffset;
    links.forEach(link => {
      const section = document.querySelector(link.getAttribute('href'));
      if (section) {
        if (
          scrollPos >= section.offsetTop - 60 &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          moveMarker(link);
        }
      }
    });
  }
  window.addEventListener('scroll', highlightMenuOnScroll);
  highlightMenuOnScroll(); // inicializa marcador na posição correta ao carregar
});
