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
      let roll = Math.ceil(Math.random() * 20 );
      if ((roll >= 1) || (roll <=10)) {
        window.location="./scare-low.html";
      } else if ((roll >= 11) || (roll <=20)) {
        window.location="./scare.success";
      }
  } else {
    alert(`I don't see how "` + answer + `" will help. Try again.`);
  }
}