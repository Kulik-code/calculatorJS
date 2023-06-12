// Функция для сложения
function add(a, b) {
  return a + b;
}

// Функция для вычитания
function subtract(a, b) {
  return a - b;
}

// Функция для умножения
function multiply(a, b) {
  return a * b;
}

// Функция для деления
function divide(a, b) {
  return a / b;
}

// Получение чисел от пользователя
var num1 = parseFloat(prompt("Введите первое число:"));
var num2 = parseFloat(prompt("Введите второе число:"));

// Операции с числами
console.log("Сумма: " + add(num1, num2));
console.log("Разность: " + subtract(num1, num2));
console.log("Произведение: " + multiply(num1, num2));
console.log("Частное: " + divide(num1, num2));
