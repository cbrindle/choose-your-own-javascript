const submitButton = document.querySelector('.submit');
submitButton.onclick = handleDecision;

function handleDecision(event) {
  event.preventDefault();

  const inputBox = document.querySelector('.user-input');
  let answer = inputBox.value;
  answer = answer.toLowerCase();

  console.log(answer);

//   Queries for index.html
  if (answer === `roll`) {
      const d20roll = Math.ceil(Math.random() * 20 );
      if ((d20roll >= 1) && (d20roll <=10)) {
        window.location="./scare-low.html";
      } else if ((d20roll >= 11) && (d20roll <=20)) {
        window.location="./scare-success.html";
      }
  } else {
    alert(`I don't see how "` + answer + `" will help. Try again (Psssssst... type "roll" into the text box").`);
  }
}
console.log(d20roll);
