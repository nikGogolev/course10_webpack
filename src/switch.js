const dateCalcLink = document.getElementById('dateCalcLink');
const timerLink = document.getElementById('timerLink');
const dateCalcBlock = document.getElementById('dateCalc');
const timerBlock = document.getElementById('timer');

export default (() => {
  dateCalcLink.addEventListener('click', (e) => {
    e.preventDefault();
    dateCalcBlock.classList.add('active');
    timerBlock.classList.remove('active');
  });

  timerLink.addEventListener('click', (e) => {
    e.preventDefault();
    timerBlock.classList.add('active');
    dateCalcBlock.classList.remove('active');
  })
})();
