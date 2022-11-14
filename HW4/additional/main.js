// // --створити масив з:
// // - з 5 числових значень
// // - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// // - та вивести його в консоль
//
// let arrNumber = [1, 2, 3, 4, 5];
// let arrString = ['word1', 'word2', 'word3', 'word4', 'word5'];
// let arrVarious = [1, 'word', true, 7, false];
//
// for (let num of arrNumber){
//     console.log(num)
// }
//
// for (let str of arrString){
//     console.log(str)
// }
//
// for (let v of arrVarious){
//     console.log(v)
// }
//
// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arrNew = [];
// arrNew[0] = 1;
// arrNew[1] = 'word';
// arrNew[2] = true;
// arrNew[3] = 8;
// arrNew[4] = 'word2';
// arrNew[5] = 10;
//
// for (let i of arrNew){
//     console.log(i)
// }
//
// // - є масив [2,17,13,6,22,31,45,66,100,-18] :

// let arrN = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// // 1. перебрати його циклом while
// while (i<arrN.length){
//     console.log(arrN[i]);
//     i++
// }
// // 2. перебрати його циклом for
// for (let i of arrN){
//     console.log(i)
// }
// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let k = 0;
// while (k<arrN.length){
//     if (k%2 != 0) {
//     console.log(arrN[k]);}
//     k++
// }
// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < arrN.length; i++) {
//     if ( i%2 != 0) {
//         console.log(arrN[i]);}
// }

// // 5. перебрати циклом while та вивести  числа тільки парні  значення
// let a = 0;
// while (a < arrN.length) {
//     if (arrN[a] % 2 === 0) {
//         console.log(arrN[a]);
//     }
//     a++
// }


// // 6. перебрати циклом for та вивести  числа тільки парні  значення
//  for (let b of arrN){
//      if (b%2 === 0) {
//     console.log(b)}
// }

// // 7. замінити кожне число кратне 3 на слово "okten"
// for (let c = 0; c< arrN.length; c++) {
//     if ( arrN[c]%3 === 0) {
//         arrN[c] = 'okten';}
// }
// console.log(arrN)
// // 8. вивести масив в зворотньому порядку.
// for (let w = arrN.length - 1; w >= 0; w--) {
//     console.log(arrN[w]);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//!!!!!!!!!!!!!!


console.log('Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.');
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let element of arr1){
    console.log(element)
}

console.log('Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.');
let arr2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'q'];
for (let element of arr2){
    console.log(element)
}
console.log('Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.');
let arr3 = ['a', true, 4, [5,9,3], 'k', 7.5, false, 0, 'l', 'q'];
for (let element of arr3){
    console.log(element)
}

console.log('Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести' +
    ' тільки булеві елементи');
let arr4 = ['a', true, 4, 'u', 'k', 7.5, false, 0, 'l', 'q'];
for (let element of arr4){
    if (typeof(element)=== "boolean"){
        console.log(element)}
}
console.log('Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести' +
    ' тільки числові елементи');
for (let element of arr4){
    if (typeof(element)=== "number"){
        console.log(element)}
}
console.log('Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести' +
    ' тільки рядкові елементи');
for (let element of arr4){
    if (typeof(element)=== "string"){
        console.log(element)}
}