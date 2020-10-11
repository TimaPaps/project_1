<?php

include('../inc/head-doctype.php');

?>

<body>    
    <div class="top-background top-background-contacts">
        <div class="wrapper">         
            <?php

                include('../inc/header.php');
                
            ?>
            <div class="top-background-text">
                <h1>Наши контакты</h1>
                <p class="top-background-text-font-weight">MyMoscow</p>
                <p>агенство интересных маршрутов</p>
            </div> 
        </div>                
    </div>   
    <main>
        <div class="wrapper-block">
            <div class="about about-text">
                <h2>Контакты</h2>
                <p>Мы - команда тех, кто любит историю и любит Москву.</p>
                <p>Москва – это не только место по «заколачиванию денег» и «взращиванию карьеры», а еще и бесконечно красивые памятники природы, заказники, парки, заповедники. Активный отдых в Москве и Подмосковье – это отличная возможность вырваться из душного мегаполиса куда-нибудь в «дебри», навстречу приключениям. К счастью, не все Подмосковье еще «облагорожено» асфальтными дорожками и высоченными коттеджными заборами. Еще встречаются места, настолько глухие и далекие, что, очутившись там, кажется, что ты – первый человек, ступивший на эту землю.</p>
                <p>Там, где не проедет автомобилист и даже велосипедист, найдет лазейку и откроет для себя все красоты 100% бездорожья турист, проводящий свой активный отдых в Подмосковье.</p>
            </div>
            <div class="contacts-info">
                <div class="contacts-info-blocks">
                    <div class="contacts-info-blocks-photo-man"></div>
                    <div class="contacts-info-blocks-text">
                        <h3>Александр Рыбаков</h3>
                        <p>директор</p>
                        <a target="blank" href="mailto:rybakov@mymoscow.ru">rybakov@mymoscow.ru</a>
                    </div>
                </div>
                <div class="contacts-info-blocks">
                    <div class="contacts-info-blocks-photo-woman"></div>
                    <div class="contacts-info-blocks-text">
                        <h3>Елена Белкина</h3>
                        <p>руководитель корпоративного отдела</p>
                        <a target="blank" href="mailto:belkina@mymoscow.ru">belkina@mymoscow.ru</a>
                    </div>
                </div>
            </div>
            <div class="contacts">  
                <div class="contacts-blocks">
                    <div class="contacts-blocks-item">
                        <div class="contacts-blocks-item-logo footer-blocks-item-contacts-logo-placeholder"></div>
                        <p>
                            Москва, <br>
                            Большая Спасская 12
                        </p>
                    </div>
                    <div class="contacts-blocks-item">
                        <div class="contacts-blocks-item-logo footer-blocks-item-contacts-logo-mail"></div>
                        <p>
                            E-mail: <br>
                            moscow@imoscow.ru
                        </p>
                    </div>
                    <div class="contacts-blocks-item">
                        <div class="contacts-blocks-item-logo footer-blocks-item-contacts-logo-telephone"></div>
                        <p>
                            Телефон: <br>
                            8 (495) 626-46-00
                        </p>
                    </div>
                </div>
                <?php

                    include($_SERVER['DOCUMENT_ROOT'] . '/inc/form.php');

                ?>                
            </div>
        </div>  
        <div class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17951.780863518277!2d37.628517210477796!3d55.77634758472684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a7a220c9e5f%3A0x262ed08bf1f58a9c!2z0JHQvtC70YzRiNCw0Y8g0KHQv9Cw0YHRgdC60LDRjyDRg9C7LiwgMTIsINCc0L7RgdC60LLQsCwgMTI5MDkw!5e0!3m2!1sru!2sru!4v1595607526218!5m2!1sru!2sru" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>
    </main>
    
<?php

include('../inc/footer.php');

?>