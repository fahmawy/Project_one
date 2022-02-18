/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


const navList = document.getElementById('navbar__list');
const sections = Array.from(document.querySelectorAll('section'));

/*
This is function to gnerate the menu by append the li inside the empty navigation and make set the link name 
from the data-nav attribute 
*/
function generateListItem(){
    for(sec of sections){
        listItem = document.createElement("li");
        listItem.innerHTML = `<a href="#${sec.id}" data-nav="${sec.id}" class="menu__link">${sec.dataset.nav}</a>`;
        navList.appendChild(listItem);
    }
}



// call the function to be excuted 
generateListItem();

// Add class 'active' to section when near top of viewport but we used the class "your-active-class" based on the html structure and based theh scroll toggling applied 
window.onscroll = function(){
    document.querySelectorAll("section").forEach(function (active){
        if(
           active.getBoundingClientRect().top >= -400 && 
           active.getBoundingClientRect().top <= 150  
          ){
              active.classList.add("your-active-class");
          }else{
              active.classList.remove("your-active-class");
          }
    });
};


// Scroll to section on link click by applying the smooth effect
navList.addEventListener("click" , (navSec)=>{
    navSec.preventDefault();
    if(navSec.target.dataset.nav){
        document.getElementById(`${navSec.target.dataset.nav}`).scrollIntoView({ behavior: "smooth"});
        setTimeout(()=>{
            location.hash = `${navSec.target.dataset.nav}`;
        },170);
    }
});














