
const addBtn = document.getElementsByClassName('.btn-success');
const updateBtn = document.getElementsByClassName('.btn-warning');
const deleteBtn = document.getElementsByClassName('.btn-danger');
const table = document.getElementsByClassName('.table tbody');

function addUser(){

    const name = document.getElementsByClassName('.input-text');
    const email = document.getElementsByClassName('.input-email');
    const pass = document.getElementsByClassName('.input-pass');

    const newRow = `
    <tr>
      <th scope="row">${++userId}</th>
      <td>${name}</td>
      <td>${email}</td>
      <td>${pass}</td>
      <td> 
        <a href="#"><button type="button" class="btn btn-warning">Update</button></a>
        <a href="#"><button type="button" class="btn btn-danger">Delete</button></a>
      </td>
    </tr>
  `;

  // adiciona a nova linha de tabela à tabela
  table.insertAdjacentHTML('beforeend', newRow);

  // limpa os campos de entrada
  document.querySelector('.input-text').value = '';
  document.querySelector('.input-email').value = '';
  document.querySelector('.input-pass').value = '';

}

// adiciona um evento de clique para o botão "Adicionar"
addBtn.addEventListener('click', addUser);

function updateUser(){

}

function deleteUser(){

}