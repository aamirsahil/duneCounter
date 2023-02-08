const incrementButton = document.getElementById("increment-button");
const decrementButton = document.getElementById("decrement-button");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("reset-button");
const imagesContainer = document.getElementById("images-container");

decrementButton.addEventListener("click", () => {
  let count = parseInt(counter.textContent);
  if (count > 0) {
    count--;
    counter.textContent = count;
    updateImages(count);
  }
});

incrementButton.addEventListener("click", () => {
  let count = parseInt(counter.textContent);
  count++;
  counter.textContent = count;
  updateImages(count);
});

resetButton.addEventListener("click", () => {
  counter.textContent = 0;
  updateImages(0);
});

function updateImages(count) {
  imagesContainer.innerHTML = "";
  for (let i = 0; i < count; i++) {
    let image = document.createElement("div");
    image.classList.add("image");
    imagesContainer.appendChild(image);
  }
}