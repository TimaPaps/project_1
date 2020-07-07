<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Мой первый проект</title>
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/media-queries.css">
</head>
<body>    
    <div class="top-background top-background-trips">
        <div class="wrapper">         
            <?php
                include('../inc/header.php');
            ?>
            <section class="top-background-text">
                <h1>Необычная Москва</h1>
                <p class="top-background-text-font-weight">MyMoscow</p>
                <p>агенство интересных маршрутов</p>
            </section> 
        </div>                
    </div> 
    <main>
        <div class="wrapper-block">
            <section class="about">
                <h2>Что мы предлагаем?</h2>
            </section>
        </div>   
    </main>
<?php
    include('../inc/footer.php');
?>