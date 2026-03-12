const numberMin = document.getElementById('min');
const numberMax = document.getElementById('max');
const quantity = document.getElementById('quantity');
const btnSortear = document.getElementById('btn');
const regex = /\d/g;
const alertMessage = document.querySelector('.message');
const norepeat = document.getElementById('repeat');
const resultSorteio = document.getElementById('result');

btnSortear.addEventListener('click', (event) => {
  event.preventDefault();
  const quantityValue = parseInt(quantity.value);
  const minValue = parseInt(numberMin.value);
  const maxValue = parseInt(numberMax.value);

  if (maxValue <= minValue) {
    showError('O valor máximo dever ser maior');
    return;
  }

  if (norepeat.checked && quantityValue > maxValue - minValue + 1) {
    showError('A quantidade deve ser menor que o valor do intervalo');
    return;
  }
});

function showError(message) {
  alertMessage.classList.add('message-error');
  alertMessage.textContent = message;
  alertMessage.style.display = 'flex';
  setTimeout(() => {
    alertMessage.classList.remove('message-error');
    alertMessage.style.display = 'none';
  }, 2000);
}

//FUNÇÃO PARA RECEBER UM VALOR MININO E MÁXIMO
function generatorNumber(minValue, maxValue) {
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

//FUNÇÃO CRIADA PARA NAO REPETIR OS NUMEROS SORTEADOS
function numberNoRepeat(quantityValue, maxValue, minValue) {
  const saveNumber = [];

  while (saveNumber.length < quantityValue) {
    let sorteio = generatorNumber(minValue, maxValue);
    if (!saveNumber.includes(sorteio)) {
      saveNumber.push(sorteio);
    }
  }

  return saveNumber;
}

function showResult(result) {
  resultSorteio.classList.add('hidden');
}
