let x = +prompt('Enter number');
if (x === 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

let time = +prompt('Enter minutes');
if (time < 0 || time > 59) {
    console.log('за межами');
} else if (time <= 15) {
    console.log('в першу');
} else if (time <= 30) {
    console.log('в другу');
} else if (time <= 45) {
    console.log('в третю');
} else if (time <= 59) {
    console.log('в четверту');
}

let day = +prompt('Enter day');
if (day >= 1 && day <= 10) {
    console.log('в першу');
} else if (day > 10 && day <= 20) {
    console.log('в другу');
} else if (day > 20 && day <= 31) {
    console.log('в третю');
} else console.log('за межами');

let dayNumber = +prompt('Enter day number');
switch (dayNumber) {
    case 0:
        console.log('arrays start from zero, and days of the week start from one');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('there are only 7 days in a week');
}

let numberOne = 90;
let numberTwo = 150;
if (numberOne === numberTwo) {
    console.log('equal')
} else if (numberOne > numberTwo) {
    console.log('max = ' + numberOne)
} else console.log('max = ' + numberTwo)

let y = 0;
y = y || 'default';
console.log(y);