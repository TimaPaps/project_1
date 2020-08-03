//начало - падающие снежинки

let countFlake = 0;
let countFlakeKill = 0;

//создаю массив вирусов
let virus = [
    "virus.svg",
    "virus1.svg",
    "virus2.svg",
    "virus3.svg",
    "virus4.svg",
    "virus5.svg",
    "virus6.svg",
    "virus7.svg",
    "virus8.svg",
    "virus9.svg"
];

// 1 создаю окно для подсчета удаленных снежинок
// 1.1 создаю окно 
let windowCountFlakeKill = document.createElement('div');
// 1.2 создаю заголовок и текст для вставки в окно
let flakeKillText = document.createElement('h4');
flakeKillText.textContent = "Уничтожено корон";
let flakeKillCount = document.createElement('p');
flakeKillCount.textContent = "0";

// 1.3 задаю размеры и стили окна
windowCountFlakeKill.classList.add('windowCountFlakeKill');

// 1.4 вывожу окно на страницу с заголовком и счетчиком
document.body.appendChild(windowCountFlakeKill);
windowCountFlakeKill.prepend(flakeKillText); //заголовок
windowCountFlakeKill.append(flakeKillCount); //счетчик

//меняю рандомно размеры элемента
function SizeRandom(min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min + 'px';
}

// 2 создаю функцию для генерации снежинок
function createFlake() {
    // 2.1 создаю элемент
    let flake = document.createElement('div');

    // 2.2 изменяю элемент
    /*//вариант добавления стилей элементу, но не стоит описывать все стили таким образом 
    flake.style.background = 'white';
    flake.style.borderRadius = '50%';
    flake.style.width = '60px';
    flake.style.height = '60px';*/

    // 2.2 изменяю элемент - правильный вариант - в файле стилей описать и подключить
    flake.classList.add('snowFlake');
    //вставляю рандомно из массива ссылки на картинки вирусов
    let virusWay = `${virus[Math.round(Math.random() * (virus.length - 1))]}`;
    flake.style.background = `url('/images/virus/${virusWay}') center center / contain no-repeat`;
    //вывожу элемент в разных местах экрана
    flake.style.left = Math.round(Math.random() * 90) + '%';

    let flakeWidth = flake.style.width = SizeRandom(25, 60);
    flake.style.height = flakeWidth;

    // 2.3 обработчик события - при клике удаляю элемент
    flake.addEventListener('click', function() {
        flake.remove();  //или this.remove();
        countFlakeKill++;
        //вывожу количество удаленных элементов
        flakeKillCount.innerText = countFlakeKill;
        //после удаления вызываю функцию генерации элемента для создания нового элемента
        createFlake(); //рекурсия - внутри функии вызываю эту же функцию
    });

    // 3 вывожу элемент на страницу
    //помещаю эл-т flake в конец body (prepend - в начало)
    document.body.appendChild(flake);
    /*для не body -  let footer = document.querySelector('footer'); или ('.footer'); ХЗ;
                     document.footer.appendChild(flake);*/                     
}

//помещаю интервал в переменную
let flakeInterval = setInterval(function() {   //setInterval - для интервала выпадания снежинок
    //ограничиваю кол-во элементов длинной массива с картинками вирусов
    if (countFlake < virus.length) { 
        //вызываю функцию генерации элемента
        createFlake();
        countFlake++;
    } else {
        //останавливаю интервал
        clearInterval(flakeInterval);
    }   
}, 1730)

//конец - падающие снежинки

// 1 снежинки разных размеров - генерация случайных размеров
// 2 вести подсчет убитых снежинок
// 3 выводить кол-во убитых снежинок в отдельный информационный блок
// 4 скачать с флэтикон снежинки и сделать случайный выбор изображения снежинок - нужен массив



/*let about = document.querySelector('.about');
//вывожу эл-т в формате объекта
//console.dir(about);
//вывожу св-во эл-та
console.log(about.className);
//перезаписываю данные в св-ве эл-та
about.className = 'new-class about-class';
//console.dir(about);
//добавляю новый класс
about.classList.add('hello');
//вывожу сообщение через проверку в условной конструкции
//if(about.classList.contains('hello')) {
//    alert('Класс есть!');
//}
//получаю атрибут action элемента form и помещаю в переменную
let form = document.querySelector('form').getAttribute('action');
//устанавливаю новый атрибут data-name со значением user-form для элемента form
document.querySelector('form').setAttribute('data-name', 'user-form');

let out = document.querySelector('form');
console.dir(out);*/