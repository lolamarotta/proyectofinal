var urlParams = new URLSearchParams(location.search);

var idSerie =  urlParams.get("id");

console.log(idSerie);

var API_KEY = "d8a0184cd857dc924c05b43e5a4f7274"
var URL_DETALLE = `https://api.themoviedb.org/3/tv/${idSerie}?api_key=${API_KEY}&language=en-US`;

fetch(URL_DETALLE)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // cosas para meter en el html el contenido
    var detalleSerie = document.querySelector('.detalle-serie');

    if (data.poster_path) {
      detalleSerie.innerHTML += '<img src="https://image.tmdb.org/t/p/original' + data.poster_path + '" >'
    }

    detalleSerie.innerHTML += "<h2>" + data.name + "</h2>";
    detalleSerie.innerHTML += "<h4>Overview:</h4><p>" + data.overview + "</p>";
    detalleSerie.innerHTML += "<h4>First air date:</h4><p>" + data.first_air_date + "</p>";
    detalleSerie.innerHTML += "<h4>Original language:</h4><p>" + data.original_language + "</p>";
  })
  .catch(function (error) {
    console.log(error);
  })
