document.addEventListener("DOMContentLoaded", () => {
  // Código para cálculo de Imc
  // Campo para declaração de variáveis

  let genero = document.getElementById("genero");
  let ButtonSubmit = document.getElementById("submitGender");
  let pesoInput = document.getElementById("peso");
  let alturaInput = document.getElementById("altura");
  let botaoCalcular = document.getElementById("calcular");
  let Coletando_ID_resultado = document.getElementById("resultadoIMC");

  // campo de função do botão
  // cálculo de peso por altura ao quadrado

  botaoCalcular.addEventListener("click", (event) => {
    event.preventDefault();
    console.info(genero.value);
    let peso = Number(pesoInput.value);
    let altura = Number(alturaInput.value) / 100;
    let resultado = peso / (altura * altura);
    console.info(resultado.toFixed(1));
  });

  ButtonSubmit.addEventListener("click", () => {
    if (genero === "Masculino" || genero === "Feminino") {
      alert("Dados coletados com sucesso");
    }
  });
});
