let number = 0
let cron
let newInterval
let h1 = document.querySelector("h1")
const começar = document.querySelector(".button1")
const parar = document.querySelector(".button2")
const recomeçar = document.querySelector(".button3")

function start() {
    cron = setInterval(function () {
        number++
        h1.innerHTML = number
    }, 1000)
}


function stop() {
    clearInterval(cron)
    começar.innerHTML = "Continue"
}

function showRestart() {

    recomeçar.style.display = "block" 
}

function restart() {
    clearInterval(cron); // Cancela o intervalo atual
    number = 0; // Reinicia o número para 0
    h1.innerHTML = number; // Atualiza o valor exibido no h1
  
    cron = setInterval(function() {
      number++;
      h1.innerHTML = number;
    }, 1000); // Inicia um novo intervalo
  }


recomeçar.addEventListener("click", restart)
começar.addEventListener("click", showRestart)
começar.addEventListener("click", start)
parar.addEventListener("click", stop)