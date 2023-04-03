//Abrir menu mobile

const openMenu = document.querySelector("#open-menu-mobile");

const menuMobile = document.querySelector(".menu-mobile");

const closeMenu = document.querySelector("#close-menu");

openMenu.addEventListener("click",()=>{


    menuMobile.classList.add("active");

})
closeMenu.addEventListener("click",()=>{
    menuMobile.classList.remove("active");
});

//Funcionalidad para cerrar menu mobile si clickeo un link

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        menuMobile.classList.remove("active");
    })
});