console.log('#1'); /////

let arr1: number[] = [1, 2, 3, 4, 5];
arr1.forEach(elem => {
    console.log(elem);
});

console.log('#2'); /////

let arr2: number[] = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
arr2.forEach(elem => {
    (elem < 0 && elem >= -10 && elem <= -3) ? console.log(elem) : null;
    return;
});

console.log('#3'); /////

let arr3: number[];
let result: number = 23;
for (let i = 23; i <= 57; i++){
    console.log(i);
    result += i;
};
console.log('result: ', result);

console.log('#3: while')
let i: number = 23;
while (i <= 57){ 
    console.log(i);
    i++;
};

console.log('#4');  ///////

let arr4: string[] = ['10', '20', '30', '50', '235', '3000']; 
arr4.forEach(elem => {
    +elem.slice(0, 1) === 1 ||
    +elem.slice(0, 1) === 2 || 
    +elem.slice(0, 1) === 5 ? console.log(+elem) : null;
});

console.log('#5');  ///////

let arr5: string[] = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
for(let i = 0; i < arr5.length; i++){
    (arr5.indexOf('сб') === i || arr5.indexOf('вс') === i) ? 
    document.write(`<b>` + arr5[i] + ` </b>`) : 
    document.write(arr5[i] + ' ');
};

console.log('#6');  ///////

let arr6: (string | number)[] = ['пн', 2, 'ср', 345, 'пт', -8, 'вс'];
arr6.push('weekend');
console.log(arr6[arr6.length - 1]);

console.log('#7');  ///////

let  arr7: number[] = [];
let num: string | null;
while(num = prompt('Введите число')){
    if(num && num !== '') arr7.push(+num);
}
document.write('Ваши числа: ' + arr7 +` </br>`);
document.write('Отсортированные числа: ' + arr7.sort());

console.log('#8');  ///////

let arr8: (number | boolean | string)[] = [12, false, 'Текст', 4, 2, -5, 0];
let reversedArr8: (number | boolean | string)[] = [];
let j: number = 0;
while(j < arr8.length){
    reversedArr8 = arr8.reverse();
    j++;
};
console.log('reversed: ' + reversedArr8)

console.log('#9');  ///////

let arr9: number[] = [1, 8, 0, 13, 76, 8, 7, 0, 22, 0, 2, 3, 2];
let sum: number = 0;
if(arr9.indexOf(0) === -1 || arr9.lastIndexOf(0) === -1){
    console.log(0);
}else{
    for(let i = arr9.indexOf(0); i < arr9.lastIndexOf(0); i++){
        sum += arr9[i];
    }
}
console.log('sum: ' + sum);

console.log('#10');  ///////
 
let height: number = 5;
let arr: string[] = [];
let k: number = 0;
while(k <= height * 2){
    arr.push(' ');
    k++;
}
for(let i = 0; i <= height; i++){
    arr[height] = '^';
    arr[height - i] = '^';
    arr[height + i] = '^';
    console.log(arr);
}




