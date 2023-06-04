let navMobile = document.getElementById('sidebar-mobile');
let navSidebar = document.getElementById('sidebar');
let hamburger = document.getElementById('hamburger');
let navActive = false;

navMobile.addEventListener('click',function(){
    navSidebar.classList.toggle('active');
    navActive = !navActive;
    hamburger.innerHTML = navActive? "close" : "menu";
})

let typeText = document.getElementById("typewriter");
let options = ["fast learner", "Pythonist","Developer"]
let cursorPosition = 0;
let currnetIndex =0;
let speed = 100;

const typewriter=()=>{
    typeText.innerText = options[currnetIndex].slice(0,cursorPosition);
    if(cursorPosition++ < options[currnetIndex].length ) setTimeout(typewriter, speed);
    else{
        currnetIndex = (currnetIndex+1)%3;
        cursorPosition=0;
        setTimeout(typewriter,500);
    }}
typewriter();

var anchorTags = document.querySelectorAll('a[href^="#"]');
for (let i=1;i<anchorTags.length;i++){
    anchorTags[i].addEventListener('click', smoothScroll);
}

// Smooth scrolling function
function smoothScroll(e) {
e.preventDefault();

var targetId = this.getAttribute('href');
var targetElement = document.querySelector(targetId);

// Scroll smoothly to the target element
targetElement.scrollIntoView({ behavior: 'smooth' });
}
let contents = document.getElementsByClassName("sections");
let navLinks = document.getElementsByClassName('sideNav');
let contentWindow = document.getElementById("main-content");
let currentElementIndex = -1;
function setActive(){

for(let i=0;i<contents.length;i++){
    if(contents[i].offsetTop <contentWindow.scrollTop){
        currentElementIndex = i;
    }
}
for(let i=0;i<navLinks.length;i++){
    navLinks[i].classList.remove("nav-active");
}
if(currentElementIndex>=0){
    navLinks[currentElementIndex].classList.add("nav-active");
}
}
contentWindow.addEventListener('scroll',setActive);