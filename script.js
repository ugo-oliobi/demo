const text = document.querySelector(".main-text");
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    text.classList.toggle("active");
    console.log(text);
});