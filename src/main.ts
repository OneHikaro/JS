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
    result = 'Вы ввели простое число'
  }
  else {
    result = 'Вы ввели сложное число'
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
