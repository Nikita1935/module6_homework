/*
Модуль 6. Задание 3

Написать функцию, которая принимает число как аргумент и возвращает функцию, 
которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
Выведите в консоль результат.

*/

function func (num3) {
return function (num4) {
    return num3 + num4;
}
}
console.log(func(3)(4))