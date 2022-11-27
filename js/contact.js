// jquery code validates contact form
$(document).ready(function () {
  $('#namecheck').hide();
  $('#emailcheck').hide();
  $('#messagecheck').hide();

  function validateName() {
    const name = $('#name').val();
    if (name.length == 0) {
      $('#namecheck').show();
      return false;
    }
    return true;
  }

  function validateEmail() {
    const email = $('#email').val();
    const regexp = new RegExp("^[A-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Z0-9.-]+$");
    if (email.length == 0 || regexp.test(email)) {
      $('#emailcheck').show();
      return false;
    }
    return true;
  }

  function validateMessage() {
    const message = $('#message').val();
    if (message.length == 0) {
      $('#messagecheck').show();
      return false;
    }
    return true;
  }

  // accessible for both click and keypress
  $('.btn-submit').click(function (e) {
    validateName();
    validateEmail();
    validateMessage();

    if (validateName() && validateEmail() && validateMessage()) {
      return true;
    }
    return false;
  });
});
