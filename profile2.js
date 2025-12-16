document.addEventListener("DOMContentLoaded", () => {
  const carouselSections = document.querySelectorAll(".carousel-section");
  const autoRotateIntervals = [];

  carouselSections.forEach((section, sectionIndex) => {
    const track = section.querySelector(".carousel-track");
    const items = track.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    // Set initial state
    items.forEach((item, i) => {
      if (i === 0) {
        item.classList.add("active");
      } else if (i === 1) {
        item.classList.add("prev");
      } else if (i === 2) {
        item.classList.add("next");
      }
    });

    // Function to update carousel
    function updateCarousel() {
      items.forEach((item) => {
        item.classList.remove("active", "prev", "next");
      });

      const activeItem = items[currentIndex];
      const prevItem = items[(currentIndex - 1 + items.length) % items.length];
      const nextItem = items[(currentIndex + 1) % items.length];

      activeItem.classList.add("active");
      prevItem.classList.add("prev");
      nextItem.classList.add("next");
    }

    // Auto-rotate carousel every 3 seconds
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    }, 3000);

    autoRotateIntervals.push(interval);
  });

  // Cleanup on page unload
  window.addEventListener("beforeunload", () => {
    autoRotateIntervals.forEach((interval) => clearInterval(interval));
  });
});
