window.addEventListener('load',function() {

// API GENEROS

var API_KEY = "d8a0184cd857dc924c05b43e5a4f7274";
var URL_GENEROS = "https://api.themoviedb.org/3/discover/tv?api_key="+API_KEY+"&sort_by=popularity.desc&page=1&with_genres=18";

fetch(URL_GENEROS)
  .then(function(respuesta) {
    return respuesta.json();
  })
  .then(function(datos){
    console.log(datos);
  var arrayGeneros = datos.results;

  for (var i = 0; i < arrayGeneros.length; i++) {
    datos.results[i]
    console.log(datos.results[i].name);
    console.log(datos.results[i].id);
    console.log(datos.results[i].poster_path);

    var ulPuntuadas = document.querySelector(".generos")
    var elementsHtml = '<li>';
      elementsHtml += '<div class="uk-panel"'
      elementsHtml += '<a href="detalle.html?id=${datos.results[i].id}">'
      elementsHtml += '<img src="https://image.tmdb.org/t/p/original' + datos.results[i].poster_path + '" elements>'
      elementsHtml += '</div> </li>'
      ulPuntuadas.innerHTML += elementsHtml
    }
  })
  .catch(function(errors) {
    console.log(errors);
  });

















})
