document.querySelectorAll(".carousel-wrapper").forEach(wrapper => {
  const track = wrapper.querySelector(".carousel-track");
  const images = track.querySelectorAll("img");
  const prevBtn = wrapper.querySelector(".prev");
  const nextBtn = wrapper.querySelector(".next");

  let index = 0;

  function updateCarousel() {
    images.forEach(img => img.classList.remove("active"));

    images[index].classList.add("active");

    const offset = (index * 260) - 260;
    track.style.transform = `translateX(${-offset}px)`;
  }

  function next() {
    index = (index + 1) % images.length;
    updateCarousel();
  }

  function prev() {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
  }

  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

  // AUTO SLIDE
  setInterval(next, 3500);

  updateCarousel();
});
