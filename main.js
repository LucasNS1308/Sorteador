const numberMin = document.getElementById('min'); //INPUTS E LABELS
const numberMax = document.getElementById('max'); //INPUTS E LABELS
const quantity = document.getElementById('quantity'); //INPUTS E LABELS

const btnSortear = document.getElementById('btn'); //BOTÃO DE SORTEIO
const alertMessage = document.querySelector('.message'); //MENSAGEM DE ALERTA PARA O USUARIO
const norepeat = document.getElementById('repeat'); //NAO REPETIR NUMEROS SORTEADOS

const resultSorteio = document.getElementById('result'); //RESULTADO FINAL DO SORTEIO
const styleResultNumber = document.querySelector('.final-number', '.display-number'); //ESTILO DO RESULTADO DO SORTEIIO
const removeForm = document.querySelector('form'); //Remover formularios após o Sorteio
const classRemove = document.querySelector('.info-2');
const removeSpan = document.getElementById('numbers-result');
const SortearNovamente = document.getElementById('btn-restart');
const MenuSorteio = document.getElementById('numbers');

//EVENTO DE CLIQUE NO BOTAO (SORTEAR)
btnSortear.addEventListener('click', (event) => {
  event.preventDefault();
  const quantityValue = parseInt(quantity.value);
  const minValue = parseInt(numberMin.value);
  const maxValue = parseInt(numberMax.value);

  if (isNaN(minValue) || isNaN(maxValue) || isNaN(quantityValue)) {
    showError('Digite os valores no campo');
    return alertMessage;
  }

  if (maxValue <= minValue) {
    showError('O valor máximo dever ser maior');
    return alertMessage;
  }

  if (norepeat.checked && quantityValue > maxValue - minValue + 1) {
    showError('A quantidade deve ser menor que o valor do intervalo');
    return alertMessage;
  }

  const resultFinal = norepeat.checked
    ? numberNoRepeat(quantityValue, minValue, maxValue)
    : repeatNumber(quantityValue, minValue, maxValue);
  showResult(resultFinal);
});

//LIMPAR E SORTEAR NOVAMENTE...
SortearNovamente.addEventListener('click', (event) => {
  event.preventDefault();

  removeSpan.innerHTML = '';
  resultSorteio.style.display = 'none';

  classRemove.style.display = 'flex';
  removeForm.style.display = 'flex';
});

function showResult(result) {
  //EXIBE OS NUMEROS SORTEADOS NA TELA

  resultSorteio.style.display = 'flex';

  classRemove.style.display = 'none';
  removeForm.style.display = 'none';

  removeSpan.innerHTML = '';
  styleResultNumber.classList.add('span');

  result.forEach((number) => {
    const span = document.createElement('span');
    span.textContent = number;
    span.classList.add('final-number', 'number-display');
    removeSpan.appendChild(span);
  });

  showSucess('Números sorteados com sucesso.');
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

function showSucess(sucess) {
  alertMessage.classList.add('message-sucess');
  alertMessage.textContent = sucess;
  alertMessage.style.display = 'flex';
  setTimeout(() => {
    alertMessage.classList.remove('message-sucess');
    alertMessage.style.display = 'none';
  }, 4000);
}

//FUNÇÃO PARA RECEBER UM VALOR MININO E MÁXIMO
function generatorNumber(minValue, maxValue) {
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

//FUNÇÃO CRIADA PARA NAO REPETIR OS NUMEROS SORTEADOS
function numberNoRepeat(quantityValue, minValue, maxValue) {
  const saveNumber = [];

  while (saveNumber.length < quantityValue) {
    let sorteio = generatorNumber(minValue, maxValue);
    if (!saveNumber.includes(sorteio)) {
      saveNumber.push(sorteio);
    }
  }

  return saveNumber;
}

//FUNÇÃO CRIADA PARA REPETIR NUMEROS
function repeatNumber(quantityValue, minValue, maxValue) {
  const saveRepeat = [];

  for (let i = 0; i < quantityValue; i++) {
    let sorteio = generatorNumber(minValue, maxValue);
    saveRepeat.push(sorteio);
  }

  return saveRepeat;
}
