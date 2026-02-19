const numberMin = document.getElementById('min');
const numberMax = document.getElementById('max');
const quantity = document.getElementById('quantity');
const btnSortear = document.getElementById('btn');
const regex = /\D/g;

numberMin.addEventListener('input', () => {
  numberMin.value = numberMin.value.replace(regex, '');
});

btnSortear.addEventListener('click', (event) => {
  event.preventDefault();
  let valueSorteador = quantity.value.trim();

  if (valueSorteador === '') {
    alert('Insira um número válido');
    return;
  }
});
