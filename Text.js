document.addEventListener("DOMContentLoaded", () => {
  // Código para cálculo de Imc
  // Campo para declaração de variáveis

  let genero = document.getElementById("genero");
  let pesoInput = document.getElementById("peso");
  let alturaInput = document.getElementById("altura");
  let botaoCalcular = document.getElementById("calcular");
  let Paragaph_of_result = document.getElementById("resultadoIMC");
  const categoria = "";

  // CAMPO DE DECISÃO CATEGORIA
  botaoCalcular.addEventListener("click", () => {
    console.log("Buscando categorias...");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "imc.js");
    xhr.addEventListener("load", function () {
      var resposta = xhr.responseText;
      console.log(resposta);
    });

    xhr.send();
  });

  // campo de função do botão
  // cálculo de peso por altura ao quadrado

  botaoCalcular.addEventListener("click", (event) => {
    event.preventDefault();
    console.info(genero.value);
    let peso = Number(pesoInput.value);
    let altura = Number(alturaInput.value) / 100;
    let resultado = peso / (altura * altura);
    console.info(resultado.toFixed(1));
    Paragaph_of_result.textContent = `Seu Imc:${resultado.toFixed(1)} \r 
   e seu Gênero:${genero.value} categoria:${categoria}`;
  });
});
