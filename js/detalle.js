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

    detalleSerie.innerHTML += "<h2>" + data.name + "</h2>";
  })
  .catch(function (error) {
    console.log(error);
  })
