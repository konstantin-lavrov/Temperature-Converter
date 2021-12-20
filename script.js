const celsius = document.getElementById("celsius-el");
const fahrenheit = document.getElementById("fahrenheit-el");

function celToFar() {
  let result = parseFloat(celsius.value) * 1.8 + 32;
  fahrenheit.value = parseFloat(result.toFixed(1));
}

function farToCel() {
  let result = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
  celsius.value = parseFloat(result.toFixed(1));
}
