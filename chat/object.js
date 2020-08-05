//создаю класс User (шаблон по которому будут создаваться объекты)
class User {
    //в конструкторе описываю свойства которые будут внутри объекта
   
    constructor(userName, userAge, userEmail) {
        //наполняю свойствами
        this.name = userName;
        this.age = userAge;
        this.email = userEmail;
    }
    //метод генерации формы пользователя
        renderForm() {
        //создаю элемент FORM
        let form = document.createElement('form');
        //добавляю класс для формы
        form.classList.add('user-form');

    /*  //наполняю форму содержимым, скрытое поле role для дальнейшего расположения сообщений справа - слева
        form.innerHTML = `
            <textarea name="message"></textarea>
            <input type="submit" value="отправить сообщение">
            <input type="hidden" name="role" value="${this.role_id}">
        `;  */

        //наполняю форму содержимым, скрытое поле role для дальнейшего расположения сообщений справа - слева
        let form_template = document.getElementById('tmpl-form').innerHTML;
        let form_rendered = form_template.replace('${role_id}', this.role_id);
        form.innerHTML = form_rendered;
        
//console.log(form);
        //до собития клик сохраняю имя в переменную
        let name = this.name;
        //добавляю обработчик события для формы на этапе создания элемента
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            //console.dir(form);

            //в элементе form нахожу имя поля textarea (textarea name="message") из него получаю значение value, помещаю значение в переменную
            let textMessage = form.message.value;
            //console.dir(textMessage);

            //проверяю на пустоту поле message в textarea
            if(textMessage.trim()) {
                //в элементе form нахожу имя скрытого поля hidden из него получаю значение value, помещаю значение в переменную
                let role = form.role.value;
                //создаю пустую переменную, и если значение скрытого поля hidden равно 2, то помещаю в переменную название класса
                let dope_class = '';
                if(role == 2) {
                    dope_class = 'to-rigth';
                }

                //получаю текушее время и дату
                let date = new Date();
                let format_time =  
                                //date.getFullYear() + ':' + 
                                //date.getMonth() + ':' + 
                                //date.getDate() + ' - ' + 
                                checkTime(date.getHours()) + ':' +
                                checkTime(date.getMinutes()) //+ ':' +
                                //date.getSeconds()
                                ;

/*                let msg_tmpl = `
                    <div class="box flex-box">
                        <div class="message ${dope_class}">
                            <div>
                                ${name} 
                            </div>
                            <div class="flex-box flex-vertical-bottom">
                                <div class="word-break margin-rigth">
                                    ${textMessage}
                                </div>
                                <div class="ghost to-rigth">
                                    ${format_time}
                                </div>    
                            </div>
                        </div>
                    </div>
                `;  */

                let msg_tmpl = document.getElementById('tmpl-message').innerHTML;
                let msg_tmpl_rendered = msg_tmpl.replace('dope_class', dope_class)
                                                .replace('name', name)
                                                .replace('textMessage', textMessage)
                                                .replace('format_time', format_time);

                //нахожу класс chat-message и добавляю в него html
                document.querySelector('.chat-message').innerHTML += msg_tmpl_rendered;
                //очищаю поле для ввода ссобщения
                form.message.value = '';

                //console.dir(this);
            }       
        });
        //результатом работы функции указываю - вернуть form
        return form;
    }

    //метод - вывод пользователя на экран
    renderUser(selector) {
        //создаю переменную insertBlock, нахожу все элементы chat-user, подставляю значение глобальной переменной в массив и получаю элемент chat-user по значению глобальной переменной и вставляю в переменную insertBlock
        let insertBlock = document.querySelector(selector);

    /*  //создаю переменную card и помещаю в нее содержимое
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
        insertBlock.innerHTML = card;  */ 

        //шаблонизация. разделяю верстку от фронтэнда
        //создаю переменную card, нахожу по id tmpl-card в template в index.html, и помещаю в нее содержимое (html код из tmpl-cadr)
        let card = document.getElementById('tmpl-card').innerHTML;
        //заменяю текст на переменные
        let card_rendered = card.replace('${name}', this.name)
                                .replace('${pic}', this.pic)
                                .replace('${age}', this.age)
                                .replace('${email}', this.email)
                                .replace('${profession}', this.profession);

        //вывожу insertBlock на экран
        insertBlock.innerHTML = card_rendered;     

        //вставляю в inserBlock ниже card вызов функции
        insertBlock.appendChild(this.renderForm()); //в момент вызова формы renderForm - форма создается, наполняется и возвращается результат работы метода
    }
}

//создаю класс учитель Tutor
class Tutor extends User {
    pic = '/images/images_page1/testimonials/test2.jpg'; //если создаем свойства вне метода (constructor класса User), то убираем this.
    profession = 'преподаватель';    
    role_id = 1;
}

//создаю класс студент Student 
class Student extends User {
    pic = 'bender.jpeg';
    profession = 'студент';
    role_id = 2;
}


//создаю новый объект класса User

let Tima = new Student('Тимофей Папсуев', 37, 'tima@mail.ru');
Tima.renderUser('.chat-user-student'); //пробрасываю явный селектор (можно id) в метод renderUser

let Anna = new Tutor('Анна Крушевская', 22, 'anna@mail.ru');
Anna.renderUser('.chat-user-tutor'); //пробрасываю явный селектор (можно id) в метод renderUser

//подставляю 0 перед одинарными значениями минут и часов
function checkTime(i) {
    if(i < 10) {
        i = "0" + i;
    }
    return i;
}