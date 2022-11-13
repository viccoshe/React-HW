console.log('#1'); /////
var arr1 = [1, 2, 3, 4, 5];
arr1.forEach(function (elem) {
    console.log(elem);
});
console.log('#2'); /////
var arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
arr2.forEach(function (elem) {
    (elem < 0 && elem >= -10 && elem <= -3) ? console.log(elem) : null;
    return;
});
console.log('#3'); /////
var arr3;
var result = 23;
for (var i_1 = 23; i_1 <= 57; i_1++) {
    console.log(i_1);
    result += i_1;
}
;
console.log('result: ', result);
console.log('#3: while');
var i = 23;
while (i <= 57) {
    console.log(i);
    i++;
}
;
console.log('#4'); ///////
var arr4 = ['10', '20', '30', '50', '235', '3000'];
arr4.forEach(function (elem) {
    +elem.slice(0, 1) === 1 ||
        +elem.slice(0, 1) === 2 ||
        +elem.slice(0, 1) === 5 ? console.log(+elem) : null;
});
console.log('#5'); ///////
var arr5 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
for (var i_2 = 0; i_2 < arr5.length; i_2++) {
    (arr5.indexOf('сб') === i_2 || arr5.indexOf('вс') === i_2) ?
        document.write("<b>" + arr5[i_2] + " </b>") :
        document.write(arr5[i_2] + ' ');
}
;
console.log('#6'); ///////
var arr6 = ['пн', 2, 'ср', 345, 'пт', -8, 'вс'];
arr6.push('weekend');
console.log(arr6[arr6.length - 1]);
console.log('#7'); ///////
var arr7 = [];
var num;
while (num = prompt('Введите число')) {
    if (num && num !== '')
        arr7.push(+num);
}
document.write('Ваши числа: ' + arr7 + " </br>");
document.write('Отсортированные числа: ' + arr7.sort());
console.log('#8'); ///////
var arr8 = [12, false, 'Текст', 4, 2, -5, 0];
var reversedArr8 = [];
var j = 0;
while (j < arr8.length) {
    reversedArr8 = arr8.reverse();
    j++;
}
;
console.log('reversed: ' + reversedArr8);
console.log('#9'); ///////
var arr9 = [1, 8, 0, 13, 76, 8, 7, 0, 22, 0, 2, 3, 2];
var sum = 0;
if (arr9.indexOf(0) === -1 || arr9.lastIndexOf(0) === -1) {
    console.log(0);
}
else {
    for (var i_3 = arr9.indexOf(0); i_3 < arr9.lastIndexOf(0); i_3++) {
        sum += arr9[i_3];
    }
}
console.log('sum: ' + sum);
console.log('#10'); ///////
var height = 5;
var arr = [];
var k = 0;
while (k <= height * 2) {
    arr.push(' ');
    k++;
}
for (var i_4 = 0; i_4 <= height; i_4++) {
    arr[height] = '^';
    arr[height - i_4] = '^';
    arr[height + i_4] = '^';
    console.log(arr);
}
