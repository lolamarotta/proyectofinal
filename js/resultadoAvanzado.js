window.addEventListener('load',function(){

  var search = new URLSearchParams(window.location.search);
  var incluir = search.get('generoincluido')
  console.log(incluir);
  var excluir =search.get('generoexcluido')
  console.log(excluir);
  var orden = search.get('añoElegido')
  console.log(orden);
  var anio =search.get('ordenresultados')
  console.log(anio);

  window.addEventListener('load',function(){

  var search = new URLSearchParams(window.location.search);
  var incluir = search.get('incluir')
  console.log(incluir);
  var excluir = search.get('excluir')
  console.log(excluir);
  var orden = search.get('orden')
  console.log(orden);
  var anio = search.get('anioElegido')
  console.log(anio)

  fetch("https://api.themoviedb.org/3/discover/tv?api_key=a3f9467ae2c29b7ede89cca0ca14d893&language=en-US&sort_by=popularity.desc&first_air_date_year=2019&page=1&with_genres=18&without_genres=")
    .then(function(respuesta){
      return respuesta.json();
  })
  .then(function(datos){
    console.log(datos);

var arrayDeSeries = datos.results
//     var ul = document.querySelector('div.ul')
//     var li = ""
//     //parte fija img
//    var urlIMG = "https://image.tmdb.org/t/p/original/"
//    //recorro el array
// for (var i=0; i < arrayDeSeries.length; i++){
//   if (arrayDeSeries[i].poster_path != null){
//     li = "<li>"
//       li += "<a href='detalle.html?idPelicula="+arrayDeSeries[i].id+"'>"
//       li += "<p>" + arrayDeSeries[i].title + "</p>"
//       li += "<img src = '" + urlImg + arrayDeSeries[i].poster_path + "' style='width:300px;'>"
//       li += "</a>"
//       li += "</li>"
//       ul.innerHTML += li
//  }
