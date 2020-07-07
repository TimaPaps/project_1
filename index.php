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
            <div class="top-background-btn">подробнее о нас</div>
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
        <div class="wrapper-block">
            <section class="about">
                <h2>Что мы предлагаем?</h2>
                <p>Наша главная цель - рассказать о Москве так, чтобы это было интересно всем!</p>
                <div class="about-item">
                    <div class="about-item-blocks">
                        <div class="about-block-item about-block-logo-map"></div>
                        <div class="about-block-text">
                            <h3>Необычные маршруты</h3>
                            <p>Мы обязательно порадуем тебя необычными маршрутами Москвы, которые прокладывают наши опытные гиды. Ты увидишь и узнаешь о Москве то, что никогда не знал!</p>
                        </div>
                    </div>
                    <div class="about-item-blocks">
                        <div class="about-block-item about-block-logo-souvenir"></div>
                        <div class="about-block-text">
                            <h3>Классные сувениры</h3>
                            <p>Отличная новость! У нас появился магазин сувениров! И самое примечательное, сувениры мы делаем сами! Заходи к нам в гости!</p>
                        </div>
                    </div>
                </div>
                <div class="about-item">
                    <div class="about-item-blocks">
                        <div class="about-block-item about-block-logo-compass"></div>
                        <div class="about-block-text">
                            <h3>Интересные экскурсии</h3>
                            <p>За время экскурсий,которых у нас больше 20, ты узнаешь и увидишь все основные достопримечательности: Кремль, Храм Христа Спасителя, пройдешься по пешеходным улицам Москвы, узнаешь их историю и сделаешь самые классные фотографии.</p>
                        </div>
                    </div>
                    <div class="about-item-blocks">
                        <div class="about-block-item about-block-logo-picture"></div>
                        <div class="about-block-text">
                            <h3>Фотосессии в Москве</h3>
                            <p>Команда MyMoscow рада провести креативные фотосессии в любом уголке Москвы. Не важно, свадьба у Вас или просто захотелось добавить в альбом или инстаграм красивые фотографии.</p>
                        </div>
                    </div>
                </div>
                <div class="about-item">
                    <div class="about-item-blocks">
                        <div class="about-block-item about-block-logo-discussion"></div>
                        <div class="about-block-text">
                            <h3>Новые знакомства</h3>
                            <p>MyMoscow - это целый клуб, где после московских прогулок ты сможешь продолжить общение с теми, кому интересна Москва, знакомиться с новыми людьми и делиться впечатлениями.</p>
                        </div>
                    </div>
                    <div class="about-item-blocks">
                        <div class="about-block-item about-block-logo-sun"></div>
                        <div class="about-block-text">
                            <h3>Яркие впечатления</h3>
                            <p>Самое важное - это яркие эмоции, которые остануться с тобой на долгое время! Поэтому в нашей команде мы ждем именно тебя!</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="info">
            <div class="info-blocks">
                <div class="info-blocks-background"></div>
            </div>
            <div class="info-blocks">
                <section class="info-blocks-text">
                    <h3>Кто мы такие</h3>
                    <p>Мы - команда тех, кто любит историю и любит Москву.</p>
                    <p>Москва - это не только место по "заколачиванию денег" и "взращиванию карьеры", а еще и бесконечно красивые памятники природы, заказники, парки, заповедники. Активный отдых в Москве и Подмосковье - это отличная возможность вырваться из душного мегаполиса куда-нибудь в "дебри", навстречу приключениям. К счастью не все Подмосковье еще "облагорожено" асфальтными дорожками и высоченными коттеджными заборами. Еще встречаются места, настолько глухие и далекие, что, очутившись там, кажется, что ты - первый человек, ступивший на эту землю.</p>
                    <p>Там, где не проедет автомобилист и даже велосипедист, найдет лазейку и откроет для себя все красоты 100% бездорожья турист, проводящий свой активный отдых в Подмосковье.</p>
                    <div class="info-blocks-text-btn">подробнее о нас</div>
                </section>
            </div>
        </div>   
        <div class="wrapper-block">
            <section class="about">
                <h2>Москва в фотографиях</h2>
                <p>Проще всего рассказать обо всем в фотографиях. Смотрите наши фотоотчеты и присылайте нам свои фотографии.</p>
            </section>
        </div>   
        <div class="photo">
            <div class="photo-blocks">
                <div class="photo-blocks-item-block-1"></div>
                <div class="photo-blocks-item-block-1"></div>
                <div class="photo-blocks-item-block-1"></div>
                <div class="photo-blocks-item-block-1"></div>
            </div>
        </div>
        <div class="photo">
            <div class="photo-blocks">
                <div class="photo-blocks-item-block-2"></div>
                <div class="photo-blocks-item-block-2"></div>
                <div class="photo-blocks-item-block-2"></div>
                <div class="photo-blocks-item-block-2"></div>
            </div>
        </div>
        <div class="wrapper-block">
            <section id="reviews" class="about">
                <h2>Отзывы</h2>
            </section>
            <div class="bottom-slider">
                <div class="bottom-slider-line">
                    <div class="bottom-slider-line-item">                           
                        <div class="bottom-slider-line-item-block bottom-slider-line-item-block-1">
                            <div class="bottom-slider-line-block-text">
                                <p>Были с дочкой и подругой на ночной экскурсии. Все таки много зависит от экскурсовода! Мы все четыре часа ходили за Станиславом Симоновым, как кролики. Боялись попустить хоть одно слово. При этом моей дочке - которая побывала во многих местах и с детства искушенная на интересные события - была сильно увлечена.</p>
                            </div>                           
                            <div class="bottom-slider-line-item-block-user">
                                <div class="bottom-slider-line-item-block-user-item bottom-slider-line-item-block-user-1"></div>
                                <p>Екатерина Васильева</p>
                            </div>                             
                        </div>
                        <div class="bottom-slider-line-item-block bottom-slider-line-item-block-2">
                            <div class="bottom-slider-line-block-text">
                                <p>Ездили на экскурсию с семиклассниками и родителями. Всем очень понравилось! Экскурсовод Михаил Борисович очень интересно, необычно и с юмором рассказывал о Москве 16 века. Гибко подстраивал экскурсию под интерсы и потребности слушателей, ловко "управлял" подачей автобуса, не давая нам замерзнуть.) Огромное спасибо!</p>
                            </div>                            
                            <div class="bottom-slider-line-item-block-user">
                                <div class="bottom-slider-line-item-block-user-item bottom-slider-line-item-block-user-2"></div>
                                <p>Анна Крушевская</p>
                            </div>  
                        </div>
                    </div>
                </div>
                <div class="bottom-slider-btn bottom-slider-right-btn"></div>
                <div class="bottom-slider-btn bottom-slider-left-btn"></div>
            </div> 
        </div> 
    </main>
<?php
    include('inc/footer.php');
?>