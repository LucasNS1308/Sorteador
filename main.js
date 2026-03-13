const numberMin = document.getElementById('min'); //INPUTS E LABELS
const numberMax = document.getElementById('max'); //INPUTS E LABELS
const quantity = document.getElementById('quantity'); //INPUTS E LABELS
const btnSortear = document.getElementById('btn'); //BOTÃO DE SORTEIO
const alertMessage = document.querySelector('.message'); //MENSAGEM DE ALERTA PARA O USUARIO
const norepeat = document.getElementById('repeat'); //NAO REPETIR NUMEROS SORTEADOS
const resultSorteio = document.getElementById('result'); //RESULTADO FINAL DO SORTEIO
const styleResultNumber = document.querySelector('.final-number', '.display-number'); //ESTILO DO RESULTADO DO SORTEIIO
const removeForm = document.querySelector('form');
const classRemove = document.querySelector('.info-2');
const removeSpan = document.getElementById('numbers-result');

btnSortear.addEventListener('click', (event) => {
  //EVENTO DE CLIQUE NO BOTAO (SORTEAR)
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

  const resultFinal = numberNoRepeat(quantityValue, maxValue, minValue);
  showResult(resultFinal); //MOSTRAR O RESULTADO DO SORTEIO
});

function showResult(result) {
  //EXIBE OS NUMEROS SORTEADOS NA TELA

  resultSorteio.style.display = 'flex';

  classRemove.style.display = 'none';
  removeForm.style.display = 'none';

  removeSpan.innerHTML = '';

  result.forEach((number) => {
    const span = document.createElement('span');
    span.textContent = number;
    span.classList.add('final-number', 'number-display');
    removeSpan.appendChild(span);
  });
}

//FUNÇÃO CRIADA PARA MOSTRA MENSAGEM DE ERRO
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
