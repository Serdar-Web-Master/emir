const btn = document.querySelector('.btn');
const emir = document.querySelector('.emir');

console.log(btn);


btn.addEventListener("click",changeColor);

function changeColor () {
   console.log("ooo");
   emir.classList.add("red")
}