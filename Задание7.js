﻿let arr = [-7, 13, 0, 2, 10, 11, 25, 8, -10, "asdasda", "bbbbe"];
let str0 = "Количество четных элементов массива";
let str1 = "Количество нечетных элементов массива";
let str2 = "Первый элемент массива";
let arrNew = arr.filter(Number.isFinite);
result1 = arrNew.filter(elem => elem % 2 === 0).length;
result2 = arrNew.filter(elem => elem % 2 !== 0).length;
console.log(str0 + ": "+ result1);
console.log(str1 + ": "+ result2);
console.log(str2 + ": " + arr[0]);