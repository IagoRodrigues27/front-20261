const form = document.querySelector('#loginForm');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const emailErro = document.querySelector('#emailError');
const senhaErro = document.querySelector('#senhaError');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  emailErro.textContent = '';
  senhaErro.textContent = '';

  let formularioValido = true;

  if (email.value.trim() === '') {
    emailErro.textContent = 'O campo de email é obrigatório.';
    formularioValido = false;
  }

  if (senha.value.trim() === '') {
    senhaErro.textContent = 'O campo de senha é obrigatório.';
    formularioValido = false;
  }

  if (formularioValido) {
    window.location.href = 'dashboard.html';
  }
});

email.addEventListener('input', function () {
  if (email.value.trim() !== '') {
    emailErro.textContent = '';
  }
});

senha.addEventListener('input', function () {
  if (senha.value.trim() !== '') {
    senhaErro.textContent = '';
  }
});
