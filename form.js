const formField = document.querySelector('.form-field');
const userName = document.querySelector('#name');
const emailinput = document.querySelector('#email');
const textArea = document.querySelector('#Text-Area');
const errorMessage = document.querySelector('.error-message');
function isemailValid() { }
let email;
 const reg = /^([a-z0-9_\-.]+)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
formField.addEventListener('submit', (events) => {
  events.preventDefault();
  if (userName.value.trim() === '') {
  errorMessage.style.display = 'block';
  errorMessage.textContent = 'name can not be empty';
  } else if (emailinput.value.trim() === '') {
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'email can not be empty';
  } else if (!emailinput.value.match(reg)) {
    emailinput.style.borderColor = 'red';
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'email is not valid, please enter a valid email all in lower case';
  } else if (textArea.value.trim() === '') {
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'text area can not be empty';
  } else {
      errorMessage.style.display = 'none';
      formField.submit();
  }
});
