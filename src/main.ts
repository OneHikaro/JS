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
// единицу товара. Написать следующие функции.

// 1 Распечатка чека на экран.

// 2 Подсчет общей суммы покупки.

// 3 Получение самой дорогой покупки в чеке.

// 4 Подсчет средней стоимости одного товара в чеке.

const styles = [
  {color: 'red'},
  {'font-size':'20px'},
  {'text-align':'center'},
]

function renderText(styles:any[], text:string) {
let styleText = ''
for (let el of styles) {
  for (let key in el) {
    styleText += '${key}:${el[key]};'
  }
}

const tagString = '<p style="${styleText}"'
// document.body.insertAdjacentHTML('afterbegin')
}
renderText (styles, 'test1')
console.log(renderText)