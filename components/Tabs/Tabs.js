
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    //"Capture" the array-like element with the dumb div tab links within the constructor
    this.element = element;
    
    // Get the custom data attribute on the Link
    // This will grab the numeric value of each data tab within the links
    this.data = this.element.dataset.tab;
    // console.log("this.data", this.data);
    
    // Using the custom data attribute get the associated Item element
    // The code below will connect the data tab links with the data tab content
    //this.data will be either 1,2,3,4
    this.item = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    // console.log("this.itemElement", this.item);
    
    // Using the Item element, create a new instance of the TabItem class
    // Make the dumb div smarter with new methods
    this.tabItem = new TabItem(this.item);
    // console.log("tabItem", this.tabItem);
    
    // Add a click event listener on this instance, calling the select method on click
    // this.element are out tab link buttons, we are adding a click event that will invoke
    // the select method of this instance of TabLink
    this.element.addEventListener('click', () => {
      this.select();
    });
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');
    // console.log(links);

    // Using a loop or the forEach method remove the 'tabs-link-selected' class 
    // from all of the links
    // Array.from(links).forEach();
    links.forEach( link => {
      link.classList.remove('tabs-link-selected')
    });

    // Add a class named "tabs-link-selected" to this link
    // this.element;
    this.element.classList.add('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // these are the instance of TabLink that are passed in 1,2,3, and 4
    this.element = element;
    console.log("this.element within TabItem", this.element);
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items;
    const items = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
    items.forEach( item => {
      item.classList.remove('tabs-item-selected');
    })

    // Add a class named "tabs-item-selected" to this element
    //this.element;
    this.element.classList.add('tabs-item-selected');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to 
// iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in 
// each link as a parameter

EX: let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));

*/

links = document.querySelectorAll('.tabs-link');
links.forEach(link => new TabLink(link));
// console.log(links);

// Or combine into one
// let links = document.querySelectorAll('.tabs-link').forEach( link => new TabLink(link));
