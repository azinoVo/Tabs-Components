class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector();
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content;
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {

    })
  }

  toggleContent() {
    
    // Toggle the ".dropdown-hidden" class off and on
    this.content;
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));
// Create a variable called dropdowns and assign it to: the DOM representation of all classes with a class
// name of dropdown. For each index within the nodeList of the DOM representation, create a new instance
// of the Dropdown class with information from the DOM node.