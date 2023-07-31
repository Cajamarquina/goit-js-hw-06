const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

// Get the ul#ingredients element
const ingredientsList = document.getElementById('ingredients');

// Create a document fragment to hold all the <li> elements
const fragment = document.createDocumentFragment();

// Loop through the ingredients array
ingredients.forEach((ingredient) => {
  // Create a new <li> element
  const listItem = document.createElement('li');
  
  // Add the 'item' class to the <li> element
  listItem.classList.add('item');
  
  // Set the text content of the <li> element to the ingredient name
  listItem.textContent = ingredient;
  
  // Append the <li> element to the document fragment
  fragment.appendChild(listItem);
});

// Insert all <li> elements from the fragment into the ul#ingredients list in a single operation
ingredientsList.appendChild(fragment);