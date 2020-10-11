<?php

//подключаю файл единожды
require_once($_SERVER['DOCUMENT_ROOT'] . '/config/db_config.php');

//если супер глобальный массив GET не пустой
if (!empty($_GET)) {

    //объединяю две таблицы из БД в одну в окно браузера
    $query = "SELECT `users`.`user_name` AS `userName`,  -- выбираю из таб.users поле `user_name` и задаю псевдоним `AS` для этого поля, например userName
                    `users`.`user_email` AS `userEmail`,  -- псевдонимы чтобы не было конфликтов названий полей
                    `users`.`id` AS `userID`,
                    `users`.`user_phone` AS `userPhone`,                    
                    `users`.`created_at` AS `userCreated`,
                    `questions`.* -- выбираю все поля из таблицы question
            FROM    `users`  -- из users
            LEFT JOIN `questions`  -- название присоединяемой таблицы
            ON      `users`.`id` = `questions`.`user_id`  -- на основании каких-то данных (сейчас если есть равенство id в таблицах)
            WHERE   `user_name` LIKE '%{$_GET['search']}%'
            OR       `user_email` LIKE '%{$_GET['search']}%'
            OR      `user_phone` LIKE '%{$_GET['search']}%'
    ";

    //отправляю запрос в БД и помещаю ответ в переменную
    $result = mysqli_query($link, $query); 

}

//обязательно закрываем соединение (чистка памяти и т.д.)
mysqli_close($link);

include($_SERVER['DOCUMENT_ROOT'] . '/inc/head-doctype.php');

?>

<body>    
    <div class="top-background">
        <div class="wrapper">         
            <?php

                include('../inc/header.php');

            ?>
        </div>                
    </div>   
    <main>
        <div class="wrapper-block">
            <h1>Поиск по клиентам</h1>          
            <form action="userSearch.php" method="GET">
                <input type="text" name="search">
                <input type="submit" value="найти">
            </form>

            <?php if(!empty($_GET)): ?>
                    
                <h2>Результаты поиска</h2>
                <div class="table">
                    <div class="table-caption">Заголовок таблицы</div>
                    <div class="table-colgroup">
                        <div class="table-col" width="10%"></div>
                        <div class="table-col" width="30%"></div>
                        <div class="table-col" width="10%"></div>
                        <div class="table-col" width="30%"></div>
                        <div class="table-col" width="20%"></div>
                    </div>
                    <div class="table-thead">    
                        <div class="table-tr">
                            <div class="table-th">#</div>
                            <div class="table-th">Имя</div>
                            <div class="table-th">Телефон</div>
                            <div class="table-th">E-mail</div>
                            <div class="table-th">Дата регистрации</div>
                            <div class="table-th">Сообщение</div>
                        </div>
                    </div>

                    <?php while($row = mysqli_fetch_assoc($result)): ?>

                    <div class="table-tbody"> 
                        <div class="table-tr">
                            <div class="table-th"><?= $row['userID'] ?></div> <!--если без псевдонима, то ['id'] (как название полей в таблице), если с псевдонимом, то ['userID']-->
                            <div class="table-td"><?= $row['userName'] ?></div>
                            <div class="table-td"><?= $row['userPhone'] ?></div>
                            <div class="table-td"><?= $row['userEmail'] ?></div>
                            <div class="table-td"><?= $row['userCreated'] ?></div>
                            <div class="table-td"><?= $row['question'] ?></div>
                        </div>
                    </div> 

                    <?php endwhile; ?>

                    <div class="table-tfoot">
                        <div class="table-tr">
                            <div class="table-th">#</div>
                            <div class="table-th">Имя</div>
                            <div class="table-th">Телефон</div>
                            <div class="table-th">E-mail</div>
                            <div class="table-th">Дата регистрации</div>
                            <div class="table-th">Сообщение</div>
                        </div>
                    </div>
                </div>

            <?php endif; ?>
            
        </div>
    </main>
    
<?php

include('../inc/footer.php');

?>