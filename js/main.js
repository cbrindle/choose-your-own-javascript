const submitButton = document.querySelector('.submit');
submitButton.onclick = handleDecision;

function handleDecision(event) {
  event.preventDefault();

  const inputBox = document.querySelector('.user-input');
  let answer = inputBox.value;
  answer = answer.toLowerCase();

  console.log(answer);

  // Queries for index.html
  if (answer.includes(`car`) || (answer.includes(`investigate`))) {
    window.location = './investigate.html';
  } else if (answer.includes(`inside`)) {
    window.location = './go-inside.html';
  } else {
    alert(`I don't see how "` + answer + `" will help. Try again.`);
  }
}