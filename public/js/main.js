window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>0);
});

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");
menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
}