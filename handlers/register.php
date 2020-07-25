<?php
//подключаю файл единожды
    require_once($_SERVER['DOCUMENT_ROOT'] . '/config/db_config.php');


    //проверка данных формы

//  2.1 добавляю данные в БД
    //создаем запрос в БД
//    $query = "INSERT INTO `orders` (`userName`, `phone`, `email`, `textMessage`, `created_at`) /*если в БД нет по умолчанию current_timestamp() для поля времени(created_at в моем случае), то сами это сделаем*/
//              VALUES ('{$_POST['userName']}', '{$_POST['phone']}', '{$_POST['email']}', '{$_POST['textMessage']}', NOW());"; /*прописываем для вставки времени CURRENT_TIMESTAMP или NOW()*/
    //отправляем запрос в БД, а ответ помещаем в переменную
//    $result = mysqli_query($link, $query);

//  2.2 добавляю данные в БД в разные таблицы

    //проверка на наличие пользователя в БД
    $result = mysqli_query($link, "SELECT COUNT(*) as count, `id` FROM `users` WHERE `user_name` = '{$_POST['userName']}' OR `user_phone` = '{$_POST['phone']}' OR `user_email` = '{$_POST['email']}'");
    $row = mysqli_fetch_assoc($result);
    //print_r($row);

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
        //echo $userID;

        //добавляю строку в таблицу questions
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
        // получаю id пользователя из БД из массива $row
        $userID = $row['id']
        //print_r($userID);
        //добавляю строку в таблицу questions
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
    }
    
    //добавляю строку в таблицу users
//    $query  = "
//        INSERT INTO `users` (`user_name`, `user_phone`, `user_email`) 
//       VALUES ('{$_POST['userName']}', '{$_POST['phone']}', '{$_POST['email']}');
//    ";
    //отправляем запрос в БД, а ответ помещаем в переменную
//    $result = mysqli_query($link, $query);
    // получаю id пользователя при последнем соединении с БД
//    $userID = mysqli_insert_id($link);
//    echo $userID;

    //добавляю строку в таблицу questions
//    $query = "
//        INSERT INTO `questions` (`user_id`, `question`) 
//        VALUES ('$userID', '{$_POST['textMessage']}');
//    ";
     //отправляем запрос в БД, а ответ помещаем в переменную
//     $resultInsertQuestion = mysqli_query($link, $query);
    

    //и вывожу пользователю сообщение
//    if ($result && $resultInsertQuestion) {
//        $info = 'Отлично! Ваш вопрос отправлен!';
//    } else {
//        $info = 'Что-то пошло не так. Попробуй еще раз!';
//    }

    //print_r($_POST);

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
                echo "$info";
            ?>            
        </div>
    </main>
<?php
    include('../inc/footer.php');
?>