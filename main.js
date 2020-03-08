// validate email address
var email = document.getElementById('email');

function validateEmail() {
  var emailValue = document.getElementById('email').value;
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (emailValue.match(pattern)) {
    email.classList.remove("is-invalid");
  } else {
    email.classList.add("is-invalid");
  }
}

email.addEventListener('keydown', validateEmail);


// // validate password
var password = document.getElementById('password');

function validatePassword() {
  var passwordValue = document.getElementById('password').value;
  if (passwordValue.length >= 7) {
    password.classList.remove("is-invalid");
  } else {
    password.classList.add("is-invalid");
  }
}

password.addEventListener('keydown', validatePassword);


// Change color of button when form is filled
var inputFields = document.querySelectorAll('input');

function changeColor(){
  var button = document.getElementById('button');
  var list = [];
  for (var i = 0; i < inputFields.length; i++) {
      var inputValue = inputFields[i].value;
      list.push(inputValue);
  }
  if (!(list.includes('')) && !(email.classList.contains("is-invalid")) &&  !(password.classList.contains("is-invalid"))) {
    button.classList.add('active-btn');
  } else {
    button.classList.remove('active-btn');
  }
}

for (var i = 0; i < inputFields.length; i++) {
      inputFields[i].addEventListener('input', changeColor);}
