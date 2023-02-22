document.getElementById("enviar").addEventListener("click", function (event) {
  event.preventDefault();

  const nombres = document.getElementById("nombres").value;
  const nombresArray = nombres.split(",");

  // Se mezclan los nombres en un orden aleatorio
  const nombresMezclados = shuffle(nombresArray);

  const mitad = Math.ceil(nombresMezclados.length / 2);
  const lista1 = nombresMezclados.slice(0, mitad);
  const lista2 = nombresMezclados.slice(mitad);

  const resultado = document.getElementById("resultado");

  if (lista1 == "" && lista2 == "") {
    alert("No se puede crear equipos sin jugadores!");
    resultado.innerHTML = ""

  } else if (lista1 == "" || lista2 == "") {
    alert("Debe haber un mínimo de 2 jugadores!");
    resultado.innerHTML = ""

  } else {
    const lista1HTML =
      "<ul><h5>" +
      lista1.map((nombre) => "<li>" + nombre.trim() + "</li>").join("") +
      "</ul></h5>";

    const lista2HTML =

      "<ul><h5>" +
      lista2.map((nombre) => "<li>" + nombre.trim() + "</li>").join("") +
      "</ul></h5>";

    resultado.innerHTML =

      "<h4>Equipo 1</h4>" +
      lista1HTML +
      "<hr>" +
      "<h4>Equipo 2</h4>" +
      lista2HTML;
  }
});

function shuffle(array) {
  // Función para mezclar los elementos de un array en un orden aleatorio
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
