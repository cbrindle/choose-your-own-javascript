const submitButton = document.querySelector('.submit');
submitButton.onclick = handleDecision;

function handleDecision(event) {
  event.preventDefault();

  const inputBox = document.querySelector('.user-input');
  let answer = inputBox.value;
  answer = answer.toLowerCase();

  console.log(answer);

  // Queries for index.html
  if (answer.includes(`approach`) || (answer.includes(`liquor`)) || (answer.includes(`cabinet`))) {
    window.location = './liquor-choice.html';
  } else if (answer.includes(`bed`)) {
    window.location = './no-liquor.html';
  } else {
    alert(`I don't see how "` + answer + `" will help. Try again.`);
  }
}