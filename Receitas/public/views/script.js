/** @format */

// Função para abrir o popup
function abrirPopup() {
  document.getElementById('popup').style.display = 'flex';
}

// Função para fechar o popup
function fecharPopup() {
  document.getElementById('popup').style.display = 'none';
}

function preverImagem(event) {
  const leitor = new FileReader();
  leitor.onload = function () {
    const output = document.getElementById('previsao-foto');
    output.src = leitor.result;
    output.style.display = 'block';
  };
  leitor.readAsDataURL(event.target.files[0]);
}

// Função para adicionar novo grupo de campos de ingrediente
function adicionarIngrediente() {
  const container = document.getElementById('container-ingredientes');
  const grupoIngrediente = document.createElement('div');
  grupoIngrediente.className = 'mb-3 grupo-ingrediente';
  grupoIngrediente.innerHTML = `
    <label class="form-label">Ingrediente</label>
    <input type="text" class="form-control mt-2" placeholder="Ingrediente">
    <input type="text" class="form-control mt-2" placeholder="Peso">
    <select class="form-select mt-2">
      <option value="Quilo">Quilo</option>
      <option value="Grama">Grama</option>
      <option value="mg">Miligrama</option>
      <option value="Litro">Litro</option>
      <option value="ml">Mililitro</option>
      <option value="Xícara">Xícara</option>
      <option value="Colher de Sopa">Colher de Sopa</option>
      <option value="Colher de Chá">Colher de Chá</option>
      <option value="Unidade">Unidade</option>
      <option value="Pitada">Pitada</option>
      <option value="Copo">Copo</option>
    </select>
  `;
  container.appendChild(grupoIngrediente);
}

// Função para enviar o formulário
function enviarFormulario(event) {
  event.preventDefault();

  // Captura dos dados do formulário
  const titulo = document.getElementById('titulo').value;
  const resumo = document.getElementById('resumo').value;
  const foto = document.getElementById('previsao-foto').src;
  const quantidade = document.getElementById('quantidade').value;
  const modoPreparo = document.getElementById('modo_preparo').value;

  // Coleta dos ingredientes
  const elementosIngrediente = document.querySelectorAll(
    '#container-ingredientes .grupo-ingrediente'
  );
  const ingredientes = Array.from(elementosIngrediente).map((grupo) => {
    const ingrediente = grupo.querySelector(
      'input[placeholder="Ingrediente"]'
    ).value;
    const peso = grupo.querySelector('input[placeholder="Peso"]').value;
    const unidade = grupo.querySelector('select').value;
    return { ingrediente, peso, unidade };
  });
}
