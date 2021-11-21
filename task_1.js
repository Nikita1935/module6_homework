// Модуль 6. Задание 1

/*

Дан массив. Нужно вывести в консоль количество чётных и 
нечётных элементов в массиве. Если в массиве есть нулевой элемент, 
то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
На этот раз оформите решение в виде функции, постарайтесь дать этой функции к
орректное название, вызовите функцию, проанализируйте синтаксис.

*/

function arrShow () {

    let arr = [30, 8, 16, null, undefined, 98, 'Frontend', 7, 0,];
    let zeros = 0;
    let nulls = 0;
    let strs = 0;
    let evenNumbers = 0;
    let oddNumbers = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'string') {
        strs++;
    } else if (arr[i] == null) {
        nulls++;
    } else if (arr[i] == 0) {
        zeros++;
    } else if (arr[i] % 2 === 0) {
        evenNumbers++;
    } else {
        oddNumbers++;
    }
}

alert(
    `В массиве \n Строк ${strs} \n null ${nulls} \n Нулей ${zeros} \n Четных ${evenNumbers} \n Нечетных ${oddNumbers}`
)
}
arrShow()