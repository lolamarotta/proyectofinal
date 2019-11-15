window.addEventListener('load',function() {

// API GENEROS

var API_KEY = "d8a0184cd857dc924c05b43e5a4f7274";
var URL_GENEROS = 'https://api.themoviedb.org/3/discover/tv?api_key=' + API_KEY + '&sort_by=popularity.desc&page=1&with_genres=18';

// 1. Capturo el id que vino en el query string
var query = new URLSearchParams(location.search);

var idGenero = query.get('idGenero');

fetch(URL_GENEROS)
  .then(function(respuesta) {
    return respuesta.json();
  })
  .then(function(datos){
    var arrayDeResultados = datos.results;
    console.log(arrayDeResultados);
  })
  .catch(function(errors) {
    console.log(errors);
  });

















})
