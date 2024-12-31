function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
  setTimeout(() => {
    sidebar.style.transform = "translateX(0)";
  }, 10);
}

function closeSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.transform = "translateX(100%)";
  setTimeout(() => {
    sidebar.style.display = "none";
  }, 300);
}
// Carousel
const imageGallery = document.querySelector(".image-gallery");
const prevBtn = document.querySelector(".image-prev");
const nextBtn = document.querySelector(".image-next");

let currentIndex = 0;
const itemsPerPage = 4;
const totalItems = imageGallery.children.length;

function updateGallery() {
  const startIndex = currentIndex * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  Array.from(imageGallery.children).forEach((item, index) => {
    item.classList.remove("active");
    if (index >= startIndex && index < endIndex) {
      item.style.display = "block";
      // Add a delay to stagger the fade-in animation
      item.style.animationDelay = `${(index - startIndex) * 0.1}s`;
      item.classList.add("active");
    } else {
      item.style.display = "none";
    }
  });
}

prevBtn.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + Math.ceil(totalItems / itemsPerPage)) %
    Math.ceil(totalItems / itemsPerPage);
  updateGallery();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % Math.ceil(totalItems / itemsPerPage);
  updateGallery();
});

updateGallery();
// Carousel
