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
  
            let insertMessage;
            if(userId == 0) {

                insertMessage = document.createElement('div');
                insertMessage.classList.add('chat-message-left');

            } else {

                insertMessage = document.createElement('div');
                insertMessage.classList.add('chat-message-rigth');

            }
          
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

        //вставляю в inserBlock ниже card вызов функции
        insertBlock.appendChild(this.renderForm()); //в момент вызова формы renderForm - форма создается, наполняется и возвращается результат работы метода

    }
}

//создаю новый объект класса User
let Tima = new User('Тимофей Папсуев', 'bender.jpeg', 37, 'tima@mail.ru', 'студент');
Tima.renderUser();

let Anna = new User('Анна Крушевская', '/images/images_page1/testimonials/test2.jpg', 22, 'anna@mail.ru', 'рекрутер' );
Anna.renderUser();