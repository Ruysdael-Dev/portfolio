<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>responsive personal portfolio website design tutorail</title>

    <!-- font awesome cdn link  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">

    <!-- custom css file link  -->
    <link rel="stylesheet" href="css/style.css">

    

</head>
<body>
  
   
<!-- header section starts  -->

<header>

    <div class="user">
        <img src="images/pic.jpg" alt="">
        <h3 class="name">Ruysdael Morais</h3>
        <p class="post">Desenvolvedor Front End</p>
    </div>

    <nav class="navbar">
        <ul>
            <li><a href="index.php">home</a></li>
            <li><a href="./portifolio.php#contact">Sobre</a></li>
            <li><a href="index.php#education">Cursos e certificações</a></li>
            <li><a href="index.php#portfolio">portfolio</a></li>
            <li><a href="index.php#contact">contato</a></li>
            <div id="marker"></div>
        </ul>
    </nav>

</header>

<!-- header section ends -->

<div id="menu" class="fas fa-bars"></div>

<!-- home section starts  -->



<!-- home section ends -->

<!-- about section starts  -->

<section class="about" id="about">

<h1 class="heading"> <span>Web</span> Scraping </h1>

<div class="row">

    <div class="info">
        
        <h3 class="descricao"> <span> Descrição : </span> O código abaixo é baseado no Web Scraping, uma espécie de “Garimpo” Da Internet.
Envolve extrair informações relevantes de determinado site para depois serem analisadas.
Esses dados serão usados para aprimorar a tomada de decisões com maior chance de acerto e sucesso.
Neste código, utilizou-se a Linguagem Python e o mesmo busca o Valor, descrição, e o Link De Todos Os Produtos Em Oferta no Mercado Livre e salva em um arquivo Dados.Xml. </h3>
        
        <div class="box-container">
        <div class="box_1">
            <img src="images/dados.gif" alt="">
        </div>
    </div>
  
        <a href="Web_Scraping.pdf"><button class="btn"> Baixar O código <i class="fas fa-download"></i> </button></a>
    </div>

   














<!-- jquery cdn link  -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<!-- custom js file link  -->
<script src="js/script.js"></script>


<!-- aqui um script referente ao botao -->
<script>
    const marker = document.querySelector
    ('#marker');
    const item = document.querySelectorAll('ul li a');
    function indicator(e){
        marker.style.left = e.offsetLeft+'px';
        marker.style.width = e.offsetwidth+'px';
    }
    item.forEach(link=>{
        link.addEventListener('mousemove',(e) => {
            indicator(e.target);
        })
    })
</script>


</body>
</html>