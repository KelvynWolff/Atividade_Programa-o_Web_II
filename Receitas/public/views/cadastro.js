/** @format */

function validarCriteriosSenha() {
  const senha = document.getElementById('senha').value;

  const criterios = {
    maiuscula: /[A-Z]/.test(senha),
    minuscula: /[a-z]/.test(senha),
    numero: /\d/.test(senha),
    especial: /[@$!%*?&]/.test(senha),
    tamanho: senha.length >= 6,
  };

  document.getElementById('criterio-maiuscula').style.color =
    criterios.maiuscula ? 'green' : '#888';
  document.getElementById('criterio-minuscula').style.color =
    criterios.minuscula ? 'green' : '#888';
  document.getElementById('criterio-numero').style.color = criterios.numero
    ? 'green'
    : '#888';
  document.getElementById('criterio-especial').style.color = criterios.especial
    ? 'green'
    : '#888';
  document.getElementById('criterio-tamanho').style.color = criterios.tamanho
    ? 'green'
    : '#888';
}

function verificarSenhas() {
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmarSenha').value;
  const aviso = document.getElementById('senhaIgualAviso');

  aviso.style.display =
    senha && confirmarSenha && senha !== confirmarSenha ? 'block' : 'none';
}

function validarFormulario() {
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmarSenha').value;

  const todosCriterios = [
    /[A-Z]/.test(senha),
    /[a-z]/.test(senha),
    /\d/.test(senha),
    /[@$!%*?&]/.test(senha),
    senha.length >= 6,
  ];

  if (todosCriterios.includes(false)) {
    alert('A senha não atende aos critérios necessários.');
    return false;
  }

  if (senha !== confirmarSenha) {
    alert('As senhas não coincidem.');
    return false;
  }

  return true;
}
