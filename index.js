let ham = true
const menu_icon = document.querySelector(".hamburger-menu-icon");
const hamburger = document.querySelector(".responsive-navbar")
function showMeniItem(){
    if(ham){
        ham = false
        console.log(ham)
        // menu_icon.style.display = "block"
        menu_icon.innerHTML ='<i class="fa-solid fa-rectangle-xmark"></i>'
        hamburger.style.top = "0"
        hamburger.style.opacity = "1"
        hamburger.style.transition = "opacity 0.5s ease-in-out"
        hamburger.style.transition = "top 0.5s ease-in-out"
    }
    else{
        ham = true
        console.log(true)
         menu_icon.innerHTML ='<i class="fa-solid fa-bars"></i>'
         hamburger.style.top = "-1000px"
         hamburger.style.opacity = "0"
         hamburger.style.transition = "top 0.5s ease-in-out"
          hamburger.style.transition = "opacity 0.5s ease-in-out"
    }
}
