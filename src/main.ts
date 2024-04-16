import './style.scss'
// Задание 1 Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
// let name = prompt('Введите свое имя')
// console.log('Привет,', name,'!')

// Задание 2 Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат.
//            Текущий год укажите в коде как константу.
const thisYear = 2024
let YearOfBorn = 1981
let yearsOld = thisYear-YearOfBorn
console.log('Вам', yearsOld, 'лет (года).')

// Задание 3 Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
let sideOfSquare = 6
console.log('Периметр квадрата', sideOfSquare*4)

// Задание 4 Запросите у пользователя радиус окружности и выведите площадь такой окружности.
const pi = 3.14
let r = 8
console.log(pi*r*r)

// Задание 5 Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. 
//            Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
let distance = 80
let time = 2
console.log(distance/time)

// Прпактика 3.1 Вывести # столько раз, сколько указал пользователь.
let count = 8
while (count > 0){
  count--
  console.log('#,')
}

// Практика 3.2 Пользователь ввел число, а на экран вывелись все числа от введенного до 0
let num = 9
while (num > 0){
  console.log(num)
  num--
}

// Практика 3.3 Запросить число и степень. Возвести число в указанную степень и вывести результат.
let number = 2
let degree = 4
let result = 1
while (degree >= 2){
  result = result*number
  degree--
}
console.log(result)

// Практика 3.4 Запросить 2 числа и найти все общие делители.
let num1 = 10
let num2 = 5
let min = 0
let dividers = ' '
num1>num2?min=num2:min=num1
while(min > 0){
  if (num1 % 2 == 1 && num2 % 2 == 1){
    dividers += min + '_'
  }
  min--

}


// Практика 3.5 Посчитать факториал введенного пользователем числа.
let n = 5
result = 1
while (n>0){
  result*=n
  n--
}
console.log(result)

// Практика 4.1 Написать функцию, которая принимает 2 числа и возвращает меньшее из них.
function getMin(a:number, b:number){  
  return (a < b ? a : b)
}
console.log (getMin(5,8))

// Практика 4.2 Написать функцию, которая возводит переданное число в указанную степень.
function getDegree(a:number, b:number){  
  let result = 1
  for (let i = 0; i < b; i++){
    result*=a
  }
  return result
}
console.log (getDegree (2,4))

// Практика 4.3 Написать функцию, которая принимает 2 числа и знак (+ - * /), считает пример и возвращает результат.
function getResult (a:number, b:number, c:string){
  let result
  switch (c) {
    case '+':
      result=a+b      
      break;

    case '-':
      result=a-b      
      break;

    case '*':
      result=a*b      
      break;

    case '/':
      result=a/b      
      break;
  
    
  }
  return result
}

console.log (getResult(4,2,'/'))

// Практика 4.4 Написать функцию, которая проверяет, является ли переданное ей число простым.
function checkNumber (a:number){
  let result = ' '
  if ((a % 1 && a % a) == 0){
    result = 'Вы ввели сложное число'
  }
  else {
    result = 'Вы ввели простое число'
  }
  return result
}
console.log (checkNumber (6))

// Практика 5.1 Написать функцию, которая вычисляет факториал заданного числа.
function getFactorial(n:number):number {
  if (n==1) {
    return n
  } else {
    return n * getFactorial(n-1)
  }
}
console.log(getFactorial(6))

// Практика 5.2 Написать функцию, которая выводит все числа из заданного пользователем диапазона в прямом порядке. И еще одну функцию – для вывода в обратном порядке.
function parsNumberForvard(a:number, b:number):void{
  let min = a
  let max = b
  min < max ? (a = min, b = max) : (a = max, b = min)
  if(a==b){
    return
  } else {    
    parsNumberForvard(a + 1, b)    
    console.log(a)
  }
}
parsNumberForvard(1,8)


// Практика 5.3 Написать функцию, которая выводит переданное ей число задом наперед. Например: число 1234 вывести как 4321
function getReversNumber(n:number):number {
  if (n<10) {
    return n
  } else {
    return +(n % 10 + '' + getReversNumber(Math.floor(n/10)))
  }
}
console.log(getReversNumber(1234))

// Практика 5.4 Написать функцию, которая считает сумму цифр числа. Например: число 1357, сумма 1 + 3 + 5 + 7 = 16
function getSomeOfDigits(n:number):number {
  if (n < 10) {
    return n
  } else {
    return n % 10 + getSomeOfDigits(Math.floor(n/10))
  }
}
console.log (getSomeOfDigits(1357))

// Практика 5.5 Написать функцию, которая принимает число и выводит соответствующее количество вложенных пар круглых скобок. Например: число 4 – (((()))).
function getBracetsPairsByNum(n:number):string {
  if (!n) {
    return ''
  } else {
    return '(' + getBracetsPairsByNum(n-1) + ')'
  }
}
console.log(getBracetsPairsByNum(4))

// ПРАВКТИКА ОБЪЕКТЫ

// Создать объект, описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек),
type Dot = {
  x: number,
  y: number,
}
type Rectangle = {
  leftTop: Dot,
  rightBottom: Dot,
}
const rectangle: Rectangle = {
  leftTop: {
    x: 40,
    y: 10,
  } as Dot,
  rightBottom: {
    x: 10,
    y: 60,
  } as Dot,
}

//  и написать следующие функции для работы с таким объектом.
// 1. Функция принимает объект-прямоугольник и выводит информацию о нем (где какая точка расположена):
function informAboutRectangle (rect: Rectangle){
  console.log('Левая верхняя точка', 'x', rect.leftTop.x, 'y', rect.leftTop.y)
  console.log('Правая верхняя точка', 'x', rect.leftTop.x, 'y', rect.rightBottom.y)
  console.log('Левая нижняя точка', 'x', rect.rightBottom.x, 'y', rect.rightBottom.x)
  console.log('Правая нижняя точка', 'x', rect.rightBottom.x, 'y', rect.rightBottom.y)
}
informAboutRectangle(rectangle)

// 2. Функция принимает объект-прямоугольник и возвращает его ширину:
function wightOfRectangle (rect: Rectangle){
  return rect.rightBottom.y - rect.leftTop.x
}
console.log('Ширина прямоугольника', wightOfRectangle(rectangle))


// 3. Функция принимает объект-прямоугольник и возвращает его высоту:
function heightOfRectangle (rect: Rectangle){  
  return rect.leftTop.x - rect.leftTop.y
}
console.log('Высота прямоугольника', heightOfRectangle(rectangle))


// 4. Функция принимает объект-прямоугольник и возвращает его площадь:
function areaOfRectangle (rect: Rectangle){  
  return (rect.rightBottom.y - rect.leftTop.x) * (rect.leftTop.x - rect.leftTop.y)
}
console.log('Площадь прямоугольника', areaOfRectangle(rectangle))


// 5. Функция принимает объект-прямоугольник и возвращает его периметр:
function perimeterOfRectangle (rect: Rectangle){
  return (((rect.rightBottom.y - rect.leftTop.x)*2)+((rect.leftTop.x - rect.leftTop.y)*2))
}
console.log('Периметр прямоугольника', perimeterOfRectangle (rectangle))

// 6. Функция изменения ширины прямоугольника. Она принимает объект-прямоугольник и на сколько
// единиц изменить ширину:
function changeWidthOfRectangle (rect: Rectangle, change: number): void{
  rectangle.rightBottom.y += change
  console.log('Левая верхняя точка', 'x', rect.leftTop.x, 'y', rect.leftTop.y)
  console.log('Правая верхняя точка', 'x', rect.leftTop.x, 'y', rect.rightBottom.y)
  console.log('Левая нижняя точка', 'x', rect.rightBottom.x, 'y', rect.rightBottom.x)
  console.log('Правая нижняя точка', 'x', rect.rightBottom.x, 'y', rect.rightBottom.y)
}
changeWidthOfRectangle(rectangle, -10)


// 7. Функция изменения высоты прямоугольника. Она принимает объект-прямоугольник и на сколько
// единиц изменить высоту:
function changeHeightOfRectangle (rect: Rectangle, change: number): void{
  rectangle.leftTop.x += change
  console.log('Левая верхняя точка', 'x', rect.leftTop.x, 'y', rect.leftTop.y)
  console.log('Правая верхняя точка', 'x', rect.leftTop.x, 'y', rect.rightBottom.y)
  console.log('Левая нижняя точка', 'x', rect.rightBottom.x, 'y', rect.rightBottom.x)
  console.log('Правая нижняя точка', 'x', rect.rightBottom.x, 'y', rect.rightBottom.y)
}
changeHeightOfRectangle(rectangle, -10)

// 8. Функция изменения ширины и высоты прямоугольника. Она принимает объект-прямоугольник и два
// значения для изменения ширины и высоты:
function changeWidthAndHeightOfRectangle (rect: Rectangle, changeWidth: number, changeHeight: number): void{
  rectangle.rightBottom.y += changeWidth  
  rectangle.leftTop.x += changeHeight
  console.log('Левая верхняя точка', 'x', rect.leftTop.x, 'y', rect.leftTop.y)
  console.log('Правая верхняя точка', 'x', rect.leftTop.x, 'y', rect.rightBottom.y)
  console.log('Левая нижняя точка', 'x', rect.rightBottom.x, 'y', rect.rightBottom.x)
  console.log('Правая нижняя точка', 'x', rect.rightBottom.x, 'y', rect.rightBottom.y)
}
changeWidthAndHeightOfRectangle(rectangle, 10, 10)

// 9. Функция смещения прямоугольника по оси X. Она принимает объект-прямоугольник и на сколько
// единиц его сдвинуть:
function shiftOfAxisX (rect: Rectangle, changeX: number): void{
  rectangle.leftTop.x += changeX
  rectangle.rightBottom.x += changeX  
  console.log('Левая верхняя точка', 'x', rect.leftTop.x, 'y', rect.leftTop.y)
  console.log('Правая верхняя точка', 'x', rect.leftTop.x, 'y', rect.rightBottom.y)
  console.log('Левая нижняя точка', 'x', rect.rightBottom.x, 'y', rect.rightBottom.x)
  console.log('Правая нижняя точка', 'x', rect.rightBottom.x, 'y', rect.rightBottom.y)
}
shiftOfAxisX(rectangle, -5)

// 10. Функция смещения прямоугольника по оси Y. Она принимает объект-прямоугольник и на сколько
// единиц его сдвинуть:
function shiftOfAxisY (rect: Rectangle, changeY: number): void{
  rectangle.leftTop.y += changeY
  rectangle.rightBottom.y += changeY  
  console.log('Левая верхняя точка', 'x', rect.leftTop.x, 'y', rect.leftTop.y)
  console.log('Правая верхняя точка', 'x', rect.leftTop.x, 'y', rect.rightBottom.y)
  console.log('Левая нижняя точка', 'x', rect.rightBottom.x, 'y', rect.rightBottom.x)
  console.log('Правая нижняя точка', 'x', rect.rightBottom.x, 'y', rect.rightBottom.y)
}
shiftOfAxisY(rectangle, -5)

// 11. Функция смещения прямоугольника и по оси X и по оси Y. Она принимает объект-прямоугольник
// и два значения сдвиг по оси X и сдвиг по оси Y:
function shiftOfAxisX_Y (rect: Rectangle, changeX: number, changeY: number): void{
  rectangle.leftTop.x += changeX
  rectangle.rightBottom.x += changeX  
  rectangle.leftTop.y += changeY
  rectangle.rightBottom.y += changeY
  console.log('Левая верхняя точка', 'x', rect.leftTop.x, 'y', rect.leftTop.y)
  console.log('Правая верхняя точка', 'x', rect.leftTop.x, 'y', rect.rightBottom.y)
  console.log('Левая нижняя точка', 'x', rect.rightBottom.x, 'y', rect.rightBottom.x)
  console.log('Правая нижняя точка', 'x', rect.rightBottom.x, 'y', rect.rightBottom.y)
}
shiftOfAxisX_Y(rectangle, 5, 5)

// 12. Функция для проверки, находится ли точка внутри прямоугольника. Она принимает
// объект-прямоугольник и координаты точки:
function checkOfPoint (rec: Rectangle, xPoint: number, yPoint: number): void{
  if(xPoint < rec.leftTop.x && xPoint > rec.rightBottom.x && 
      yPoint > rec.leftTop.y && yPoint < rec.rightBottom.y){
        console.log('Точка находится внутри прямоугольника')
      }
  else{
    console.log('Точка не находится внутри прямоугольника')
    }
}
checkOfPoint (rectangle, 30, 60)


// ДОМАШНЕЕ ЗАДАНИЕ ОБЪЕКТЫ

// Задание 1
// Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость),

// и следующие функции для работы с этим объектом.
// 1. Функция для вывода на экран информации об автомобиле.

// 2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

// Задание 2
// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби,

// и следующие функции для работы с этим объектом.
// 1. Функция сложения 2-х объектов-дробей.

// 2. Функция вычитания 2-х объектов-дробей.

// 3. Функция умножения 2-х объектов-дробей.

// 4. Функция деления 2-х объектов-дробей.

// 5. Функция сокращения объекта-дроби.

// Задание 3
// Создать объект, описывающий время (часы, минуты, секунды),

// и следующие функции для работы с этим объектом.
// 1. Функция вывода времени на экран.

// 2. Функция изменения времени на переданное количество секунд.

// 3. Функция изменения времени на переданное количество минут.

// 4. Функция изменения времени на переданное количество часов.

// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая.
// Например: если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».


// ДОМАШНЕЕ ЗАДАНИЕ МАССИВЫ


// Задание 2
// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за
// единицу товара.

// type product = {
//   name: string,
//   quantiti: number,
//   price: number,
// }

const check = [
  {name: 'хлеб', quantiti: 1, price: 35},
  {name: 'молоко', quantiti: 1, price: 125},
  {name: 'шоколад', quantiti: 2, price: 80},
  {name: 'кофе', quantiti: 1, price: 360},
]

// Написать следующие функции.
// 1 Распечатка чека на экран.

function printCheck (check: any) {
  for (let product of check) {
    console.log(product)
  }
  
}
printCheck (check)

// 2 Подсчет общей суммы покупки.

// function sumOfCheck()

// 3 Получение самой дорогой покупки в чеке.

// 4 Подсчет средней стоимости одного товара в чеке.

// const styles = [
//   {color: 'red'},
//   {'font-size':'20px'},
//   {'text-align':'center'},
// ]

// function renderText(styles:any[], text:string) {
// let styleText = ''
// for (let el of styles) {
//   for (let key in el) {
//     styleText += '${key}:${el[key]};'
//   }
// }

// const tagString = '<p style="${styleText}"'
// // document.body.insertAdjacentHTML('afterbegin')
// }
// renderText (styles, 'test1')
// console.log(renderText)









// 1.1.  Написать функцию возвращающюю массив целых чисел от 0 до 10

// 1.2.  Добавить в функцию опциональные параметры начального и конечного значения массива
//     (если конечный элемент массива не передан, то он больше нечального на 10) . Вызвать функцию несколько раз
// 1.3*. Написать функцию возвращающюю массив случайных целых чисел. Функция принимает 1 параметр, количество элементов в будущем массиве

function generateArray(start = 0, end = start+10) {
  const arr = []
  for (let i = 0; i < end-start; i++){
    arr[i] = start+i
  }
  return arr
}
console.log(generateArray())
console.log(generateArray(20))
console.log(generateArray(20))
console.log(generateArray(20, 50))


// 2.1. В файле html создать пустой div с произвольным id
// 2.2. Получить объект div'а в js при помощи метода document.getElementById(ваш id) as HTMLDivElement
const firstDiv = document.getElementById('first') as HTMLDivElement
// 2.3. Вывести в полученный div текст, "Привет, пользователь"
firstDiv.innerHTML = "Привет, пользователь"
// 2.4. Написать функцию, которая возвращает текст "Привет, пользователь" или "Привет, <имяПользователя>"
// в зависимости от переданных параметров и использовать её в задании 2.3.
function getText(text: string){
  return text
}
console.log(getText('Привет Олег!!!'))
firstDiv.innerHTML = getText('Привет Олег!!!')

// Есть массив объектов
type Employee = {
  name: string,
  department: string,
  salary: number
} 
const employees = [
  { name: 'Федотова Арина Глебовна', department: 'ads', salary: 2100 },
  { name: 'Голикова Мария Филипповна', department: 'prog', salary: 3500 },
  { name: 'Панин Александр Германович', department: 'ads', salary: 2100 },
  { name: 'Романов Эмиль Макарович', department: 'prog', salary: 3100 },
  { name: 'Смирнов Никита Александрович', department: 'prog', salary: 3800 },
  { name: 'Александрова Майя Вячеславовна', department: 'prog', salary: 4500 },
  { name: 'Крылов Богдан Максимович', department: 'disign', salary: 2100 },
  { name: 'Мухина Айша Константиновна', department: 'disign', salary: 2100 },
]

function showElements(arr:Employee[]) {
  console.log(arr)
  console.log(arr[0])
  console.log(arr[0].name)
  console.log(arr[0].department)
  console.log(arr[0].salary)
  for (let i=0;i<arr.length; i++) {
    console.log(arr[i].name)
  }
  for (let empl of arr) {
    console.log(empl.name)
  }
  const newArr = [4,45,6]
  return newArr
}
const вернулаФункция = showElements(employees)
console.log(вернулаФункция)



// Все функции вызывать несколько раз с разными параметрами
// 3.1. Создать функцию, принимающую массив работников, и возвращающую массив уникальных отделов (department)
// deps.includes
// [ads, prog, disign]

// 3.2. Написать функцию, принимающую массив работников и ключ объекта, по которому сделать сортировку массива
// Учесть, что строковые параметры сортируются при помощи метода localeCompare, а числовые,- вычитанием
// function sortEmpl(arr, key: 'name' | 'department' |'salary') {
// }
// 3.3. Написать функцию, аналогичную описанной в задании 3.2., но сортирующую в обратном порядке
// 3.4. Написать функцию, принимающую массив работников и имя, и возвращающую объект сотрудника или undefined
// 3.5. Написать функцию, принимающую массив работников и название отдела, и возвращающую новый массив, содержащий только сотрудников переданного отдела
// 3.6. Написать функцию, принимающую массив работников и возвращающую сумму зарплат. Вызвать функцию по каждому отделу и по общему массиву

// 3.7. В HTML создать div для кнопок, задать ему id и получить объект div'a в js, аналогично заданию 2.2.
// 3.8. Так же как в 3.7 создать ul (as HTMLUListElement) для вывода списка и div для вывода суммы зарплат

// 3.9. Используя массив, полученный в 3.1. Вывести кнопки с названиями отделов + кнопку "Все отделы"
//      использовать data-атрибут (data-dep), в который поместить название отдела. Для кнопки "Все отделы" data-dep="all"
// 3.10. Используя div, полученный в задании 3.7
// div37.addEventListener('click', function (e) {
//   const target = e.target as HTMLElement
//   if (target.tagName == 'BUTTON' && target.dataset.dep) {
//      в зависимости от значения dep выводить в список (ul 3.8) тех сотрудников, которые работают в данном отделе, либо всех, если target.dataset.dep=='all'. Используем логическое ветвление и уже написанные функции
//      в div (3.8) выводить сумму зарплат
//   }
// })

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
function ucFirst(str:string){
  return str[0].toUpperCase()+str.slice(1)
}

console.log (ucFirst('олег'))

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:

function checkSpam(str: string){
  const theSpam = ['viagra', 'xxx']

  for (let sp of theSpam){
    if (str.includes(sp)) return true
  }
  
  return false
}

console.log(checkSpam('xxx'))

                                              // ПРАКТИКА
                                              
// 1 Написать функцию, которая принимает 2 строки и сравнивает их длину. Функция возвращает 1, если в первой
// строке больше символов, чем во второй; -1 – если во второй больше символов, чем в первой; или 0 – если строки
// одинаковой длины.

function compareLengths (first: string, second: string){  
  if (first.length>second.length) return 1
  if (first.length<second.length) return -1
  if (first.length==second.length) return 0
}
console.log(compareLengths('qwerh', 'gtyywr'))

// 2 Написать функцию, которая переводит в верхний регистр первый символ переданной строки.

function firstHi (str:string){
  console.log(str[0].toUpperCase()+str.slice(1))
}
firstHi('привет')

// 3 Написать функцию, которая считает количество гласных букв в переданной строке.

function vowels (str:string){
  let vowel = ['а','у','о','и','э','ы','я','ю','е','ё']
  let count = 0
  for (let one of str){
    if (vowel.includes(one)) count++
  }
  console.log(count)
}
vowels('параллель')

// 4 Написать функцию для проверки спама в переданной строке. Функция возвращает true, если строка содержит
// спам. Спамом считать следующие слова: 100% бесплатно, увеличение продаж, только сегодня, не удаляйте, ххх.
// Функция должна быть нечувствительна к регистру.

function spam (str: string){
  str = str.toLowerCase()
  const aSpam = ['100% бесплатно', 'увеличение продаж', 'только сегодня', 'не удаляйте', 'ххх']
  for (let one of aSpam){
    if (str.includes(one)) return true
  }
  return false
}
console.log(spam('привет Только сегодня'))

// 5 Написать функцию сокращения строки. Функция принимает строку и ее максимальную длину. Если длина строки
// больше, чем максимальная, то необходимо отбросить лишние символы, добавив вместо них троеточие.
// Например: truncate(“Hello, world!”, 8) должна вернуть “Hello...”.

// 6 Написать функцию, которая проверяет, является ли переданная строка палиндромом.

// 7 Написать функцию, которая считает количество слов в предложении.

// 8 Написать функцию, которая возвращает самое длинное слово из предложения.

// 9 Написать функцию, которая считает среднюю длину слова в предложении.

// 10 Написать функцию, которая принимает строку и символ и выводит индексы, по которым находится этот символ в
// строке. Также вывести, сколько всего раз встречается этот символ в строке.

                                              // ДОМАШКА


// 1 Написать функцию, которая принимает строку и выводит статистику о ней: количество букв,
// количество цифр и количество других знаков.

// 2 Написать функцию, которая принимает двузначное число и возвращает его в текстовом виде.
// Например: 35 – тридцать пять, 89 – восемьдесят девять, 12 – двенадцать.

// 3 Написать функцию, которая заменяет в полученной строке большие буквы на маленькие, маленькие – на большие,
// а цифры – на знак нижнего подчеркивания.

// 4 Написать функцию, которая преобразует названия css- стилей с дефисом в название в СamelСase стиле: font-size
// в fontSize, background-color в backgroundColor, text- align в textAlign.

// 5 Написать функцию, которая принимает словосочетание и превращает его в аббревиатуру. Например:
// cascading style sheets в CSS, объектно- ориентированное программирование в ООП.

// 6 Написать функцию, которая принимает любое количество строк, объединяет их в одну длинную строку и возвращает ее.

// 7 Написать функцию – калькулятор. Функция принимает строку с примером, определяет, какое действие необходимо
// выполнить (+ - * /), переводит операнды в числа, решает пример и возвращает результат.

// 8 Написать функцию, которая получает url и выводит подробную информацию о нем. Например:
// url “https://itstep.org/ua/about”, информация “протокол: https, домен: itstep.org, путь: /ua/about”.

// 9 Написать функцию, которая принимает строку и разделитель и возвращает массив подстрок, разбитых с помощью
// указанного разделителя. Например: строка “10/08/2020”, разделитель “/”, результат: “10”, “08”, “2020”.
// Выполняя задание, не используйте функцию split().

// 10 Написать функцию вывода текста по заданному шаблону. Функция принимает первым параметром шаблон, в тексте
// которого может использоваться %, после символа % указывается индекс входного параметра. При выводе вместо
// %индекс необходимо вывести значение соответствующего входного параметра. Например: print(“Today is %1 %2.%3.%4”,
// “Monday”, 10, 8, 2020) должна вывести “Today is Monday 10.8.2020”.