﻿const result = +prompt('Введите число', '')
if (isNaN(result % 2)) {
  alert('Упс, кажется, вы ошиблись')
} else if (result % 2 === 0) {
  alert('Число четное')
} else {
  alert('Число нечетное')
}