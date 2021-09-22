const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

const nainSlide = document.querySelector('.main-slide')
const slidesCount= nainSlide.querySelectorAll('div').length

const sidebar = document.querySelector('.sidebar')
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

let activeSlideIndex = 0;


upBtn.addEventListener('click', () => {
  changeSlide('up')
})
downBtn.addEventListener('click', () => {
  changeSlide('down')
})

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex++
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }
}