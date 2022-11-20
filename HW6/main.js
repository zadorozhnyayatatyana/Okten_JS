// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

console.log('Знайти та вивести довижину настипних стрінгових значень');
console.log(str1.concat(' length ='), str1.length);
console.log(str2.concat(' length ='), str2.length);
console.log(str3.concat(' length ='), str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('Перевести до великого регістру наступні стрінгові значення');
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str1_1 = 'HELLO WORLD';
let str2_1 = 'LOREM IPSUM';
let str3_1 = 'JAVASCRIPT IS COOL';

console.log('Перевести до нижнього регістру настипні стрінгові значення');
console.log(str1_1.toLowerCase());
console.log(str2_1.toLowerCase());
console.log(str3_1.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyString = ' dirty string   ';

console.log('Є "брудна" стрінга let str = \' dirty string   \' . Почистити її від зайвих пробілів');
console.log(dirtyString.trim());
console.log(dirtyString.replace(' ', ''));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToArray(strVar) {
    return strVar.split(' ');
}

let str = 'Ревуть воли як ясла повні';
let arr = stringToArray(str);
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві
// на стрінгові.
console.log(' є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об\'єкти в' +
    ' масиві на стрінгові.');
let arr1 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let arr2 = arr1.map((num) => String(num));
console.log(arr2);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або
// навпаки в залежності від значення аргументу direction.
console.log('створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,' +
    ' або навпаки в залежності від значення аргументу direction.');

let nums = [11, 21, 3];

function sortNums(arr, direction) {
    if (direction === 'ascending') {
        arr.sort((a, b) => a - b)
    } else {
        arr.sort((a, b) => b - a)
    }
    return arr
}

console.log(sortNums(nums, 'ascending')) // [3,11,21]
console.log(sortNums(nums, 'descending')) // [21,11,3]

console.log('є масив');
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log('відсортувати його за спаданням за monthDuration');
coursesAndDurationArray.sort((a, b) => a['monthDuration'] - b['monthDuration']);
coursesAndDurationArray.forEach(value => console.log(value));

console.log('відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців');
let moreThanFive = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(moreThanFive);

// описати колоду карт
function createDeckOfCards() {
    let value = ['ace', 'jack', 'queen', 'king', 'joker', '6', '7', '8', '9', '10'];
    let colorSuit = [
        {
            cardSuit: 'diamond',
            color: 'red'
        },
        {
            cardSuit: 'heart',
            color: 'red'
        },
        {
            cardSuit: 'spade',
            color: 'black'
        },
        {
            cardSuit: 'clubs',
            color: 'black'
        }
    ];
    let jokers = [{cardSuit: '', value: 'joker', color: 'black'}, {cardSuit: '', value: 'joker', color: 'red'}];
    let deck = [];
    for (let i of value) {
        if (i === 'joker') {
            deck = deck.concat(jokers);
        } else
            for (let j of colorSuit) {
                {
                    deck.push({cardSuit: j.cardSuit, value: i, color: j.color})
                }
            }
    }
    return deck
}

console.log('колода');
deck = createDeckOfCards();
console.log(deck);

// - знайти піковий туз
console.log('піковий туз');
console.log(deck.filter(card => card.value === 'ace' && card.cardSuit === 'spade'));

// - всі шістки
console.log('всі шістки');
console.log(deck.filter(card => card.value === '6'));

// - всі червоні карти
console.log('всі червоні карти');
console.log(deck.filter(card => card.color === 'red'));

// - всі буби
console.log('всі буби');
console.log(deck.filter(card => card.cardSuit === 'diamond'));

// - всі трефи від 9 та більше
console.log('всі трефи від 9 та більше');
console.log(deck.filter(card => card.cardSuit === 'clubs' && (card.value >= 9 || !(!!Number(card.value)))));

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
console.log('карти по "мастях" в об\'єкт');
let pack = deck.reduce((cards, card) => {
    if (card.cardSuit === 'spade') {
        cards.spades.push(card)
    } else if (card.cardSuit === 'clubs') {
        cards.clubs.push(card)
    } else if (card.cardSuit === 'diamond') {
        cards.diamonds.push(card)
    } else if (card.cardSuit === 'heart') {
        cards.hearts.push(card)
    }
    return cards;
}, {spades: [], diamonds: [], hearts: [], clubs: []});

console.log(pack);

