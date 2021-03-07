//Есть массив цветов в hex-формате и кнопки Start и Stop.

//<button type="button" data-action="start">Start</button>
//<button type="button" data-action="stop">Stop</button>
//const colors = [
//'#FFFFFF',
//'#2196F3',
//'#4CAF50',
//'#FF9800',
//'#009688',
//'#795548',
//];
//Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет
//цвет фона body на случайное значение из массива используя инлайн-стиль.
//При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.
//Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

//const randomIntegerFromInterval = (min, max) => {
//  return Math.floor(Math.random() * (max - min + 1) + min);
//};

colors = ["#FFFFFF", "#2196F3", "#4CAF50", "#FF9800", "#009688", "#795548"];
let timerId = null;

const bodyRef = document.querySelector("body");
const startBtnRef = document.querySelector('[data-action="start"]');
const stopBtnRef = document.querySelector('[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const handleClickStart = () => {
  if (!timerId) {
    timerId = setInterval(() => {
      bodyRef.setAttribute(
        "style",
        `background-color: ${colors[randomIntegerFromInterval(0, 5)]}`
      );
    }, 500);
  }
};
const handleClickStop = () => {
  clearInterval(timerId);
  timerId = null;
};
startBtnRef.addEventListener("click", handleClickStart);
stopBtnRef.addEventListener("click", handleClickStop);
