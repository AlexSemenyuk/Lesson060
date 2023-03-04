'use strict';
// let body = document.getElementsByTagName("body")[0];


// Задание 1.
// Написать функцию, которая принимает часы, минуты и
// секунды и возвращает это время в секундах.

// Исходные данные
// 1. Задаем промежуток времени, результат - кол-во секунд в промежутке
// 1.1 Строку в формате времени 00:00:00 (часы:мин:сек)
// let data1 = '2:1:30';

// 1.2 Массив - только секунды  [sec]
// let data1 = [3];

// 1.3 Массив - только минуты и секунды [min, sec]
// let data1 = [2, 3];

// 1.4 Массив - часы, минуты и секунды [hours, min, sec]
// let data1 = [2, 1, 30];

// 2. Задаем дату (дата + время) - кол-во секунд от 01.01.1970г. до даты
// 2.1 Строку в формате 00.00.0000 00:00:00 (месяц.дата.год часы:мин:сек)
// let data1 = '02.01.1970 03:00:30';

// 2. Строку в формате 00.00.0000 (месяц.дата.год время при этом составит 00:00:00)
let data1 = '01.02.1970';

let div1 = document.createElement("div");
div1.className = "rezult";
let h31 = document.createElement("h3");
h31.className = "initial-data";
let value11 = document.createTextNode("initial-data - " + data1);
h31.appendChild(value11);
div1.append(h31);


let p1 = document.createElement("p");
p1.className = "text-rezult";
let value12 = document.createTextNode("rezult: " + changeTimeToSec(data1) + " sec");
p1.appendChild(value12);
div1.append(p1);

const id1 = first;
id1.append(div1);

function changeTimeToSec(data1) {
    'use strict';
    let k = 60;
    let k1 = 1000;
    let arr = [];
    const template = /(\s*\d\s*){1,2}:(\s*\d\s*){1,2}:(\s*\d\s*){1,2}/;
    const template1 = /(\s*\d\s*){1,2}\.(\s*\d\s*){1,2}\.(\d){1,4}(\s*\d\s*){1,2}:(\s*\d\s*){1,2}:(\s*\d\s*){1,2}/;
    const template2 = /(\s*\d\s*){1,2}\.(\s*\d\s*){1,2}\.(\d){1,4}/;
    let sec = 0;
    // Determine original format
    if (typeof data1 === 'string') {
        if (testTemplate(template1, data1)) {
            sec = Date.parse(data1) / k1;
        } else if (testTemplate(template2, data1)) {
            // data1 += " 03:00:00";
            data1 += " 00:00:00";
            sec = Date.parse(data1) / k1;
        } else
            if (template.test(data1)) {
            arr = data1.split(':');
            sec = +arr[0] * k * k + +arr[1] * k + +arr[2];
        } else {
            sec = 'Wrong original format';
        }
    } else if (Array.isArray(data1)) {
        if (data1.length === 1) {
            sec = data1[0];
        } else if (data1.length === 2) {
            sec = data1[0] * k + data1[1];
        } else if (data1.length === 3) {
            sec = data1[0] * k * k + data1[1] * k + data1[2];
        } else {
            sec = 'Wrong original format';
        }
    }
    return sec + '';
}


function testTemplate(template, str) {
    if (template.test(str)) {
        return true;
    } else {
        return false;
    }
}

// Задание 2.
// Написать функцию, которая принимает количество секунд,
// переводит их в часы, минуты и секунды и возвращает в
// виде строки «чч:мм:сс».


// let data2 = "7290";
let data2 = 7290;
// let data2 = 90;

let div2 = document.createElement("div");
div2.className = "rezult";
let h32 = document.createElement("h3");
h32.className = "initial-data";
let value21 = document.createTextNode("initial-data - " + data2);
h32.appendChild(value21);
div2.append(h32);

let p2 = document.createElement("p");
p2.className = "text-rezult";
let value22 = document.createTextNode("rezult: " + changeSecToTime(data2));
p2.appendChild(value22);
div2.append(p2);

const id2 = second;
id2.append(div2);


function changeSecToTime(data2) {
    'use strict';
    let hours = 0;
    let min = 0;
    let sec1 = 0;
    let k = 60;
    if (typeof data2 === 'string') {
        data2 = parseInt(data2);
    }
    hours = Math.floor(data2 / k / k);
    console.log("hour = ", hours);
    min = Math.floor((data2 - hours * k * k) / k);
    console.log("min = ", min);
    sec1 = data2 - hours * k * k - min * k;
    console.log("sec1 = ", sec1);
    return hours + ":" + min + ":" + sec1;
}


// Задание 3.
// Написать функцию, которая считает разницу между датами.
// Функция принимает 6 параметров, которые описывают 2
// даты, и возвращает результат в виде строки «чч:мм:сс». При
// выполнении задания используйте функции из предыдущих 2-х заданий:
// сначала обе даты переведите в секунды, узнайте разницу в секундах

// Исходные данные

// 2. Задаем 2 даты (2 даты + время) - кол-во времени в формате 00:00:00
// 2.1 Строку в формате 00.00.0000 00:00:00 (год.месяц.год часы:мин:сек)
// let data3 = '01.01.1970 03:00:30';
// let data4 = '01.01.1970 05:00:40';

// 2. Строку в формате 00.00.0000 (год.месяц.год время при этом составит 00:00:00)
let data3 = '01.01.1970';
let data4 = '01.02.1970';


let div3 = document.createElement("div");
div3.className = "rezult";
let h33 = document.createElement("h3");
h33.className = "initial-data";
let value31 = document.createTextNode("initial-data: " + data3 + " and " + data4);
h33.appendChild(value31);
div3.append(h33);

let p3 = document.createElement("p");
p3.className = "text-rezult";
let value32 = document.createTextNode("rezult: " + timeBetweenTwoDates(data3, data4));
p3.appendChild(value32);
div3.append(p3);

const id3 = third;
id3.append(div3);


function timeBetweenTwoDates(date3, date4) {
    'use strict';
    let sec2 = 0;
    // document.write(`<p> ${changeTimeToSec(date4)} and ${changeTimeToSec(date3)}</p>`);
    sec2 = changeTimeToSec(date4) - changeTimeToSec(date3);
    // document.write(`<p> ${sec2} </p>`);
    return changeSecToTime(sec2);

}