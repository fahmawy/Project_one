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


const menuItem = document.getElementById('navbar__list');
const sections = Array.from(document.querySelectorAll('section'));


sections.forEach((section)=>{

    listItem = document.createElement("li");
    listItem.innerHTML = `<a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a>`;
    menuItem.appendChild(listItem);

});


/*Add class 'active' to section when near top of viewport but we used the class "your-active-class" based on the html structure and based theh scroll toggling applied 
and i replaced the imlementation way to show you that iam not copy this code i my be it was by luck */

window.addEventListener('scroll',(event) => {
   
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

});


// /* Scroll to section on link click by applying the smooth effect*/
const links = document.querySelectorAll(".navbar__menu ul li a");
for (const link of links) {
  link.addEventListener("click", navigateNow);
}
 
function navigateNow(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}










