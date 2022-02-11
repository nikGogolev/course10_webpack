import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { timerHandler, timerResultToHtml } from "./timer.js";
import { Howl } from "howler";
import "./switch.js";

import '../css/styles.css'

const dateCalcForm = document.getElementById("dateCalcForm");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
  dateCalcResult.innerHTML = "";
  event.preventDefault();

  let { firstDate, secondDate } = event.target.elements;
  firstDate = firstDate.value, secondDate = secondDate.value;
  if (firstDate && secondDate) {
    const diff = diffDates(firstDate, secondDate);
    dateCalcResult.innerHTML = diffToHtml(diff);
  }
  else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}

const timerForm = document.getElementById("timerForm");
const timerResult = document.getElementById("timer__result");
const startTimer = document.getElementById("startTimer");
const stopTimer = document.getElementById("stopTimer");

var sound = new Howl({
  src: ['../sound/alarm.mp3']
});

function handleTimer(event) {
  timerResult.innerHTML = "";
  event.preventDefault();

  let { estimatedTime } = event.target.elements;
  estimatedTime = estimatedTime.value;
  console.log(estimatedTime);
  if (estimatedTime) {
    const timerId = setInterval(() => {
      const result = timerHandler(estimatedTime);

      timerResult.innerHTML = timerResultToHtml(result);
      if (!result.years && !result.months && !result.days && !result.hours && !result.minutes) {
        timerResult.style.color = 'red';
        sound.play();
      }
      if (!result.years && !result.months && !result.days && !result.hours && !result.minutes && result.seconds <= 0) {
        clearInterval(timerId);
        timerResult.innerHTML = "Время вышло";
      }
    }, 1000);

    stopTimer.addEventListener("click", () => clearInterval(timerId));
  }
  else timerResult.innerHTML = formatError("Необходимо заполнить время окончания");
}

timerForm.addEventListener("submit", handleTimer);
