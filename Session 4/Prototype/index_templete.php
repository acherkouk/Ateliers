<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Portfolio</title>
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <div class="title">
            <h3>Mon Portfolio</h3>
        </div>
        <nav >
            <a class="nav_item" href="">Accueil</a>
            <a class="nav_item" href="">Articles</a>
            <a class="nav_item" href="">À propos</a>
            <a class="nav_item" href="">Contact</a>

        </nav>

    </header>


   <main>

<h1 class="title_main">Mes Projects</h1>

   <div class="listproject">
   <?php foreach($projects as $project): ?>
<?php $category_style="" ;?>

<?php if($project["category"]=="Web"){
     $category_style="web" ;
}elseif($project["category"]=="JavaScript"){
 $category_style="javascript" ;
}else{
    $category_style="desktop" ;
}
?>

<?php

$string_technologe="";
foreach($project["technologies"] as $tec): ?>


   <?php  $string_technologe .= $tec . " ";?>



<?php endforeach; ?>




    <div class="card_project"  >

   <img src=" <?php echo($project["image"]) ?> " alt="">

   <div class="detalis">
    <h1> <?php echo($project["title"])?> </h1>

    <p class="description"><?php echo($project["description"])?></p>

 <p class="technologies">technologies : <?php echo($string_technologe) ?></p>

 <div class="footer_card">
    <div class="category" >
        <span class=" <?php echo($category_style) ?> "><?php echo($project["category"]) ?></span>
    </div>
    <div class="status">
         <span class=" <?php echo($project["status"]=="Terminé")? "termine": "encoure" ?> "  ><?php echo($project["status"]) ?></span>

    </div>
 </div>

   </div>



   </div>


<?php endforeach; ?>
</div>
   </main>
    
</body>
</html>