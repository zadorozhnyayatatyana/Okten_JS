// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}

let users = [];

let user1 = new User(5, 'Name 1', 'Surname 1', 'email 1', 'phone 1');
let user2 = new User(25, 'Name 2', 'Surname 2', 'email 2', 'phone 2');
let user3 = new User(9, 'Name 3', 'Surname 3', 'email 3', 'phone 3');
let user4 = new User(1, 'Name 4', 'Surname 4', 'email 4', 'phone 4');
let user5 = new User(8, 'Name 5', 'Surname 5', 'email 5', 'phone 5');
let user6 = new User(78, 'Name 6', 'Surname 6', 'email 6', 'phone 6');
let user7 = new User(65, 'Name 7', 'Surname 7', 'email 7', 'phone 7');
let user8 = new User(7, 'Name 8', 'Surname 8', 'email 8', 'phone 8');
let user9 = new User(2, 'Name 9', 'Surname 9', 'email 9', 'phone 9');
let user10 = new User(45, 'Name 10', 'Surname 1.', 'email 10', 'phone 10');

users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
console.log('масив users');
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log('відфільтрувати масив users, залишивши тільки об\'єкти з парними id ');
console.log(users.filter(user => user.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log('відсортувати масив users по id. по зростанню');
console.log(users.sort((a, b) => a['id'] - b['id']));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [];
let client1 = new Client(5, 'Name 1', 'Surname 1', 'email 1', 'phone 1', ['milk', 'bread']);
let client2 = new Client(25, 'Name 2', 'Surname 2', 'email 2', 'phone 2', ['milk', 'bread', 'chips']);
let client3 = new Client(9, 'Name 3', 'Surname 3', 'email 3', 'phone 3', ['milk']);
let client4 = new Client(1, 'Name 4', 'Surname 4', 'email 4', 'phone 4', ['milk', 'bread', 'chips', 'tea']);
let client5 = new Client(8, 'Name 5', 'Surname 5', 'email 5', 'phone 5', ['milk', 'bread']);
let client6 = new Client(78, 'Name 6', 'Surname 6', 'email 6', 'phone 6', ['milk', 'bread', 'chips', 'tea', 'chocolate']);
let client7 = new Client(65, 'Name 7', 'Surname 7', 'email 7', 'phone 7', ['milk', 'bread', 'tea', 'chocolate']);
let client8 = new Client(7, 'Name 8', 'Surname 8', 'email 8', 'phone 8', ['bread']);
let client9 = new Client(2, 'Name 9', 'Surname 9', 'email 9', 'phone 9', ['milk', 'bread', 'chips', 'tea', 'chocolate', 'porridge']);
let client10 = new Client(45, 'Name 10', 'Surname 1.', 'email 10', 'phone 10', ['milk', 'bread', 'chips', 'tea']);

clients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
console.log('масив clients');
console.log(clients);

// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log('Відсортувати масив clients по кількості товарів в полі order по зростанню.');
console.log(clients.sort((a, b) => a['order'].length - b['order'].length));


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, maker, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        for (let i in this) {
            if (typeof (this[i]) !== 'function') {

                if (typeof (this[i]) === 'object') {
                    console.log(i + ':');
                    console.log(this[i]);
                } else {
                    console.log(i + ':' + this[i]);
                }
            }
        }
    };

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };

    this.changeYear = function (newValue) {
        this.year = newValue;
    };

    this.addDriver = function (driver) {
        this.driver = driver;

    };
}

let car = new Car('BMW', 'BMW AG', 1990, 200, 100);

console.log('- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`');
car.drive();

console.log('-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`');
car.info();

console.log('// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed');
car.increaseMaxSpeed(10);
console.log('maxSpeed = ' + car.maxSpeed);

console.log('- changeYear (newValue) - змінює рік випуску на значення newValue');
car.changeYear(2001);
console.log('year = ' + car.year);

console.log('-- addDriver (driver) - приймає об\'єкт який "водій" з довільним набором полів, і додає його в поточний об\'єкт car')
car.addDriver({name: 'driverName', age: 80});
car.info();

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarClass {
    constructor(model, maker, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.maker = maker;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };

    info() {
        for (let i in this) {
            if (typeof (this[i]) !== 'function') {

                if (typeof (this[i]) === 'object') {
                    console.log(i + ':');
                    console.log(this[i]);
                } else {
                    console.log(i + ':' + this[i]);
                }
            }
        }
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };

    changeYear(newValue) {
        this.year = newValue;
    };

    addDriver(driver) {
        this.driver = driver;

    };
}

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellas = [];
let cinderella1 = new Cinderella('Cinderella 1', '18', 34);
let cinderella2 = new Cinderella('Cinderella 2', '19', 35);
let cinderella3 = new Cinderella('Cinderella 3', '20', 37);
let cinderella4 = new Cinderella('Cinderella 4', '17', 34);
let cinderella5 = new Cinderella('Cinderella 5', '18', 40);
let cinderella6 = new Cinderella('Cinderella 6', '19', 38);
let cinderella7 = new Cinderella('Cinderella 7', '20', 39);
let cinderella8 = new Cinderella('Cinderella 8', '17', 35);
let cinderella9 = new Cinderella('Cinderella 9', '18', 40);
let cinderella10 = new Cinderella('Cinderella 10', '17', 34);
cinderellas.push(cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8,
    cinderella9, cinderella10);

class Prince extends Cinderella {
    constructor(name, age, shoe) {
        super(name, age);
        this.shoe = shoe;
    }
}

let pince = new Prince('PrinceName', 20, 38);

console.log('пошук попелюшки циклом')
for (let i = 0; i <= cinderellas.length - 1; i++) {
    if (cinderellas[i].footSize === pince.shoe) {

        console.log('З принцем має бути ' + cinderellas[i].name);

    }
}

console.log('пошук попелюшки за допомоги функції масиву find та відповідного колбеку')
function findCinderella(element, index, array) {
          return element.footSize === pince.shoe
}

console.log('З принцем має бути '+ cinderellas.find(findCinderella).name)

