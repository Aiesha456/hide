document.querySelector(".button1").addEventListener("click",function(){
    this.classList.add("pressed");
    setTimeout(() => {
        this.classList.remove("pressed");
    }, 100);
})

document.querySelector(".button2").addEventListener("click",function(){
    this.classList.add("pressed");
    setTimeout(() => {
        this.classList.remove("pressed");
    }, 100);
})

document.querySelector(".button3").addEventListener("click",function(){
    this.classList.add("pressed");
    setTimeout(() => {
        this.classList.remove("pressed");
    }, 100);
})


document.querySelector(".button1").addEventListener("click",function(){
    document.querySelector(".magic").innerHTML="<p>hiiii</p>"
    setTimeout(() => {
        document.querySelector(".magic").innerHTML="" 
    }, 400);
});

document.querySelector(".button2").addEventListener("click",function(){
    document.querySelector(".magic").innerHTML="<p>helloo</p>"
    setTimeout(() => {
        document.querySelector(".magic").innerHTML="" 
    }, 400);
});

document.querySelector(".button3").addEventListener("click",function(){
    document.querySelector(".magic").innerHTML="<p>hehehe</p>"
    setTimeout(() => {
        document.querySelector(".magic").innerHTML="" 
    }, 400);
});