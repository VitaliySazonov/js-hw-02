// Задание 1
// Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].
// Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

const logItens = (array) => {
  let i = 0;
  for(let arrItem of array) console.log(i+=1, arrItem)
}

logItens(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'])
logItens([5, 10, 15, 20, 25, 30, 35, 40, 45, 50])