window.addEventListener('load',function(){

  var search = new URLSearchParams(window.location.search);
  var incluir = search.get('generoincluido')
  console.log(incluir);
  var excluir = search.get('generoexcluido')
  console.log(excluir);
  var orden = search.get('añoElegido')
  console.log(orden);
  var anio = search.get('ordenresultados')
  console.log(anio);


  fetch("https://api.themoviedb.org/3/discover/tv?api_key=a3f9467ae2c29b7ede89cca0ca14d893&language=en-US&sort_by="+orden+"&first_air_date_year="+ anio + "&page=1&with_genres="+incluir+"&without_genres="+excluir)
    .then(function(respuesta){
      return respuesta.json();
  })
  .then(function(datos){
    // console.log(datos);

    var arrayDeSeries = datos.results
    console.log(arrayDeSeries);
    var ul = document.querySelector('.resultados')
    console.log(ul)
    var li = ""
     //parte fija img
     var urlIMG = "https://image.tmdb.org/t/p/original/"
    //recorro el array
 for (var i=0; i < arrayDeSeries.length; i++){

      li = "<li>"
       li += "<a href='detalle.html?id="+arrayDeSeries[i].id+"'>"
       // li += "<p>" + arrayDeSeries[i].original_name + "</p>"
       li += "<img src = '" + urlIMG + arrayDeSeries[i].poster_path + "' style='width:310px;'>"
       li += "</a>"
       li += "</li>"
       ul.innerHTML += li;

 }
})
})
