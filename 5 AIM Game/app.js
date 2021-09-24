const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')

let time = 11

startBtn.addEventListener('click', (event) =>{
 event.preventDefault()
 screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time')) // Getting the attribute and making it's type Integer
    screens[1].classList.add('up')
    startGame()
  }
})

//Debug
startGame()

function startGame() {
  setInterval(decreaseTime, 1000)

  setTime(time)
}

function decreaseTime() {
  if (time === 0) {
    finishGame()
  } else {
    let current = --time
    if (current < 10) {
      current = `0${current}`
    }
    setTime(current)
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`
}

function finishGame() {

}

function createRandomCircle() {
  const circle = document.createElement('div')
  circle.classList.add('circle')
}