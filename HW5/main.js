// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleS(a, b) {
    return a * b
}

console.log('площa прямокутника = ' + rectangleS(5, 9))

// створити функцію яка обчислює та повертає площу кола з радіусом r
function circleS(r) {
    return 3.14 * r * r
}

console.log('площа кола = ' + circleS(8))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderS(h, r) {
    return 2 * 3.14 * (h + r)
}

console.log('площa циліндру = ' + cylinderS(9, 7))

// створити функцію яка приймає масив та виводить кожен його елемент
function writeArr(arr) {
    for (let i of arr) {
        document.write(`${i} <br>`);
    }
}

document.write(`вивід елементів масиву <br>`);
let arr = [8, 'text', true];
writeArr(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function writeParagraph(str) {
    document.write(`<p>${str}</p>`)
}

document.write(`параграф <br>`);
writeParagraph('Текст параграфу');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulThree(str) {
    document.write(`<ul>
                    <li>${str}</li>
                    <li>${str}</li>
                    <li>${str}</li>
                    </ul>`)
}

document.write(`ul з трьома елементам <br>`);
ulThree('Текст li');

// - створити функцію яка створює ul з елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ul(str, quantity) {
    document.write(`<ul>`)
    for (let i = 0; i < quantity; i++) {
        document.write(`<li> ${str}</li>`)
    }
    document.write(`</ul>`)
}

document.write(`ul з кількістю li з аргументу <br>`);
ul('текс li', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function ulArr(arr) {
    document.write(`<ul>`)
    for (let i of arr) {
        document.write(`<li> ${i}</li>`)
    }
    document.write(`</ul>`)
}

document.write(`список з масиву <br>`)
ulArr(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function writeArrObject(arr) {
    for (let element of arr) {
        document.write(`<div>`)
        for (let key in element) {
            document.write(`${key + ' : '} ${element[key]} `)
        }
        document.write(`</div>`)
    }
}

let users = [
    {
        id: 1,
        name: 'Name 1',
        age: 32
    },
    {
        id: 2,
        name: 'Name 2',
        age: 30
    },
    {
        id: 3,
        name: 'Name 3',
        age: 12
    },
    {
        id: 4,
        name: 'Name 4',
        age: 10
    },
];
document.write(`об'єкти з масиву по блокам <br>`)
writeArrObject(users)

// - створити функцію яка повертає найменьше число з масиву
function minInArr(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}

document.write(` <br>найменше число з масиву  <br>`)
let arrNum = [8, 6, 88, -5, 7];
document.write(minInArr(arrNum));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sum(arr) {
    let summa = 0;
    for (let i = 0; i < arr.length; i++) {
        summa = summa + arr[i]
    }
    return summa
}

document.write(` <br>сума елементів масиву <br>`);
document.write(sum(arrNum));