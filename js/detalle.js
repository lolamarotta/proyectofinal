window.addEventListener ('load', function() {

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
    var posterSerie = document.querySelector('.poster');

    if (data.poster_path) {
      posterSerie.innerHTML += '<img src="https://image.tmdb.org/t/p/original' + data.poster_path + '" >'
    }

    detalleSerie.innerHTML += "<h2>" + data.name + "</h2>";
    detalleSerie.innerHTML += "<h4>Genre</h4><p><a href='generos.html'>" + data.genres[0].name + "</a></p>";
    // detalleSerie.innerHTML += "<h4>Genre: <a href='resultados-por-genero.html?idGenero=" + datos.genres[i].id + "&nombreGenero=" + datos.genres[i].name + "'" + data.genre + "</h4>";
    detalleSerie.innerHTML += "<h4>Overview:</h4><p>" + data.overview + "</p>";
    detalleSerie.innerHTML += "<h4>On air since:</h4><p>" + data.first_air_date + "</p>";
    detalleSerie.innerHTML += "<h4>Original language:</h4><p>" + data.original_language + "</p>";
  })
  .catch(function (error) {
    console.log(error);
  });

  // Fetch para trailers
  fetch("https://api.themoviedb.org/3/tv/"+ idSerie +"/videos?api_key=d8a0184cd857dc924c05b43e5a4f7274&language=en-US")
    .then(function(respuesta){
    return respuesta.json();
    })
    .then(function(serieTrailer) {
     console.log(serieTrailer);
     console.log(serieTrailer.results[0].key);
      var urlTrailer = '<iframe width="850" height="472" src="https://www.youtube.com/embed/'+ serieTrailer.results[0].key +'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      document.querySelector(".trailer").innerHTML= urlTrailer;

      })
       .catch(function(error) {
         console.log(error);
        })
  /*
  <iframe width="560" height="315" src="https://www.youtube.com/embed/3EGzHsye71c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  */

  // Fetch para recomendaciones
  fetch("https://api.themoviedb.org/3/tv/" + idSerie + "/recommendations?api_key=" + API_KEY + "&page=1")
    .then(function(rta) {
      return rta.json()
    })
    .then(function(datos){
      var recomendaciones = datos.results
      console.log(recomendaciones);

      for (var i = 0; i < recomendaciones.length; i++) {
        recomendaciones[i]

        var reco = document.querySelector(".recomendaciones");
        var elemento = '<li>'
        elemento += '<div class="uk-panel">'
        elemento += '<a href="detalle.html?id='+datos.results[i].id+'">'
        elemento += '<img src="https://image.tmdb.org/t/p/original'+ datos.results[i].poster_path + '" elements>'
        elemento += '</a> </div> </li>'

          reco.innerHTML += elemento
          // reco.innerHTML += '<li>'
          // reco.innerHTML += '<div class="uk-panel">'
          // reco.innerHTML += '<a href="detalle.html?id='+datos.results[i].id+'">'
          // reco.innerHTML += '<img src="https://image.tmdb.org/t/p/original'+ datos.results[i].poster_path + '" elements>'
          // reco.innerHTML += '</a> </div> </li>'
      }
    })

  })
