window.onload = function(){
  var añoDeEstreno = document.querySelector(".año")
  var opcionesFe;
  console.log(añoDeEstreno);
  for (var i = 1950; i < 2020; i++) {
    opcionesFe = '<option>'
    opcionesFe += i
    opcionesFe += "</opciones>"
    añoDeEstreno.innerHTML += opcionesFe
    
  }
  var generoID = new URLSearchParams(location.search).get('idGenero');

  //Esto revisa las condiciones para ejecutar la busqueda
  var buscador = document.querySelector("form.buscador");
  var input = document.querySelector("form.buscador input");
  buscador.onsubmit = function(event){
    if (input.value == "") {
      event.preventDefault();
    } else if (input.value.length < 3) {
      event.preventDefault();
      alert("Debe haber un minimo de 3 letras para buscar");
    }
  }

  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=d8a0184cd857dc924c05b43e5a4f7274")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var generos = data.genres;

      var listado = document.querySelector("select[name='generoincluido']");
      var listado2 = document.querySelector("select[name='generoexcluido']");

      for (var i = 0; i < generos.length ; i++) {
        listado.innerHTML += "<option value='" + generos[i].id + "'>" + generos[i].name + "</option>";
        listado2.innerHTML += "<option value='" + generos[i].id + "'>" + generos[i].name + "</option>";
      }

    })
    .catch(function(error) {
      alert("Error");
    })
  }
