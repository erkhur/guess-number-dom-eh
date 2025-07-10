// 👋 ¡Bienvenido al juego ADIVINA EL NÚMERO 2.0 con niveles y reinicio!
console.log("🎯 ¡Bienvenido al juego ADIVINA EL NÚMERO 2.0!");

// 🔁 Función principal que inicia y controla todo el juego
function iniciarJuego() {
  // 🎚️ Preguntamos al jugador qué dificultad quiere: 20 o 100
  const dificultad = prompt("Selecciona dificultad: 🐣 Fácil (20), 😅 Difícil (100)");

  // 🔢 Si elige 100 es difícil, si no, jugamos con 20
  const maxNumero = dificultad === "100" ? 100 : 20;

  // 🧮 Según la dificultad, definimos cuántos intentos tendrá
  const intentosMaximos = dificultad === "100" ? 10 : 5;

  // 🎲 Generamos el número secreto aleatorio entre 1 y el máximo elegido
  let numeroSecreto = Math.floor(Math.random() * maxNumero) + 1;

  // 🔄 Llevamos el conteo de intentos restantes
  let intentosRestantes = intentosMaximos;

  // ✅ Bandera que indica si ya se adivinó el número
  let adivinado = false;

  // 🧾 Lista para guardar los números que el usuario ha intentado
  const historial = [];

  // 📢 Mostramos el rango y cuántos intentos tiene el usuario
  console.log(`Estoy pensando en un número del 1 al ${maxNumero}... 🤔`);
  console.log(`Tienes ${intentosMaximos} intentos.`);

  // ✅ Función que valida si el número ingresado es correcto
  function validarEntrada(entrada) {
    // 🚫 Si no escribe nada, mostramos alerta
    if (!entrada || entrada.trim() === "") {
      alert("⚠️ ¡No ingresaste nada! Intenta de nuevo. 🚫");
      return false;
    }

    // 📥 Convertimos la entrada en número
    const numero = Number(entrada);

    // ❌ Verificamos si el número es inválido (no es número, menor que 1 o mayor que el máximo)
    if (isNaN(numero) || numero < 1 || numero > maxNumero) {
      alert(`🚫 ¡Número inválido! Ingresa un número entre 1 y ${maxNumero} 🔢`);
      return false;
    }

    // ✅ Si pasa todas las validaciones, devolvemos true
    return true;
  }

  // 🕹️ Función que ejecuta un turno del juego
  function jugarTurno() {
    // 📥 Pedimos al usuario que ingrese un número
    const entrada = prompt(`🎲 Intento #${intentosMaximos - intentosRestantes + 1} de ${intentosMaximos}\nIngresa un número del 1 al ${maxNumero}:`);

    // ❌ Si la entrada no es válida, salimos de la función para que vuelva a intentar
    if (!validarEntrada(entrada)) return;

    // 🔢 Convertimos la entrada a número y la guardamos
    const numero = Number(entrada);
    historial.push(numero); // ➕ Agregamos el intento al historial

    console.log(`🔎 Elegiste: ${numero}`); // 👀 Mostramos lo que eligió

    // 🎯 Si el número es correcto, gana
    if (numero === numeroSecreto) {
      alert("🎉 ¡Sí! ¡Lo adivinaste! 🥳");
      console.log("🎯 ¡Victoria!");
      adivinado = true; // ✅ Cambiamos bandera a true para que termine el juego
      return; // 🚪 Salimos del turno
    }

    // 📉 Si el número es menor que el secreto
    else if (numero < numeroSecreto) {
      alert("📉 Muy bajo... ⬇️");
      console.log("👎 El número es mayor.");
    }

    // 📈 Si el número es mayor que el secreto
    else {
      alert("📈 Muy alto... ⬆️");
      console.log("👎 El número es menor.");
    }

    // 🔻 Restamos un intento porque ya jugó este turno
    intentosRestantes--;
  }

  // 🔁 Mientras el jugador tenga intentos y no haya ganado, seguimos jugando
  while (intentosRestantes > 0 && !adivinado) {
    jugarTurno();
  }

  // 🏁 Cuando termina el juego, mostramos si ganó o perdió
  if (!adivinado) {
    alert(`😞 ¡Perdiste! El número correcto era ${numeroSecreto} 🧠`);
    console.log(`❌ Fin del juego. El número secreto era: ${numeroSecreto}`);
  } else {
    alert(`✅ Lo lograste en ${historial.length} intento(s) 🎊`);
  }

  // 🧾 Mostramos todos los intentos que hizo el jugador
  console.log("📜 Historial de tus intentos: " + historial.join(" 🎯 "));

  // 📢 Avisamos que el juego terminó
  console.log("🏁 Juego terminado.");

  // 🔁 Preguntamos si quiere volver a jugar y reiniciamos el juego sin recargar
  const jugarDeNuevo = confirm("¿Quieres jugar otra vez? 🔁");
  if (jugarDeNuevo) {
    iniciarJuego(); // 🔁 Volvemos a llamar a la función principal
  }
}

// 🚀 Llamamos a la función para empezar el juego por primera vez
iniciarJuego();
