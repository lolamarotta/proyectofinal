window.addEventListener('load',function() {

// API GENEROS

var API_KEY = "d8a0184cd857dc924c05b43e5a4f7274";

// 1. Capturo el id que vino en el query string
var query = new URLSearchParams(location.search);

var idGenero = query.get('idGenero');
var nombreGenero = query.get('nombreGenero');
document.querySelector(".nombre-generos").innerHTML=nombreGenero;

console.log(idGenero);
var URL_GENEROS = 'https://api.themoviedb.org/3/discover/tv?api_key=' + API_KEY + '&sort_by=popularity.desc&page=1&with_genres='+ idGenero;

fetch(URL_GENEROS)
  .then(function(respuesta) {
    return respuesta.json();
  })
  .then(function(datos){
    var arrayDeResultados = datos.results;
    console.log(datos);

var ulGeneros= document.querySelector(".generos")
for (var i = 0; i < arrayDeResultados.length; i++) {
  arrayDeResultados[i]

  var elementsHtml = '<li>';
    elementsHtml += '<div class="uk-panel"'
    elementsHtml += `<a href="detalle.html?id=${datos.results[i].id}">`
    elementsHtml += '<img src="https://image.tmdb.org/t/p/original' + datos.results[i].poster_path + '" elements>'
    elementsHtml += '</div> </li>'
    ulGeneros.innerHTML += elementsHtml
}

    // Array vacio donde metere las series que coincidan con el ide de genero`
  })
  .catch(function(errors) {
    console.log(errors);
  });

  fetch("https://api.themoviedb.org/3/discover/tv?api_key=e31dd59fefbc10e65215ecd077762f57&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_generes="+idGenero+"")
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(datos){
      var arrayDeResultados = datos.results;
      console.log(datos);
      for (var i = 0; i < arrayDeResultados.length; i++) {
        var png = arrayDeResultados[i].poster_path;
        var id = arrayDeResultados[i].id
        document.querySelector(".grid-genero").innerHTML += '<li class="li-item" tabindex="0"><a href="resultados-por-genero.html?idpeli= '+ id +' "><img class="img-li" src="https://image.tmdb.org/t/p/w185'+png+'"></a>'

      }
     })
    .catch(function(errors) {
      console.log(errors);
    });


















})
