// Get the input element
  const validationInput = document.getElementById('validation-input');

  // Function to check the validity of the input
  function checkValidity() {
    const enteredValue = validationInput.value;
    const expectedLength = validationInput.dataset.length;

    if (enteredValue.length === parseInt(expectedLength)) {
      validationInput.classList.add('valid');
      validationInput.classList.remove('invalid');
    } else {
      validationInput.classList.add('invalid');
      validationInput.classList.remove('valid');
    }
  }

  // Add event listener to the input element for the blur event
  validationInput.addEventListener('blur', checkValidity);
