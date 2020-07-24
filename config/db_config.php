<?php
//подключение к DB
    const DB_HOST = 'localhost';
    const DB_USER = 'root';
    const DB_PASS = '';
    const DB_NAME = 'web_project_1';

    $link = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME); //соединяемся с БД и помещаем в переменную

//проверка на подключение к DB
    if(!$link) {
        echo 'Нет подключения к базе данных';
        die(); //останавливаем работу скрипта
    }

    /* правильная обработка на подключение к DB
    try {

    } catch() {

    }
    */

//указываем кодировку для общения с DB
    mysqli_set_charset($link, 'utf8'); 
    //print_r($link);
?>