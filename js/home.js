window.addEventListener('load',function() {

var API_KEY = "d8a0184cd857dc924c05b43e5a4f7274";
var URL_POPULARES = "https://api.themoviedb.org/3/tv/popular?api_key="+API_KEY+"&page=1";
var URL_MEJOR_PUNTUADAS = "https://api.themoviedb.org/3/tv/top_rated?api_key="+API_KEY+"&page=1";
//URL_MEJOR_PUNTUADAS
//URL_AL_AIRE_HOY

//UL ul-populares

fetch(URL_POPULARES)
  .then(function(response) {
    return response.json();
  })
  .then(function (objetoRespuesta) {
    console.log(objetoRespuesta);

    var arrayDeSeries = objetoRespuesta.results

    for (var i = 0; i < arrayDeSeries.length; i++) {
      var ulPopulares = document.querySelector(".populares")

      var imgURL = "https://image.tmdb.org/t/p/original"+ arrayDeSeries[i].poster_path;

      ulPopulares.innerHTML += `
        <li>
            <a href="detalle.html?id=${arrayDeSeries[i].id}">
             <img src="${imgURL}" alt="">
            </a>
        </li>
      `;
    }

  });


// MEJORES PUNTUADAS
fetch(URL_MEJOR_PUNTUADAS)
  .then(function(respuesta) {
    return respuesta.json();
  })
  .then(function(datos){
    console.log(datos);
  var arrayPuntuadas = datos.results;

  for (var i = 0; i < arrayPuntuadas.length; i++) {
    datos.results[i]
    console.log(datos.results[i].name);
    console.log(datos.results[i].id);
    console.log(datos.results[i].poster_path);

    var ulPuntuadas = document.querySelector(".mayorpuntaje")
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
