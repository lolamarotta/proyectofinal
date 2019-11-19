window.addEventListener('load', function() {

  var contadorPagina = 1;

  // Retorna true o false si un objeto X esta visible POR COMPLETO dentro de la ventana
  function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  }

  // Permite que una funcion se ejecute una unica vez dentro de un plazo de tiempo
  function debounce(unaFuncion, tiempo) {
    let timeoutId;
    return function() {
      if(timeoutId) {
        clearTimeout(timeoutId);
      }
      const context = this;
      const args = arguments;
      timeoutId = setTimeout(function() {
        unaFuncion.apply(context, args);
      }, tiempo);
    }
  }

  // Propiamente la funcion que ejecuta el scroll infinito
  function scrollInfinito() {

    if (contadorPagina < 500) {
      var disparador = document.querySelector(".infinito");

      if (isScrolledIntoView(disparador)) {
        contadorPagina++;
        var API_KEY = "d8a0184cd857dc924c05b43e5a4f7274";

        // 1. Capturo el id que vino en el query string
        var query = new URLSearchParams(location.search);
        var idGenero = query.get('idGenero');
        // var idGenero = query.get('page');
        var URL_GENEROS = "https://api.themoviedb.org/3/search/tv?api_key=" + API_KEY + "&language=en-US&query="+ searchedWord +"&page=" + contadorPagina;

        fetch(URL_GENEROS)
        .then(function(response) {
          return response.json();
        })
        .then(function(resultados) {
          var listadoSeries = resultados.results;
          console.log(listadoSeries);
          var gridGenero = document.querySelector('.grid-genero');
          for (var i = 0; i < listadoSeries.length; i++) {
             gridGenero.innerHTML += '<li class="li-item" tabindex="0"><a href="detalle.html?id='+ listadoSeries[i].id +' "><img class="img-li" src="https://image.tmdb.org/t/p/w185'+ listadoSeries[i].poster_path +'"></a>'
          }
        })

      }
    }
  }

  window.addEventListener('scroll', function(event) {
    var debouncedScrollInfinito = debounce(scrollInfinito, 2000);
    debouncedScrollInfinito();
  })

})
