const fail = Math.ceil(Math.random() * 10);

console.log(fail);

const thisText = document.querySelector('.thisOne');
thisText.innerText = `It looks like you rolled a ` + fail + `. You thought it would be funny to jump out and scare your wife, but she failed to swerve in time and ran you over`