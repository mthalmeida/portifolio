//  Botão de entrar do formulário de email e senha.
const emailDeLiberacao = 'harrypotter@trybewarts.com';
const senhaDeLiberacao = '123456';

function entrar() {
  const emailDeAcesso = document.getElementById('email').value;
  const senhaDeAcesso = document.getElementById('senha').value;

  if (emailDeAcesso === emailDeLiberacao && senhaDeAcesso === senhaDeLiberacao) {
    alert('Muito bem vindo, Harry!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

document.getElementById('btn-entrar').addEventListener('click', entrar);

const agreement = document.getElementById('agreement');
agreement.onchange = function enableDisable() {
  const enableSubmit = document.getElementById('submit-btn');
  if (this.checked) {
    enableSubmit.disabled = false;
  } else {
    enableSubmit.disabled = true;
  }
};

