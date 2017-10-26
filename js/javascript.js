function soloDigitos(e, t){
  try {
    if (window.event) {
      var charCode = window.event.keyCode;
    }
    else if (e) {
      var charCode = e.which;
    }
    else { return true; }
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
    return true;
    else
    return false;
  }
  catch (err) {
    alert(err.Description);
  }
}

function soloNumeros(e) {
    var keychar;
    var teclanum;

    teclanum = e.which;
    keychar = String.fromCharCode(teclanum);

    if (keychar < "0" || keychar > "9") {
        return false;
    } else {
        return true;
    }
}

function comprobarNombre() {
  var nombreValor = document.FormEncuesta.Izena.value;
  var nombreLongitud = document.FormEncuesta.Izena.value.length;

  if ((nombreLongitud == 0) || (nombreValor === "")) {
    alert("¡No has introducido nada en 'Izena'!");
    return false;
  } else {
    return true;
}
}

function comprobarEdad() {
  var edadValor = document.FormEncuesta.Adina.value;
  var edadLongitud = document.FormEncuesta.Adina.value.length;

  if ((edadLongitud == 0) || (edadValor === "")) {
    alert("¡No has introducido una edad!");
    return false;
  } else {
    if ((edadValor < 10) || (edadValor > 80)) {
      alert("¡La edad debe ser entre 10 y 80!");
      return false;
    } else {
      return true;
    }
  }
}

function comprobarValoracion() {
  var valoracionValor = document.FormEncuesta.Balorazioa.value;
  var valoracionLongitud = document.FormEncuesta.Balorazioa.value.length;

  if ((valoracionLongitud == 0) || (valoracionValor === "")) {
    alert("¡No has introducido una valoración!");
    return false;
  } else {
    if ((valoracionValor < 1) || (valoracionValor > 10)) {
      alert("¡La valoración debe ser entre 1 y 10!");
      return false;
    } else {
      return true;
    }
  }
}

function Validar() {
  if (comprobarNombre() && comprobarEdad() && comprobarValoracion()) {
    return true;
  } else {
    return false;
  }
}

function cambiarEstilo(tamanio) {
var todosTextos = document.getElementsByName("textop");
  for (i = 0; i < todosTextos.length; i++) {
      todosTextos[i].style.fontSize = tamanio;
  }
}

function deletrear() {
  var textoRecogido = document.getElementById("palabra").value;
  var arr1 = [...textoRecogido];
  document.getElementById("ZonaBotones").innerHTML = "";
  for (i = 0; i < arr1.length; i++) {
    document.getElementById("ZonaBotones").innerHTML += ("<button>" + arr1[i]) + "</button>";
  }
}

function cambiarImagen() {
  document.getElementById("irudia").src = "bulls.png";
}

function volverAimagen() {
  document.getElementById("irudia").src = "celtics.jpg";
}
