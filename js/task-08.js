const loginForm = document.querySelector('.login-form');

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior (page reload)

    // Get the form elements
    const formElements = loginForm.elements;

    // Check if all fields are filled
    let allFieldsFilled = true;
    for (const element of formElements) {
      if (element.type !== 'submit' && element.value.trim() === '') {
        allFieldsFilled = false;
        break;
      }
    }

    // If any field is empty, display an alert and return
    if (!allFieldsFilled) {
      alert('Please fill in all fields.');
      return;
    }

    // Collect field values into an object
    const formData = {};
    for (const element of formElements) {
      if (element.type !== 'submit') {
        formData[element.name] = element.value;
      }
    }

    // Display the object with entered data in the console
    console.log(formData);

    // Clear the form fields
    loginForm.reset();
  }

  // Add event listener to the form for the submit event
  loginForm.addEventListener('submit', handleSubmit);
