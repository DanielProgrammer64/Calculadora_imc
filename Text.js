document.addEventListener("DOMContentLoaded", () => {
  // Código para cálculo de Imc
  // Campo para declaração de variáveis

  let genero = document.getElementById("genero");
  let pesoInput = document.getElementById("peso");
  let alturaInput = document.getElementById("altura");
  let botaoCalcular = document.getElementById("calcular");
  let Paragaph_of_result = document.getElementById("resultado");

  // CAMPO DE DECISÃO CATEGORIA
  botaoCalcular.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Buscando categorias...");

    if (!pesoInput.value) {
      alert("informe o seu peso");
    }

    if (!alturaInput.value) {
      alert("Informe a sua altura");
    }

    let peso = Number(pesoInput.value);
    let altura = Number(alturaInput.value) / 100;
    let result = peso / (altura * altura);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "imc.json");
    xhr.addEventListener("load", () => {
      var resposta = JSON.parse(xhr.responseText);
      console.log(resposta);

      let categoria = "";
      resposta.forEach(item => {
        if (result >= item.imc_minimo && result <= item.imc_maximo) {
          categoria = item.categoria;
        }
      });

      console.info(genero.value);
      console.info(result.toFixed(1));

      Paragaph_of_result.textContent = `Seu Imc:${result.toFixed(1)} 
     \nGênero:${genero.value} \ncategoria:${categoria}`;
    });

    xhr.send();
  });
});
