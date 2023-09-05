//Функция для генерации случайного числа из диапазона
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Функция для генерации выбора случайного объекта массива
const getRandomArrayElement = function (elements) {
  return elements[getRandomInteger(0, elements.length - 1)];
};
//Функция для перетасовки массива(найдена)
function shuffle(startArray) {
    let array = startArray. slice(0);
    let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

//Функция для генерации массива случайной длины и случайным содержимым
const getRandomArray = function(elements){

  let newArray = shuffle(elements);
  let arrayLength = getRandomInteger(1,elements.length); //Сколько объектов оставить в массиве ОТ и ДО
  for (let i = 0; i < elements.length-arrayLength; i++) {
      newArray.shift();
  }
  return newArray;
};
const getRandomArrayLength = function(elements){
   let amount =  getRandomInteger(1, 5);
   let newRandomArray = [];
   for (let i = 0; i < amount; i++) {
    newRandomArray.push(elements[getRandomInteger(0, elements.length - 1)]);
   };
   return newRandomArray;
};
export {getRandomInteger, getRandomArrayElement, getRandomArray, getRandomArrayLength};
