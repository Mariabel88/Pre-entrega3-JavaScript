console.log("Bienvenido! Sistema de Puntos y Canje");

// Constantes globales
const anioActual = 2026;
const puntosPorMes = 1000;
const puntosNecesariosParaMovil = 5000;

// 1. FUNCION DE PROCESAMIENTO (Funcion Flecha con return)
const calcularPuntos = (meses, valorPorMes) => {
  return meses * valorPorMes;
};

// 2. FUNCION DE ENTRADA / VALIDACION (Funcion tradicional con return)
function solicitarAnioValido(minimo, maximo) {
  let anio = 0;
  let esValido = false;

  while (!esValido) {
    let entrada = prompt("En que anio naciste?");
    
    // Si el usuario presiona Cancelar o ESC
    if (entrada === null || entrada.toUpperCase() === "ESC") {
      return null;
    }

    anio = parseInt(entrada);

    if (!isNaN(anio) && anio > minimo && anio <= maximo) {
      esValido = true;
    } else {
      alert("Anio invalido. Por favor, ingresa un anio numerico entre " + minimo + " y " + maximo + ".");
    }
  }
  return anio;
}

// 3. FUNCION DE SALIDA (Funcion tradicional)
function evaluarCanje(nombre, puntos, puntosRequeridos) {
  if (puntos >= puntosRequeridos) {
    let puntosRestantes = puntos - puntosRequeridos;
    alert(
      nombre + ", tienes " + puntos + " puntos. Te alcanza para cambiar tu movil! Te quedaran " + puntosRestantes + " puntos."
    );
    console.log("Canje exitoso para " + nombre + ". Puntos restantes: " + puntosRestantes);
  } else {
    let puntosFaltantes = puntosRequeridos - puntos;
    alert(
      nombre + ", tienes " + puntos + " puntos. Aun no te alcanza para el movil. Te faltan " + puntosFaltantes + " puntos."
    );
    console.log("Canje no disponible para " + nombre + ". Faltan: " + puntosFaltantes);
  }
}

// ----------------------------------------------------
// FLUJO PRINCIPAL DEL PROGRAMA
// ----------------------------------------------------

let usuarioNombre = prompt("Cual es tu nombre?");
let usuarioApellido = prompt("Cual es tu apellido?");

// Validamos anio con la funcion
let anioDeNacimiento = solicitarAnioValido(1920, anioActual);

if (anioDeNacimiento !== null) {
  const edad = anioActual - anioDeNacimiento;
  console.log("Usuario registrado: " + usuarioNombre + " " + usuarioApellido + " (" + edad + " anios)");

  let continuar = true;

  while (continuar) {
    let opcion = prompt(
      "Hola " + usuarioNombre + " " + usuarioApellido + " (" + edad + " anios).\n\n" +
      "Selecciona una opcion:\n" +
      "1 - Consultar puntos y canje de movil\n" +
      "2 - Salir\n\n" +
      "(O ingresa 'ESC' para finalizar)"
    );

    if (opcion === "2" || opcion === "ESC" || opcion === "esc" || opcion === null) {
      alert("Gracias por utilizar el sistema, " + usuarioNombre + "!");
      continuar = false;
    } else if (opcion === "1") {
      let mesesPagados = parseInt(prompt("Cuantos meses de factura al dia tienes pagados?"));

      if (!isNaN(mesesPagados) && mesesPagados >= 0) {
        let puntosUsuario = calcularPuntos(mesesPagados, puntosPorMes);
        evaluarCanje(usuarioNombre, puntosUsuario, puntosNecesariosParaMovil);
      } else {
        alert("Por favor, ingresa una cantidad valida de meses.");
      }
    } else {
      alert("Opcion no valida. Por favor, selecciona 1 o 2.");
    }
  }
} else {
  alert("Operacion cancelada.");
}
