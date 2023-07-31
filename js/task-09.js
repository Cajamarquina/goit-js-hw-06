function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

  const changeColorButton = document.querySelector('.change-color');
  const colorSpan = document.querySelector('.color');
  const bodyElement = document.body;

  function changeBackgroundColor() {
    const randomColor = getRandomHexColor();

    // Set the background color of the body element
    bodyElement.style.backgroundColor = randomColor;

    // Display the color value in the span element
    colorSpan.textContent = randomColor;
  }

  // Add event listener to the button for the click event
  changeColorButton.addEventListener('click', changeBackgroundColor);