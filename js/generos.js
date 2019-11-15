window.addEventListener('load',function() {

// API GENEROS

var API_KEY = "d8a0184cd857dc924c05b43e5a4f7274";
var URL_GENEROS = 'https://api.themoviedb.org/3/genre/tv/list?api_key=' + API_KEY;

var arrayDeImagenes = ['posteraccion.jpg', 'posterdrama.jpg', 'postercomedia.jpg', 'postercrimen.jpg'];

fetch(URL_GENEROS)
  .then(function(respuesta) {
    return respuesta.json();
  })
  .then(function(datos){
    // 1. capturo el elemento donde va a ir la data
    var contenedor = document.querySelector('.generos-lista');

    // 2. genero el contenido final que voy a insertar
    var contenidoParaInsertar = '';

    // 3. itero sobre el array de generos
    for (var i = 0; i < datos.genres.length; i++) {
      // 4. genero el contenido final
      contenidoParaInsertar += '<div class="' + datos.genres[i].name + '">';
      contenidoParaInsertar += '<h2>' + datos.genres[i].name + '</h2>';
      contenidoParaInsertar += '<a href="resultados-por-genero.html?idGenero=' + datos.genres[i].id + '&nombreGenero=' + datos.genres[i].name + '">';
      contenidoParaInsertar += '<img src="images/' + arrayDeImagenes[i] + '" alt="">';
      contenidoParaInsertar += '</a>';
      contenidoParaInsertar += '</div>';
    }
    // 5. inserto todo el contenido html generado de la iteración en el contenedor
    contenedor.innerHTML = contenidoParaInsertar;
  })
  .catch(function(errors) {
    console.log(errors);
  });

















})
