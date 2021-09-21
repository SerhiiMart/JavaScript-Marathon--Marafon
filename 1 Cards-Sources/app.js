function slidesPlugin (activeSlide) {
  const slides = document.querySelectorAll(".slide")

  slides[activeSlide] = document.classList.add(active)

  for (const slide of slides) {
    slide.addEventListener("click", ()=> {
      removeActiveClass()
      slide.classList.add("active")
    })
  }

  const removeActiveClass = () => {
    slides.forEach((slide) => {
      slide.classList.remove("active")
    })
  }
}

slidesPlugin(1)