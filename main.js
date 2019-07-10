const submitButton = document.querySelector('.submit');
submitButton.onclick = handleDecision;

function handleDecision(event) {
  event.preventDefault();

  const inputBox = document.querySelector('.user-input');
  let userInput = inputBox.value;
  let userInput = userInput.toLowerCase();

  if (userInput.includes(`car`)) || (userInput.includes(`investigate`)) {
    window.location = './investigate.html';
  } else if (userInput.includes(`inside`)) {
    window.location = './go-inside.html';
  } else {
    alert(`I dont' see how ` + userInput + ` will help. Try again.`);
    return false;
  }
}