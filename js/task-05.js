 // Get the input and span elements
  const nameInput = document.getElementById('name-input');
  const nameOutput = document.getElementById('name-output');

  // Function to update the name in the span element
  function updateNameOutput() {
    const inputName = nameInput.value.trim();

    // If the input is empty, display "Anonymous", otherwise display the input value
    nameOutput.textContent = inputName === '' ? 'Anonymous' : inputName;
  }

  // Add input event listener to the input field
  nameInput.addEventListener('input', updateNameOutput);

  // Initialize the name output
  updateNameOutput();
