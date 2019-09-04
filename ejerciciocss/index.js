var pajaro; 
var content;
window.addEventListener("load",()=>{
    pajaro = document.getElementById("pajaro");
    content = document.getElementById("contenedorMaestro");
    content.addEventListener("click", ()=>{
        pajaro.style.transform = "translateY(60px)";
        console.log("click");
    })
})
