// Get the input element and the span element
  const fontSizeControl = document.getElementById('font-size-control');
  const textElement = document.getElementById('text');

  // Function to update the font size of the span element
  function updateFontSize() {
    const fontSize = fontSizeControl.value + 'px';
    textElement.style.fontSize = fontSize;
  }

  // Add event listener to the input element for the input event
  fontSizeControl.addEventListener('input', updateFontSize);
