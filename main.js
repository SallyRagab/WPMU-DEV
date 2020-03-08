// validate email address
const email = document.getElementById('email');

function validation() {
  var emailValue = document.getElementById('email').value;
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (emailValue.match(pattern)) {
    email.classList.remove("is-invalid");
  } else {
    email.classList.add("is-invalid");

  }
}
email.addEventListener('keydown', validation;

// Change color of button when form is filled
var forms = document.querySelectorAll('input');
var button = document.getElementById('button');
var list = [];
function changeColor(){
  for (var i = 0; i < forms.length; i++) {
      var formValue = forms[i].value;
      list.push(formValue);
  }
  if (list not includes('')) {
    button.classList.add('active-btn');
  }
}
input.addEventListener('input', changeColor);

// const name = document.getElementById('name').value;
// const nameValue = document.getElementById('name');
// // const email = document.getElementById('email').value;
// // const option = document.getElementById('optio ').value;
// // const password = document.getElementById('password').value;
// //
// //
// nameValue.addEventListener('input', changeColor);
// // email.addEventListener('input', changeColor);
// // option.addEventListener('input', changeColor);
// // password.addEventListener('input', changeColor);
// //
// function changeColor() {
// //   //var inputValue = document.querySelectorAll('input').value;
//   var button = document.getElementById('button');
// //   // let email = document.getElementById('email').value;
// //   // let option = document.getElementById('option').value;
// //   // let password = document.getElementById('password').value;
//   if ((name == ""){
//      return true;
//   } else {
//     button.classList.add('active-btn');
//   }}
//
//  // && (email == "") && (option == "") && (password == ""))
