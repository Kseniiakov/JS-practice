// 1. функция которая приветствует пользователя в зависимости от полученного имени

// let yourname = (prompt('как вас зовут?'))

// function sayHello (name) {
//   alert ('Здравствуйте, ' + name);
// }

// sayHello (yourname);

// 2. функция которая вернет правду если полученная параметр строка не пустая

// let str = (prompt('введите ваш текст'))

// function isNotEmpty (text) {
//   if (text === '') {
//     return false;
//   }
//   return true;
// }

// let result = isNotEmpty (str);

// alert (result);

// 3. функция которая принимает параметры цену продукта и кол-во, возвращает общую сумму заказа

// let price = prompt ('Укажите цену');
// let quantity = prompt ('Укажите количество');

// function calcFullPrice (a, b) {

//   if (isNaN(a) || isNaN(b)) {
//     return null;
//   }

//   return a*b;
// }

// let result = calcFullPrice (price, quantity);

// alert ('Сумма вашего заказа: ' + result);

// 4. функция которая принимает параметры сумму заказа и кол-во денег в кошельке, и возвращает хватает ли денег купить эти товары

// let price = prompt ('Сумма заказа');
// let wallet = prompt ('Сколько денег в кошельке');

// function isEnoughMoney (a, b) {
//   if (isNaN(a) || isNaN(b)) {
//     return null;
//   }

//   if (b>=a) {
//     return true;
//   }
//   return false;
// }

// let result = isEnoughMoney (price, wallet);

// alert (result);

// 5. функция которая принимает параметр кол-во этажей подьезда (с 4мя квартирами на этаже) и вернет посчитаное общее колво квартир в подьезде

// let floors = prompt('Сколько этажей в вашем подъезде?')

// function numberOfApartments (a) {
  
//   if (isNaN(a)) {
//     alert('Пожалуйста введите число');
//     return null;
//   }
//   return a * 4;
// }

// let result = numberOfApartments (floors);

// alert ('В вашем подъезде ' + result + ' квартир');

// 6.* функция которая проверит что полученное как параметр число находится между 0 и 10, вернет ложь если снаружи диапазона

// let num = prompt ('введите число')

// function comparison (a) {
//   if (a >= 0 && a <= 10) {
//     return true;
//   }
//   return false;
// }

// let result = comparison (num);

// alert (result);

// 6.1 функция которая вернет модуль (abs) числа (если пришло отрицательное то вернет положительное, если положительное то вернет положительное)

// let num = prompt ('введите число')

// function comparison (a) {

//   let modul = Math.abs (a);
  
//   if (modul >= 0 && modul <= 10) {
//     return modul;
//   }
//   return false;
// }

// let result = comparison (num);

// alert (result);

// 6.2 функция которая вернет случайное (random) число от 0 до 10

// let num1 = 10;
// let num2 = 0;

// function comparison (max, min) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let result = comparison (num1, num2);

// alert (result);

// 6.3 функция которая вернет квадратный корень числа (sqrt)

// let num = prompt ('введите число')

// function comparison (a) {
  
//   if (isNaN(a)) {
//     alert('Пожалуйста введите число');
//     return null;
//   }
  
//   if (a >= 0 && a <= 10) {
//     return Math.sqrt(a);
//   }
//   return false;
// }

// let result = comparison (num);

// alert (result);

// 6.4 функция которая посчитает корни квадратного уравнения

// let num1 = prompt ('введите число');
// let num2 = prompt ('введите число');
// let num3 = prompt ('введите число');

// function quadraticEquation (a, b, c) {
//   let x1 = (-b + Math.sqrt(b**2 - (4 * a * c)))/2 * a;
//   let x2 = (-b - Math.sqrt(b**2 - (4 * a * c)))/2 * a;
//   let numresult = 'x1= ' + x1 + ' ' + 'x2= ' + x2;
//   return numresult;
// }

// let result = quadraticEquation (num1, num2, num3);
// alert (result);

// на switch или if ///////////////////////////////////////

// (switch / if) 1. функция которая вернет сезон года в зависимости от полученного номера месяца

// let num = prompt ('введите номер месяца');

// function getSeason (season) {
//   switch (season) {
//     case '12':
//     case '1':
//     case '2':
//       alert ('зима');
//       break;
//     case '3':
//     case '4':
//     case '5':
//       alert ('весна');
//       break;
//     case '6':
//     case '7':
//     case '8':
//       alert ('лето');
//       break;
//     case '9':  
//     case '10': 
//     case '11':
//       alert ('осень');
//       break;
//     default:
//       alert ('введите номер месяца в виде числа');
//   }
// }

// getSeason (num);

// (switch / if) 2. функция которая проверит совершеннолетие пользователя в зависимости от указанной страны

let userCountry = prompt ('из какой вы страны?');
let userAge = prompt ('сколько вам лет?');

function isAdult (country, age) {
  if (country === 'ukraine' && age >= 18 || country === 'japan' && age >= 20 || country === 'singapore' && age >= 21) {
    return true;
  }
  return false;
}

result = isAdult (userCountry, userAge);
alert (result);