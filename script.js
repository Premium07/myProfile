let container = document.querySelector(".container");
let boxes = document.querySelector("#boxes");
let box = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let title = document.querySelector(".title");
var body = document.querySelector("body");
let cursor = document.querySelector(".cursor");


body.addEventListener("mousemove", function(det){
    cursor.style.left = det.x+"px";
    cursor.style.top = det.y+"px";
});

const minimize = () => {
    box.addEventListener("click", () => {
        container.style.height = "50px";
        container.style.transition = ".3s ease";
        let remove = container.removeChild(title);
    })
}

minimize();

const maximize = () => {
    box2.addEventListener("click", () => {
        container.style.height = "550px";
        remove = container.appendChild(title);
        container.style.transition = ".3s ease"; 
    })
}

maximize();