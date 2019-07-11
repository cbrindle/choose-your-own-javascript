const submitButton = document.querySelector('.submit');
submitButton.onclick = handleDecision;

function handleDecision(event) {
  event.preventDefault();

  const inputBox = document.querySelector('.user-input');
  let answer = inputBox.value;
  answer = Number(answer);

  console.log(answer);

  // Queries for index.html
  if ("answer" === 1) {
      window.location = './small-glass.html';
  } else if (answer === 2) {
      window.location = "./medium-glass.html";
  } else if (answer === 3) {
      window.location = "./large-glass.html";
  } else {
      alert(`I don't see how "` + answer + `" will help. Try again.`);
  }
}