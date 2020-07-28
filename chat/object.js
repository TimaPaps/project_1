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
        insertElement.appendChild(card);
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
    profession: 'токарь',
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

