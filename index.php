<?php

//подключение к DB
//подключаю файл единожды
require_once($_SERVER['DOCUMENT_ROOT'] . '/config/db_config.php');

$result = mysqli_query($link, "SELECT `pic`, `header`, `text` FROM `offers`"); //функция php, к-я может сделать запрос к БД, к-ю помещаем в переменную 

//запрос к reviews для блока - Отзывы
$resultReviews = mysqli_query($link, "SELECT `text`, `pic`, `userName` FROM `reviews`"); 

mysqli_close($link); //обязательно закрываем соединение (чистка памяти и т.д.)

include('inc/head-doctype.php');

?>

<body>    
    <div class="top-background">        
        <div class="wrapper">         
            <?php

                include('inc/header.php');

            ?>
            <section class="top-background-text">
                <h1>Необычная Москва</h1>
                <p class="top-background-text-font-weight">MyMoscow</p>
                <p>агенство интересных маршрутов</p>
            </section> 
            <a href="/pages/contacts.php" class="top-background-btn">подробнее о нас</a>
        </div>                
    </div> 
    <div class="top">
        <div class="top-slider">
            <div class="top-slider-line">
                <div class="top-slider-line-item"></div>
                <div class="top-slider-line-item"></div>
                <div class="top-slider-line-item"></div>
                <div class="top-slider-line-item"></div>
            </div>
            <div class="top-slider-btn top-slider-right-btn"></div>
            <div class="top-slider-btn top-slider-left-btn"></div>
        </div> 
    </div>    
    <main>
        <section class="wrapper-block">
            <div id="about" class="about">
                <h2>ЧТО МЫ ПРЕДЛАГАЕМ?</h2>
                <p>Наша главная цель - рассказать о Москве так, чтобы это было интересно всем!</p>
                <div class="about-item">

                    <?php while($row = mysqli_fetch_assoc($result)): ?>
                        <div class="about-item-blocks">
                            <div class="about-block-item <?= $row['pic'] ?>"></div>
                            <div class="about-block-text">
                                <h3><?= $row['header'] ?></h3>
                                <p><?= $row['text'] ?></p>
                            </div>
                        </div>
                    <?php endwhile; ?>
                    
                </div>
            </div>
        </section>
        <section class="info">
            <div class="info-blocks info-blocks-background"></div>
            <div class="info-blocks info-blocks-text">
                <h2>КТО МЫ ТАКИЕ</h2>
                <p>Мы - команда тех, кто любит историю и любит Москву.</p>
                <p>Москва - это не только место по "заколачиванию денег" и "взращиванию карьеры", а еще и бесконечно красивые памятники природы, заказники, парки, заповедники. Активный отдых в Москве и Подмосковье - это отличная возможность вырваться из душного мегаполиса куда-нибудь в "дебри", навстречу приключениям. К счастью не все Подмосковье еще "облагорожено" асфальтными дорожками и высоченными коттеджными заборами. Еще встречаются места, настолько глухие и далекие, что, очутившись там, кажется, что ты - первый человек, ступивший на эту землю.</p>
                <p>Там, где не проедет автомобилист и даже велосипедист, найдет лазейку и откроет для себя все красоты 100% бездорожья турист, проводящий свой активный отдых в Подмосковье.</p>
                <a href="/pages/contacts.php" class="info-blocks-text-btn text-decoration-none">подробнее о нас</a>
            </div>
        </section>  
        <section>
            <div class="wrapper-block about">
                <h2>МОСКВА В ФОТОГРАФИЯХ</h2>
                <p>Проще всего рассказать обо всем в фотографиях. Смотрите наши фотоотчеты и присылайте нам свои фотографии.</p>
            </div>
            <div class="photo-blocks">
                <div class="photo-blocks-item"></div>
                <div class="photo-blocks-item"></div>
                <div class="photo-blocks-item"></div>
                <div class="photo-blocks-item"></div>
                <div class="photo-blocks-item"></div>
                <div class="photo-blocks-item"></div>
                <div class="photo-blocks-item"></div>
                <div class="photo-blocks-item"></div>
            </div>  
        </section> 
        <section class="wrapper-block">
            <div id="reviews" class="about">
                <h2>ОТЗЫВЫ</h2>
                <div class="bottom-slider">
                    <div class="bottom-slider-line">

                        <?php while($row = mysqli_fetch_assoc($resultReviews)): ?>  
                            <div class="bottom-slider-line-item">             
                                <div class="bottom-slider-line-item-block bottom-slider-line-item-block-1">
                                    <div class="bottom-slider-line-block-text">
                                        <p><?= $row['text']?></p>
                                    </div>                           
                                    <div class="bottom-slider-line-item-block-user">
                                        <div class="bottom-slider-line-item-block-user-item <?= $row['pic']?>"></div>
                                        <p><?= $row['userName']?></p>
                                    </div>                             
                                </div>
                            </div>
                        <?php endwhile; ?>

                    </div>
                    <div class="bottom-slider-btn bottom-slider-right-btn"></div>
                    <div class="bottom-slider-btn bottom-slider-left-btn"></div>
                </div> 
            </div>
        </section> 
    </main>
<?php

include('inc/footer.php');

?>