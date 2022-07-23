const form = document.querySelector('.form');
const userName = document.querySelector('#name');
const emailinput = document.querySelector('#email');
const textArea = document.querySelector('#Text-Area');
const errorMessage = document.querySelector('.error-message');
function isemailValid() { }
let email;
form.addEventListener('submit', (events) => {
  events.preventDefault();
  if (userName.value.trim() === '') {
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'name can not be empty';
  } else if (emailinput.value.trim() === '') {
    errorMessage.textContent = 'email can not be empty';
  } else if (!isemailValid(emailinput.value)) {
    errorMessage.textContent = 'email is not valid';
  } else if (textArea.value.trim() === '') {
    errorMessage.textContent = 'text area can not be empty';
  } else {
    errorMessage.style.display = 'none';
  }
});
isemailValid(email);
{
  const re = /^[a-z-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z-Z0-9-]+(?:\.[a-z-Z0-9-]+)*$/;
  return re.test(String(email));
}
