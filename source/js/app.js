//menu://
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--no-js');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

//form://

var surName = document.querySelector('#sur-name');
var name = document.querySelector('#name');
var email = document.querySelector('#mail');
var submit = document.querySelector('.contest-form__submit-button');
var Success = document.querySelector('.popup-success');
var Error = document.querySelector('.popup-error');
var Close = document.querySelector('.popup__button');

submit.addEventListener("click", function(event){
  event.preventDefault();
  if (surName.value && Name.value && email.value){
    Success.classList.add('popup-success--alert');
  }
  else{
    Error.classList.add('popup-error--alert');
  }
});

Close.addEventListener("click", function(event){
  event.preventDefault();
  Success.classList.remove('popup-success--alert');
  Error.classList.remove('popup-error--alert');
});
