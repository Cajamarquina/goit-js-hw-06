 // Initialize the counterValue variable with 0
  let counterValue = 0;

  // Get the elements for the counter
  const valueElement = document.getElementById('value');
  const incrementButton = document.querySelector('[data-action="increment"]');
  const decrementButton = document.querySelector('[data-action="decrement"]');

  // Function to update the interface with the current counterValue
  function updateCounterValue() {
    valueElement.textContent = counterValue;
  }

  // Function to handle incrementing the counterValue
  function incrementCounter() {
    counterValue += 1;
    updateCounterValue();
  }

  // Function to handle decrementing the counterValue
  function decrementCounter() {
    counterValue -= 1;
    updateCounterValue();
  }

  // Add event listeners to the buttons
  incrementButton.addEventListener('click', incrementCounter);
  decrementButton.addEventListener('click', decrementCounter);

  // Update the interface with the initial counterValue
  updateCounterValue();
