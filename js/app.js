

//get Sections and get the main id of menu to use it for append li items 
const sections = document.querySelectorAll('section');
const main_menu = document.getElementById('navbar__list');

function build_menu() {

  //here i do the loop on each section that i get  to get details to build the menu 
  sections.forEach(function (section) {
    var item = document.createElement('li');
    item.innerHTML = '<a  href="#' + section.id + '" data-nav="' + section.id + '" class="menu__link">' + section.dataset.nav + '</a>';

    var res_menu = "";
    main_menu.appendChild(item) // add the item

  });

}

build_menu() //call the function to get all sections;


/* Mobile Responsive Menu */

function menu_mobile() {
  console.log('welcome to responsive ');
  var nav_menu = document.getElementById('navbar__list');

  if (nav_menu.className === "") {
    nav_menu.className += " res_menu"
  } else {
    nav_menu.className = "";
  }
}
//apply smoth Scroll by adding option to the whole HTML so it reduce the code lines  and works like charm <3 
document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth'



//window.addEventListener for tracking the viewport and know which section is current now to activate the your-active-class  
window.addEventListener('scroll', () => {

  sections.forEach(function (section) {
    var current_item_pos = section.getBoundingClientRect();
    //console.log(current_item_pos.top);
    if (current_item_pos.top >= -500 && current_item_pos.top <= 160) {
      section.classList.add('your-active-class');
    } else {
      section.classList.remove('your-active-class');
    }

  });

})