let numberUser = 0;
//создаю класс User (шаблон по которому будут создаваться объекты)
class User {
    //в конструкторе описываю свойства которые будут внутри объекта
    constructor(userName, userPic, userAge, userEmail, userProfession) {
        //наполняю свойствами
        this.name = userName;
        this.pic = userPic;
        this.age = userAge;
        this.email = userEmail;
        this.profession = userProfession;
        this.id = numberUser++;
    }
    //метод генерации формы пользователя
        renderForm() {
        //создаю элемент FORM
        let form = document.createElement('form');
        //добавляю класс для формы
        form.classList.add('user-form');
        //наполняю форму содержимым
        form.innerHTML = `
            <textarea name="message"></textarea>
            <input type="submit" value="отправить сообщение">
        `;
        //помещаю id созданного пользователя в переменную
        let userId = this.id;
        //добавляю обработчик события для формы на этапе создания элемента
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            //console.dir(form);

            //в элементе form нахожу elements и из массива элементов беру первый элемент с индексом [0], из него получаю значение value, помещаю значение в переменную
            //let textMessage = form.elements[0].value;
            //alert(textMessage);

            //в элементе form нахожу имя поля textarea-и (textarea name="message") из него получаю значение value, помещаю значение в переменную
            let textMessage = form.message.value;
            console.dir(textMessage);

            let now = new Date();
           /* let dateString =
                now.getUTCFullYear() + "/" +
                ("0" + (now.getUTCMonth()+1)).slice(-2) + "/" +
                ("0" + now.getUTCDate()).slice(-2) + " " +
                ("0" + now.getUTCHours()).slice(-2) + ":" +
                ("0" + now.getUTCMinutes()).slice(-2) + ":" +
                ("0" + now.getUTCSeconds()).slice(-2);*/
  
           // console.dir(this.id);
//1
            let insertMessage;
            if(userId == 0) {
                insertMessage = document.createElement('div');
                insertMessage.classList.add('chat-message-left');
            } else {
                insertMessage = document.createElement('div');
                insertMessage.classList.add('chat-message-rigth');
            }
//2            
            let message = `
                <p>${now}</p>
                <p>${textMessage}</p>
            `;

            let centerBlock = document.querySelector('.chat-message');
            insertMessage.innerHTML = message;
            centerBlock.appendChild(insertMessage);
            form.message.value = '';

        });
        //результатом работы функции указываю - вернуть form
        return form;
    }


    //метод - вывод пользователя на экран
    renderUser() {
        //создаю переменную insertBlock, нахожу все элементы chat-user, подставляю значение глобальной переменной в массив и получаю элемент chat-user по значению глобальной переменной и вставляю в переменную insertBlock
        let insertBlock = document.querySelectorAll('.chat-user')[this.id];

        //создаю переменную card и помещаю в нее содержимое
        let card = `
        <div class="card">
            <div class="card-image" style="background: url(${this.pic}) center center /cover no-repeat;"></div>
            <div class="card-description">
                <div class="card-description-name">${this.name}</div>
                <div class="card-description-text">Возраст: ${this.age}</div>
                <div class="card-description-text">Email: ${this.email}</div>
                <div class="card-description-text">Профессия: ${this.profession}</div>
            </div>
        </div>
        `;
        //вывожу insertBlock на экран
        insertBlock.innerHTML = card;

        //в блоке insertBlock нахожу элемент с классом card, вставляю в конец (appendChild) элемента card метод renderForm
        //insertBlock.querySelectorAll('.chat-user')[0].appendChild(this.renderForm());

        //вставляю в inserBlock ниже card вызов функции
        insertBlock.appendChild(this.renderForm()); //в момент вызова формы renderForm - форма создается, наполняется и возвращается результат работы метода
        


    }
}

//создаю новый объект класса User
let Tima = new User('Тимофей Папсуев', 'bender.jpeg', 37, 'tima@mail.ru', 'студент');
Tima.renderUser();

let Anna = new User('Анна Крушевская', '/images/images_page1/testimonials/test2.jpg', 22, 'anna@mail.ru', 'рекрутер' );
Anna.renderUser();

//console.log(Tima);
//console.log(Anna);





/*
//создаю объект 1 - Student
let Student = {
    //наполняю свойствами
    name: 'Тимофей Папсуев',
    pic: 'bender.jpeg',
    age: 37,
    email: 'tima@mail.ru',
    profession: 'студент',
    //создаю метод для вставки формы
    renderForm() {
        //создаю элемент FORM
        let form = document.createElement('form');
        //добавляю класс для формы
        form.classList.add('user-form');
        //наполняю форму содержимым
        form.innerHTML = `
            <textarea name="message"></textarea>
            <input type="submit" value="отправить сообщение">
        `;
        //добавляю обработчик события для формы на этапе создания элемента
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            //console.dir(form);

            //в элементе form нахожу elements и из массива элементов беру первый элемент с индексом [0], из него получаю значение value, помещаю значение в переменную
            //let textMessage = form.elements[0].value;
            //alert(textMessage);

            //в элементе form нахожу имя поля textarea-и (textarea name="message") из него получаю значение value, помещаю значение в переменную
            let textMessage = form.message.value;
            console.dir(textMessage);

        });
        //результатом работы функции указываю - вернуть form
        return form;
    },
    //создаю метод для вставки карты в html
    renderUser() {
        //создаю переменную insertBlock, нахожу все элементы chat-user и беру самый первый [0] и вставляю в переменную
        let insertBlock = document.querySelectorAll('.chat-user')[0];
        //создаю переменную card и помещаю в нее содержимое
        let card = `
        <div class="card">
            <div class="card-image" style="background: url(${this.pic}) center center /cover no-repeat;"></div>
            <div class="card-description">
                <div class="card-description-name">${this.name}</div>
                <div class="card-description-text">Возраст: ${this.age}</div>
                <div class="card-description-text">Email: ${this.email}</div>
                <div class="card-description-text">Профессия: ${this.profession}</div>
            </div>
        </div>
        `;
        //вывожу insertBlock на экран
        insertBlock.innerHTML = card;

        //в блоке insertBlock нахожу элемент с классом card, вставляю в конец (appendChild) элемента card метод renderForm
        //insertBlock.querySelectorAll('.chat-user')[0].appendChild(this.renderForm());

        //вставляю в inserBlock ниже card вызов функции
        insertBlock.appendChild(this.renderForm()); //в момент вызова формы renderForm - форма создается, наполняется и возвращается результат работы метода
    }
}
//вызываю у объекта Maneger метод renderMeneger
Student.renderUser();

//создаю объект 2 - User
let User = {
    //наполняю свойствами
    name: 'Анна Крушевская',
    pic: '/images/images_page1/testimonials/test2.jpg',
    age: 22,
    email: 'anna@mail.ru',
    profession: 'рекрутер',
    //создаю метод для вставки формы
    renderForm() {
        //создаю элемент FORM
        let form = document.createElement('form');
        //добавляю класс для формы
        form.classList.add('user-form');
        //наполняю форму содержимым
        form.innerHTML = `
            <textarea name="message"></textarea>
            <input type="submit" value="отправить сообщение">
        `;
        //добавляю обработчик события для формы на этапе создания элемента
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            //console.dir(form);

            //в элементе form нахожу elements и из массива элементов беру первый элемент с индексом [0], из него получаю значение value, помещаю значение в переменную
            //let textMessage = form.elements[0].value;
            //alert(textMessage);

            //в элементе form нахожу имя поля textarea-и (textarea name="message") из него получаю значение value, помещаю значение в переменную
            let textMessage = form.message.value;
            console.dir(textMessage);

        });
        //результатом работы функции указываю - вернуть form
        return form;
    },
    //создаю метод для вставки карты в html
    renderUser() {
        //создаю переменную insertBlock, нахожу все элементы chat-user и беру самый первый [0] и вставляю в переменную
        let insertBlock = document.querySelectorAll('.chat-user')[1];
        //создаю переменную card и помещаю в нее содержимое
        let card = `
        <div class="card">
            <div class="card-image" style="background: url(${this.pic}) center center /cover no-repeat;"></div>
            <div class="card-description">
                <div class="card-description-name">${this.name}</div>
                <div class="card-description-text">Возраст: ${this.age}</div>
                <div class="card-description-text">Email: ${this.email}</div>
                <div class="card-description-text">Профессия: ${this.profession}</div>
            </div>
        </div>
        `;
        //вывожу insertBlock на экран
        insertBlock.innerHTML = card;
        
        //в блоке insertBlock нахожу элемент с классом card, вставляю в конец (appendChild) элемента card метод renderForm
        //insertBlock.querySelectorAll('.chat-user')[0].appendChild(this.renderForm());

        //вставляю в inserBlock ниже card вызов функции
        insertBlock.appendChild(this.renderForm()); //в момент вызова формы renderForm - форма создается, наполняется и возвращается результат работы метода
    }
}
//вызываю у объекта Maneger метод renderMeneger
User.renderUser();
*/
/*конец - вариант Алексея */






/*начало - мой вариант */
/*
//создаю объект Manager
let Manager = {
    //наполняю свойствами
    name: 'Тимофей Папсуев',
    pic: 'bender.jpeg',
    age: 37,
    profession: 'студент',
    email: 'tima@mail.ru',
    //создаю метод для вставки карты в html
    renderManager() {
        // 1 создаю
        //создаю div и помещаю его в переменную
        let card = document.createElement('div');
        //добавляю класс для div
        card.classList.add('chatLeft');

        // 2 наполняю
        //заполняю div html кодом
        card.innerHTML = `
            <div class="card">
                <div class="card-image" style="background: url(${this.pic}) center center /cover no-repeat;"></div>
                <div class="card-description">
                    <div class="card-description-name">${this.name}</div>
                    <div class="card-description-text">Возраст: ${this.age}</div>
                    <div class="card-description-text">Email: ${this.email}</div>
                    <div class="card-description-text">Профессия: ${this.profession}</div>
                </div>
            </div>
        `;

        // 3 вставляю
        //в переменную записываю место вставки
        let insertElement = document.querySelector('.pageChatBlockLeft');
        //в переменную вставляю div
        insertElement.prepend(card);
    },
    renderManagerForm() {
        let formChat = document.createElement('form');
        formChat.classList.add('formLeft');
        formChat.innerHTML = `
            <form action="" method="POST">
                <textarea type="text" name="textMessage" placeholder="Введите сообщение"></textarea>
                <input type="submit" value="Отправить">
            </form>
        `;
        let insertForm = document.querySelector('.pageChatBlockLeft');
        insertForm.append(formChat);
    }
}
//вызываю у объекта Maneger метод renderMeneger
Manager.renderManager();
Manager.renderManagerForm();

//создаю объек User
let User = {
    //наполняю свойствами
    name: 'Анна Крушевская',
    pic: '/images/images_page1/testimonials/test2.jpg',
    age: 25,
    profession: 'рекрутер',
    email: 'anna@mail.ru',
    //создаю метод для вставки карты в html
    renderUser() {
        // 1 создаю
        //создаю div и помещаю его в переменную
        let card = document.createElement('div');
       
        //добавляю класс для div
        card.classList.add('chatRigth');

        // 2 наполняю
        //заполняю div html кодом
        card.innerHTML = `
            <div class="card">
                <div class="card-image" style="background: url(${this.pic}) center center /cover no-repeat;"></div>
                <div class="card-description">
                    <div class="card-description-name">${this.name}</div>
                    <div class="card-description-text">Возраст: ${this.age}</div>
                    <div class="card-description-text">Email: ${this.email}</div>
                    <div class="card-description-text">Профессия: ${this.profession}</div>
                </div>
            </div>            
        `;        

        // 3 вставляю
        //в переменную записываю место вставки
        let insertElement = document.querySelector('.pageChatBlockRigth');      
        //в переменную вставляю div 
        insertElement.prepend(card);
    },
    renderUserForm() {
        let formChat = document.createElement('form');
        formChat.classList.add('formRigth');
        formChat.innerHTML = `
            <form action="" method="POST">
                <textarea type="text" name="textMessage" placeholder="Введите сообщение"></textarea>
                <input type="submit" value="Отправить">
            </form>
        `;
        let insertForm = document.querySelector('.pageChatBlockRigth');
        insertForm.append(formChat);
    }
}
//вызываю у объекта User метод renderUser
User.renderUser();
User.renderUserForm();
*/
/*конец - мой вариант */


//классная работа
/*let Tima = {
    name: 'Tima',
    age: 37,
    heigth: 182,
    weigth: 80,
    skills: { //объект внутри объекта, так же массивы могут быть и т.д. 
        first: 'плавать',
        second: 'бегать',
        third: 'программировать'
    },
    sayHello(questName, item = 'ничего') {
        alert(`Привет, ${questName}! Тебя интересует: ${item}`);
    },
    sayMyName() {
        alert(`Привет, я ${this.name}`);
    }
}

for(let key in Tima.skills) { //цикл для перебора объекта
    console.log(Tima.skills[key]);
    //console.log("");
    console.log(key);
}

Tima.sayHello('Иван Васильич', 'кепка');
Tima.sayMyName();
console.log(`${Tima.name}: возраст ${Tima.age}`);*/

