var logo = document.getElementById("logo");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("ul");

logo.onclick = function(){
        document.body.classList.toggle("dark-mode");
        if(document.body.classList.contains("dark-mode")){
            logo.src = "image/logo2.png"
        }else{
            logo.src = "image/logo1.png"
        }
    }

hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    })

    document.querySelectorAll("li").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))   

