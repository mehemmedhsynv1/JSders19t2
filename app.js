let list = document.querySelectorAll(".shopping-list li");
function changeColor(list){
    list.target.style.color = "blue";
    
}
function changeText(list){
    list.target.style.textDecoration = "line-through";
}
list.forEach((a) => {
    a.addEventListener("click", changeColor);
    a.addEventListener("click", changeText);
    a.removeEventListener("click", changeColor);
})