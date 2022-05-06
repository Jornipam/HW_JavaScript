// Task 2*
// Откройте в VSCode task2.json файл. Скопируйте из него JSONку, вставьте в свой код (присвоив в переменную).
// Дан массив объектов. Каждый объект является идентификационной карточкой человека. Нам нужно хранить только уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу.
// Реализуйте считывание JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании

//const fs = require('fs')
// const users = JSON.parse(fs.readFileSync('./task2.json'))
const jsonFile = require('./task2.json') //считывание из файла task2.json

for (let j=0; j<jsonFile.length; j++){ //обьявлние цикла( счетчик j начиная с 0 играет роль индекса в массиве , условие j < массив.(число элементов этого массива), шаг j++)
    for (let i=0; i<jsonFile.length; i++){ 
        if(i==j){
          continue;
        }
        else if(jsonFile[i].name==jsonFile[j].name) // сравнение позиций i и j по ключу name 
        {
          jsonFile.splice(j,1); // начиная с позиции j удалить 1 элемент
        }
    }
}
console.log(jsonFile)

// let chekid = Array.from(new Set(users.map((item) => JSON.stringify(item)))).map((item) => JSON.parse(item));
// console.log(chekid);