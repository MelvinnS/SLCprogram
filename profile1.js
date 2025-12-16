const carouselTrack = document.querySelector(".carousel-track")
const carouselItems = document.querySelectorAll(".carousel-item")
const dots = document.querySelectorAll(".dot")
let currentIndex = 0
const totalItems = 3
const autoRotateInterval = 3000

function updateCarousel() {
  /* modified carousel animation to rotate through items */
  carouselItems.forEach((item, index) => {
    const offset = (index - currentIndex + totalItems) % totalItems
    if (offset === 0) {
      item.style.opacity = "1"
      item.style.zIndex = "1"
      item.style.transform = "translateX(0) translateY(0)"
    } else if (offset === 1) {
      item.style.opacity = "0.4"
      item.style.zIndex = "-1"
      item.style.transform = "translateX(16px) translateY(16px)"
    } else {
      item.style.opacity = "0.2"
      item.style.zIndex = "-2"
      item.style.transform = "translateX(32px) translateY(32px)"
    }
  })

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex)
  })
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalItems
  updateCarousel()
}

function goToSlide(index) {
  currentIndex = index
  updateCarousel()
  clearInterval(autoRotateTimer)
  autoRotateTimer = setInterval(nextSlide, autoRotateInterval)
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => goToSlide(index))
})

let autoRotateTimer = setInterval(nextSlide, autoRotateInterval)
