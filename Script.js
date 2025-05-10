let bars = document.querySelector(".bars");
let close = document.querySelector(".close");
let sideBar = document.querySelector(".side-bar");

bars.addEventListener("click", () => {
    sideBar.style.display = "flex";
});

close.addEventListener("click", () => {
    sideBar.style.display = "none";
});
