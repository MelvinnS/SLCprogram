// Carousel auto-rotation
let currentIndex = 0
const carouselPhotos = document.querySelectorAll(".carousel-photo")
const indicators = document.querySelectorAll(".indicator")
const backgroundImages = document.querySelectorAll(".carousel-img")

function updateCarousel() {
  // Update carousel photos
  carouselPhotos.forEach((photo) => photo.classList.remove("active"))
  carouselPhotos[currentIndex].classList.add("active")

  // Update indicators
  indicators.forEach((indicator) => indicator.classList.remove("active"))
  indicators[currentIndex].classList.add("active")

  // Update background carousel
  backgroundImages.forEach((img) => img.classList.remove("active"))
  backgroundImages[currentIndex].classList.add("active")

  currentIndex = (currentIndex + 1) % carouselPhotos.length
}

// Auto-rotate every 5 seconds
setInterval(updateCarousel, 5000)

// Click indicators to change carousel
indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentIndex = index
    updateCarousel()
  })
})
