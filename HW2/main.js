let arr = [1, 'word', 4.5, true, 2, [1, 2, 3], false, 3, 4, 5];

console.log(`${arr[0]}\n${arr[1]}\n${arr[2]}\n${arr[3]}\n${arr[4]}\n${arr[5]}\n${arr[6]}\n${arr[7]}\n${arr[8]}\n${arr[9]}`);

let bookOne = {
    title: 'Harry Potter and the Philosopher\'s Stone',
    pageCount: 352,
    genre: 'Fantasy'
}

let bookTwo = {
    title: 'Harry Potter and the Chamber of Secrets',
    pageCount: 384,
    genre: 'Fantasy'
}

let bookThree = {
    title: 'Harry Potter and the Prisoner of Azkaban',
    pageCount: 480,
    genre: 'Fantasy'
}

let bookFour = {
    title: 'The Eureka Factor',
    pageCount: 480,
    genre: 'Fantasy',
    authors: [{name: 'John Kunios', age: 45}, {name: 'Mark Beeman', age: 48}]
}

let bookFive = {
    title: 'Literature! A journey through the world of books',
    pageCount: 192,
    genre: 'Modern prose',
    authors: [{name: 'Katarina Marenholtz', age: 30}, {name: 'Don Parisi', age: 50}]
}

let bookSix = {
    title: 'Six Problems for Don Isidro Parodi Paperback',
    pageCount: 224,
    genre: 'Detective',
    authors: [{name: 'Jorge Luis Borges', age: 55}, {name: 'Adolfo Bioy-Casares', age: 31}]
}

let users = [
    {name: 'Name1', username: 'User1', password: 'Y5d4d'},
    {name: 'Name2', username: 'User2', password: 'gf6df'},
    {name: 'Name3', username: 'User3', password: 'u62y4'},
    {name: 'Name4', username: 'User4', password: 'rfgg5'},
    {name: 'Name5', username: 'User5', password: 'dgd3g'},
    {name: 'Name6', username: 'User6', password: 'wrw9r'},
    {name: 'Name7', username: 'User7', password: 'sfer8'},
    {name: 'Name8', username: 'User8', password: 'ddddg'},
    {name: 'Name9', username: 'User9', password: 'wrf3f'},
    {name: 'Name10',username: 'User10', password: 'wtt5g'}
];

console.log('password ' + users[0].username + ' - ' + users[0].password);
console.log('password ' + users[1].username + ' - ' + users[1].password);
console.log('password ' + users[2].username + ' - ' + users[2].password);
console.log('password ' + users[3].username + ' - ' + users[3].password);
console.log('password ' + users[4].username + ' - ' + users[4].password);
console.log('password ' + users[5].username + ' - ' + users[5].password);
console.log('password ' + users[6].username + ' - ' + users[6].password);
console.log('password ' + users[8].username + ' - ' + users[8].password);
console.log('password ' + users[9].username + ' - ' + users[9].password);