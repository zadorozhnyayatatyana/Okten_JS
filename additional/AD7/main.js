// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

function CreateObject(id, name, email, street, suite, city, zipcode, lat,
                      lng, tephone, website, companyName, companyCatchPhrase, companyBs) {

    this.id = id;
    this.name = name;
    this.email = email;
    this.address = {street, suite, city, zipcode};
    this.address.geo = {lat, lng};
    this.tephone = tephone;
    this.website = website;
    this.company = {name: companyName, catchPhrase: companyCatchPhrase, bs: companyBs}
}

let ob = new CreateObject(1, 'NewObject', 'rrr@gmail.com', 'Comp street', 'Comp suite',
    'Comp city', '50029', '37.3159', '81.1496', '+38097456879', 'http://compsit.ua',
    'Com name', 'Multi-layered client-server neural-net', 'harness real-time e-markets');

console.log(ob);

function Tags(titleOfTag, action, titleOfAttr1, actionOfAttr1, titleOfAttr2, actionOfAttr2, titleOfAttr3, actionOfAttr3) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs = [{titleOfAttr: titleOfAttr1, actionOfAttr: actionOfAttr1},
        {titleOfAttr: titleOfAttr2, actionOfAttr: actionOfAttr2},
        {titleOfAttr: titleOfAttr3, actionOfAttr: actionOfAttr3}]
}

let tagA = new Tags('a',
    'створює посилання на іншу сторіку(Зовнішне посилання) або на певний елемент цієї сторінки(Внутрішне посилання)',
    'href', 'Задає адресу документа, на який слід перейти.',
    'name', 'Встановлює ім\'я якоря всередині документа',
    'media', 'Вказує, що пов’язаний документ оптимізований під деякий пристрій.');

let tagDiv = new Tags('div',
    'використовується, щоб групувати блоки інформації та форматувати її за допомогою CSS',
    'align', 'Визначає вирівнювання вмісту всередині div елемента.',
    '', '', '', '');

console.log(tagA);
console.log(tagDiv);

function UserCard(variable) {

    this.balance = 100;
    this.transactionLimit = 100;
    this.historyLog = [];
    this.key = Math.random() * (variable - 1) + 1;
    this.putCredits = function (sum){
        this.balance = this.balance + sum;
    }

}

let userCard1 = new UserCard(8);
console.log(userCard1);


// let na = Math.random() * (3 - 1) + 1;
// console.log(na);
//
// function getRandomInt(max) {
//     return Math.random() * (max - 1) + 1;
// }
//
// let o = getRandomInt(8);
// console.log(o);
//
// let o1 = getRandomInt(20);
// console.log(o1);
//
// let o3 = getRandomInt(1);
// console.log(o3);
