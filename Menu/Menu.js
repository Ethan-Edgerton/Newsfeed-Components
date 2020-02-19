/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function createMenu(menuItems){

const menu = document.createElement('div');
  menu.classList.add('menu');

const ul = document.createElement('ul');
  //adds ul to menu
  menu.appendChild(ul);

menuItems.forEach(Item => {
const li = document.createElement('li');
    //adds each li to ul
    ul.appendChild(li);
    // applies items to each li
    li.textContent = Item;
});

// On click toggles menu--open class which changes display prop
const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', () => {
  menu.classList.toggle('menu--open');
});

//returns menu with all atatched li's and their content
return menu;

}


// sets button to existing hamburger menu element
const button = document.querySelector('.menu-button');
const menu = createMenu(menuItems, button);
// sets header to header element
const header = document.querySelector('.header');
//adds menu to header
header.appendChild(menu);