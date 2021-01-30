menuBtn = document.getElementById("menu-btn");
navbarMenu = document.getElementById("navbar-menu");


// Menu Button Functionality
menuBtn.onclick = function() {
    navbarMenu.classList.toggle('navbar-menu--visible');
}