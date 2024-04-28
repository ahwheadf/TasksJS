/*
Написать код, который рассчитывает расстояние от текущей точки до точки назначения,
представляя расчет как нахождение диагонали прямоугольника (используя основы тригонометрии или геометрии).
*/

const positionLat = 2
const positionLong = 1
const addressLat = 7
const addressLong = 5

console.log(((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2) ** 0.5);
