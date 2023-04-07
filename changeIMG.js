const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const Container = document.getElementById("popupContainer");

button1.addEventListener("click", () => {
  image1.src = "menutop.jpg";
  image2.src = "menu2.jpg";
  image3.src = "drinkstop.jpg";
  image4.src = "drinks2.jpg";
  Container.style.display = "none";
});

button2.addEventListener("click", () => {
  image1.src = "/eng/menutopEN.jpg";
  image2.src = "/eng/menu2EN.jpg";
  image3.src = "/eng/drinkstopEN.jpg";
  image4.src = "/eng/drinks2EN.jpg";
  Container.style.display = "none";
});
