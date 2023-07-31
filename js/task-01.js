// Function to count the elements in each category
  function countElementsInCategory(category) {
    return category.querySelectorAll('li').length;
  }

  // Get the ul#categories element
  const categoriesList = document.getElementById('categories');

  // Get all the li.item elements
  const categoriesItems = categoriesList.querySelectorAll('li.item');

  // Count the number of categories
  const numCategories = categoriesItems.length;

  // Display the number of categories in the console
  console.log('Number of categories:', numCategories);

  // Loop through each li.item element and display category name and element count
  categoriesItems.forEach((category) => {
    const categoryName = category.querySelector('h2').textContent;
    const numElements = countElementsInCategory(category);

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${numElements}`);
  });
