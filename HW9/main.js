// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.

for (const simpson of simpsons){
    let div = document.createElement('div');
    div.innerHTML = `<h1>${simpson.name}</h1> ${simpson.surname} ${simpson.age} ${simpson.info} <br> <img src=${simpson.photo}>`;
    div.classList.add('member');
    document.body.appendChild(div)
};

// Цикл в циклі
// - Є масив

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

for (const course of coursesArray){
    let divMain = document.createElement('div');
    document.body.append(divMain);

    let divTitle = document.createElement('div');
    divTitle.innerText = `${course.title}`;
    divTitle.classList.add('title');
    divMain.append(divTitle);

    let divApp = document.createElement('div');
    divApp.classList.add('duration');
    divMain.append(divApp);

    let divMonthDuration = document.createElement('div');
    divMonthDuration.innerText = `Month duration: ${course.monthDuration}`;
    divMonthDuration.classList.add('month')
    divApp.append(divMonthDuration);

    let divHourDuration = document.createElement('div');
    divHourDuration.innerText = `Hour duration: ${course.hourDuration}`;
    divApp.append(divHourDuration);

    let divModules = document.createElement('div');
    let ul = document.createElement('ul');
    divModules.append(ul);
    for(const item of course.modules){
        let li = document.createElement('li');
        li.innerText = `${item}`;
        ul.append(li);
    }
    divMain.append(divModules);
};

// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let block = document.createElement('div');
block.innerText = 'створити блок та клонувати його';
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.style.background = 'brown';
block.style.color = 'yellow';
block.style.fontSize = '30px';
document.body.append(block);
document.body.append(block.cloneNode(true));

// - Є масив:

let arr = ['Main', 'Products', 'About us', 'Contacts'];
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let classMenu = document.getElementsByClassName('menu');
let ulMenu = classMenu[0];

for (const item of arr) {
    let liMenu = document.createElement('li');
    liMenu.innerText = `${item}`;
    ulMenu.append(liMenu);
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const cours of coursesAndDurationArray) {
    let divCours = document.createElement('div');
    divCours.innerText = `Title: ${cours.title} - Month duration: ${cours.monthDuration}`;
    document.body.append(divCours);
}
;

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (cours of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('item');

    let h1 = document.createElement('h1');
    h1.innerText = `Title: ${cours.title}`;
    h1.classList.add('heading');
    div.append(h1);

    let p = document.createElement('p');
    p.innerText = `Month duration: ${cours.monthDuration}`;
    p.classList.add('description');
    div.append(p);

    document.body.append(div);
}
;

// - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку
// зникав елемент з id="text".

let divText = document.createElement('div');
divText.innerText = 'Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text';
divText.setAttribute('id', 'text');

let button = document.createElement('button');
button.innerText = 'Click me!';

document.body.append(divText, button);

button.onclick = function () {
    divText.style.visibility = 'hidden';
};

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let divNew = document.createElement('div');

let inp = document.createElement('input');
inp.type = 'number';

let buttonAge = document.createElement('button');
buttonAge.innerText = 'verify age';

divNew.append(inp, buttonAge);
document.body.append(divNew);

buttonAge.onclick = function () {
    if (inp.value < 18) {
        alert('failed age verification')
    }
};

// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let divForInp = document.createElement('div');
let inpOne = document.createElement('input');
let inpTwo = document.createElement('input');
let inpThree = document.createElement('input');

let buttonCreateTable = document.createElement('button');
buttonCreateTable.innerText = 'Create Table';
divForInp.append(inpOne, inpTwo, inpThree, buttonCreateTable);

document.body.append(divForInp);

buttonCreateTable.onclick = function () {
    let lines = Number(inpOne.value);
    let cells = Number(inpTwo.value);
    let val = inpThree.value;
    let table = document.createElement('table');
    table.style.border = '1px solid';
    document.body.append(table);

    for (let i = 0; i <= lines; i++) {
        let tr = document.createElement('tr');
        table.append(tr);

        for (let y = 0; y <= cells; y++) {
            let td = document.createElement('td');
            td.innerText = val;
            td.style.border = '1px solid';
            tr.append(td);
        }
    }
}
