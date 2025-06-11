function actualizarReloj() {
    const ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    // Agrega ceros si los números son menores a 10  
    if (horas < 10) horas = "0" + horas;
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;

    const reloj = document.getElementById("reloj");
    reloj.textContent = `🕒 Hora Mística: ${horas}:${minutos}:${segundos}`;
  }

  // Actualizar cada segundo
  setInterval(actualizarReloj, 1000);
  actualizarReloj(); // Mostrarlo al cargar