hamburgerMenu = document.querySelector('.hamburger');
mainBody = document.querySelector('.main_body');
mobileHandler = document.querySelector('.mobile');
hamburgerMenu.addEventListener('click', function(){
    hamburgerMenu.classList.toggle("open");
    mobileHandler.classList.toggle("open");
    mainBody.classList.toggle("open");
});

navCloser = document.querySelector('.nav_closer');
navCloser.addEventListener('click', function(){
    navCloser.classList.toggle("open");
    mobileHandler.classList.toggle("open");
    mainBody.classList.toggle("open");
});