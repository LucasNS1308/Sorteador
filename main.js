const numberMin = document.getElementById("min");
const numberMax = document.getElementById("max");
const quantity = document.getElementById("quantity");
const btnSortear = document.getElementById("btn");
const regex = /\D/g;

numberMin.addEventListener("input", () => {
  numberMin.value = numberMin.value.replace(regex, "");
  numberMax.value = numberMax.value.replace(regex, "");
  quantity.value = quantity.value.replace(regex, "");
});

btnSortear.addEventListener("click", (event) => {
  event.preventDefault();
  let valueSorteador = quantity.value.trim();
  let minValue = numberMin.value.trim();
  let maxValue = numberMax.value.trim();

  if (valueSorteador === "") {
    alert("Insira a quantidade de números a serem sorteados");
  } else if (valueSorteador <= 0) {
    alert("Insira um número maior que 0 para o sorteio");
    return;
  } else if (minValue === "") {
    alert("Insira um valor mínimo para o sorteio");
    return;
  } else if (maxValue === "") {
    alert("Insira um valor máximo para o sorteio");
    return;
  } else if (maxValue <= 10) {
    alert("Insira um valor máximo maior que 10 para o sorteio");
    return;
  } else if (minValue >= maxValue) {
    alert("O valor mínimo deve ser menor que o valor máximo para o sorteio");
    return;
  }
});
