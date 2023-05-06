 const btn = document.querySelector(".btn");
function myFunc() {
    alert("Hello World")
}
btn.addEventListener("click", myFunc)




var theme = document.querySelector(".theme")
var body = document.querySelector("body")
function myFunction() {
    if (theme.checked){
        body.classList.add("active")
    }else {
        body.classList.remove("active")
    }
    
    element.classList.toggle("theme")
}
theme.addEventListener("change", myFunction)