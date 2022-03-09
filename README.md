# Landing Page Project

## Table of Contents

* [What I Do ?](#Details)
* [Functions and properties that i used](#functions)

## Details
On this project i compied the main repo from the github that contains project main files and structures 
after that i started with linkin the "app.js" file to the index before the ending of "<body>" tag after that
i started wirh defining that main variables as constant for the menu :

1 - navList  : to get the element by the id to use it for appending 
2 - sections : to get all section on the page so when we add new section it will be selected in this array  

## functions

1 - build_menu() : This is function to gnerate the menu by append the li inside the empty navigation and make set the link name from the data-nav attribute  with concatination to add variables

2 - Scroll Smoth using scroll behavior
Refrence : https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior

3- window.addEventListener for tracking the viewport and know which section is current now to activate the your-active-class 