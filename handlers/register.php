<?php

//подключаю файл единожды
require_once($_SERVER['DOCUMENT_ROOT'] . '/config/db_config.php');

//1 проверка данных формы
if (!empty($_POST['userName']) &&   //проверка заполненности полей ФИО, Телефон, E-mail, Ваше сообщение
    !empty($_POST['email']) &&
    !empty($_POST['phone'])) {

    if (mb_strlen($_POST['userName']) <101 &&   //ставлю ограничение на длину ввода в поля ФИО, Телефон и email
        mb_strlen($_POST['phone']) < 21 && 
        mb_strlen($_POST['email']) < 101 && 
        mb_strlen($_POST['textMessage']) < 1001) { 

    //  2 добавляю данные в БД в разные таблицы
        //проверка на наличие пользователя в БД
        $result = mysqli_query($link, "SELECT COUNT(*) as count, `id` FROM `users` WHERE `user_name` = '{$_POST['userName']}' OR `user_phone` = '{$_POST['phone']}' OR `user_email` = '{$_POST['email']}'");
        $row = mysqli_fetch_assoc($result);

        if ($row['count'] < 1) {

            //добавляю строку в таблицу users
            $query  = "
                INSERT INTO `users` (`user_name`, `user_phone`, `user_email`) 
                VALUES ('{$_POST['userName']}', '{$_POST['phone']}', '{$_POST['email']}');
            ";

            //отправляем запрос в БД, а ответ помещаем в переменную
            $result = mysqli_query($link, $query);

            // получаю id пользователя при последнем соединении с БД
            $userID = mysqli_insert_id($link);
           
            //добавляю строку в таблицу questions
            if (!empty($_POST['textMessage'])) {

                $query = "
                            INSERT INTO `questions` (`user_id`, `question`) 
                            VALUES ('$userID', '{$_POST['textMessage']}');
                        ";

                //отправляем запрос в БД, а ответ помещаем в переменную
                $resultInsertQuestion = mysqli_query($link, $query);

                //и вывожу пользователю сообщение
                if ($result && $resultInsertQuestion) {
                    
                    $info = 'Отлично! Ваш вопрос отправлен!';

                } else {

                    $info = 'Что-то пошло не так. Попробуй еще раз!';

                }

            } else {

                $info = 'Вы не записали вопрос!';     

            }   

        } else {

            // получаю id пользователя из БД из массива $row
            $userID = $row['id'];
            
            //добавляю строку в таблицу questions
            if (!empty($_POST['textMessage'])) {

                $query = "
                            INSERT INTO `questions` (`user_id`, `question`) 
                            VALUES ('$userID', '{$_POST['textMessage']}');
                        ";

                //отправляем запрос в БД, а ответ помещаем в переменную
                $resultInsertQuestion = mysqli_query($link, $query);

                //и вывожу пользователю сообщение
                if ($resultInsertQuestion) {

                    $info = 'Отлично! Ваш вопрос отправлен!';

                } else {

                    $info = 'Что-то пошло не так. Попробуй еще раз!';

                }
            } else {

                $info = 'Вы не записали вопрос!';       

            }                 
        }

        //вывод сообщения пользователю    
        $infoForUser = "
                            Уважаемый(ая), {$_POST['userName']} <br>
                            Мы свяжемся с Вами в ближайшее время!
                        ";     

    } else {

        $info = 'Слишком длинное ФИО (>100 символов) <br>
                или телефон (>20 цифр) <br>
                или email (>100 символов) <br>
                или сообщение (>1000 символов)';
        $infoForUser = 'Пожалуйста заполните правильно все поля!';    

    }

} else {

    $info = 'Поля ФИО, Телефон, E-mail и Ваше сообщение - обязательны для заполнения.';
    $infoForUser = 'Пожалуйста заполните все поля!';

}

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
            <?php

                echo "$info <br>";
                echo "$infoForUser";
                
            ?>            
        </div>
    </main>

<?php

include('../inc/footer.php');

?>