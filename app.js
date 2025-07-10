// 👋 ¡Hola! Este es un juego donde tienes que adivinar el número secreto
console.log("🎯 ¡Bienvenido al juego ADIVINA EL NÚMERO 2.0!");
console.log("Estoy pensando en un número del 1 al 20... 🤔");

// 🧙‍♂️ El juego elige un número secreto del 1 al 20
const numeroSecreto = Math.floor(Math.random() * 20) + 1;

// 🧮 Tienes 5 intentos para adivinar
let intentosRestantes = 5;

// 🚩 Esta bandera nos dice si ya ganaste
let adivinado = false;

// 📋 Aquí vamos guardando los números que intentaste
const historial = [];

// 🚦 Esta función revisa si el número que escribiste es correcto
function validarEntrada(entrada) {
  if (!entrada || entrada.trim() === "") {
    // 😵 Si no escribiste nada, te avisa
    alert("⚠️ ¡No ingresaste nada! Intenta de nuevo. 🚫");
    return false;
  }

  const numero = Number(entrada);

  // 🚫 Si lo que escribiste no es un número válido, te avisa
  if (isNaN(numero) || numero < 1 || numero > 20) {
    alert("🚫 ¡Número inválido! Ingresa un número entre 1 y 20 🔢");
    return false;
  }

  // ✅ Si todo está bien, seguimos
  return true;
}

// 🎮 Aquí es donde jugamos un turno del juego
function jugarTurno() {
  // 🧪 El juego te pregunta por un número
  const entrada = prompt(`🧪 Intento #${6 - intentosRestantes} de 5\nIngresa un número del 1 al 20:`);

  // 🧍 Si escribiste algo mal, se detiene aquí y vuelves a intentar
  if (!validarEntrada(entrada)) return;

  const numero = Number(entrada);

  // 🧾 Guardamos tu número en la lista de intentos
  historial.push(numero);

  console.log(`🔎 Elegiste: ${numero}`);

  // 🎯 Si adivinaste el número secreto
  if (numero === numeroSecreto) {
    alert("🎉 ¡Sí! ¡Lo adivinaste! 🥳");
    console.log("🎯 ¡Victoria!");
    adivinado = true; // ✅ Marcamos que ganaste
  }

  // 📉 Si elegiste un número más pequeño
  else if (numero < numeroSecreto) {
    alert("📉 Muy bajo... ⬇️");
    console.log("👎 El número es mayor.");
  }

  // 📈 Si elegiste un número muy grande
  else {
    alert("📈 Muy alto... ⬆️");
    console.log("👎 El número es menor.");
  }

  // 🔻 Perdemos un intento
  intentosRestantes--;
}

// 🔁 Mientras te queden intentos y no hayas ganado, sigues jugando
while (intentosRestantes > 0 && !adivinado) {
  jugarTurno();
}

// 🏁 Cuando se acaban los turnos, revisamos si ganaste o perdiste
if (!adivinado) {
  alert(`😞 ¡Perdiste! El número correcto era ${numeroSecreto} 🧠`);
  console.log(`❌ Fin del juego. El número secreto era: ${numeroSecreto}`);
} else {
  alert(`✅ Lo lograste en ${6 - intentosRestantes} intento(s) 🎊`);
}

// 🧾 Mostramos los números que probaste
console.log("📜 Historial de tus intentos: " + historial.join(" 🎯 "));

// 🏁 ¡Listo! Terminamos el juego
console.log("🏁 Juego terminado.");
