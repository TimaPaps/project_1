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
    <div class="top-background top-background-contacts">
        <div class="wrapper">         
            <?php
                include('../inc/header.php');
            ?>
        </div>                
    </div>   
    <main>
        <div class="wrapper-block">
            <section class="about about-text">
                <h2>Контакты</h2>
                <p>Мы - команда тех, кто любит историю и любит Москву.</p>
                <p>Москва – это не только место по «заколачиванию денег» и «взращиванию карьеры», а еще и бесконечно красивые памятники природы, заказники, парки, заповедники. Активный отдых в Москве и Подмосковье – это отличная возможность вырваться из душного мегаполиса куда-нибудь в «дебри», навстречу приключениям. К счастью, не все Подмосковье еще «облагорожено» асфальтными дорожками и высоченными коттеджными заборами. Еще встречаются места, настолько глухие и далекие, что, очутившись там, кажется, что ты – первый человек, ступивший на эту землю.</p>
                <p>Там, где не проедет автомобилист и даже велосипедист, найдет лазейку и откроет для себя все красоты 100% бездорожья турист, проводящий свой активный отдых в Подмосковье.</p>
            </section>
        </div>  
    </main>
<?php
    include('../inc/footer.php');
?>