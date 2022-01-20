let id = 0;
document.getElementById('add').addEventListener('click', ()=> {
let table = document.getElementById('list');
let row = table.insertRow(1);
row.setAttribute('id', `${id}`);
row.insertCell(0).innerHTML = document.getElementById('inventory-id').value;
row.insertCell(1).innerHTML = document.getElementById('product-name').value;
row.insertCell(2).innerHTML = document.getElementById('unit-price').value;
row.insertCell(3).innerHTML = document.getElementById('quantity').value;

document.getElementById('inventory-id').value = '';
document.getElementById('product-name').value = '';
document.getElementById('unit-price').value = '';
document.getElementById('quantity').value = '';
});

