let bird1 = document.getElementById("bird1");
let bird2 = document.getElementById("bird2");
let heading = document.querySelector(".heading");

window.addEventListener("scroll", () => {
 let value = window.scrollY;

 bird1.style.top = value * -1.5 + "px";
 bird1.style.right = value * -1.5 + "px";

 bird2.style.top = value * -1.5 + "px";
 bird2.style.left = value * -1.5 + "px";

 heading.style.bottom = "-25rem";
 heading.style.top = value * 2 + "px";
});
