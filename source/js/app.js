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

submit.addEventListener('click', function(evt){
  if (!surName.value && !name.value && !email.value){
    alert('Заполните поля выделенные красным');
  }
  else {
    alert('Успешно отправлены');
  }
});
