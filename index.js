document.getElementById("js_btn").addEventListener("click", () => {
  const images = document.querySelectorAll("#random_img img");
  images.forEach((img) => (img.style.display = "none"));

  const randomIndex = Math.floor(Math.random() * images.length);
  images[randomIndex].style.display = "block";
});

const images = document.querySelectorAll("#random_img img");
images.forEach((img) => (img.style.display = "none"));
