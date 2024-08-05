const hamburgerMenu = document.querySelector("#hamburgerMenu");
const body = document.querySelector("body")
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

hamburgerMenu.addEventListener("click",function(){
    if(header.classList.contains("open")){
        body.classList.remove("no-scroll")
        header.classList.remove("open")
        fadeElems.forEach(function(element){
            element.classList.remove("fade-in")
            element.classList.add("fade-out")
        })
        
    }else{
        header.classList.add("open")
        fadeElems.forEach(function(element){
            body.classList.add("no-scroll")
            element.classList.remove("fade-out")
            element.classList.add("fade-in")
        })
    }
})