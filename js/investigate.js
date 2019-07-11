const submitButton = document.querySelector('.submit');
submitButton.onclick = handleDecision;

function handleDecision(event) {
  event.preventDefault();

  const inputBox = document.querySelector('.user-input');
  let answer = inputBox.value;
  answer = answer.toLowerCase();

  console.log(answer);

  // Queries for index.html
  if (answer.includes(`hide`) || (answer.includes(`bushes`)) || (answer.includes(`scare`))) {
    window.location = './hide.html';
  } else if (answer.includes(`greet`) || answer.includes(`run`)) {
    window.location = './greet.html';
  } else {
    alert(`I don't see how "` + answer + `" will help. Try again.`);
  }
}

// const displayText = document.querySelector('.thisOne')
// displayText.innerText = `It looks like you got a ` + roll + `. You thought it would be funny to jump out and scare your wife, but she failed to swerve in time and ran you over.`
