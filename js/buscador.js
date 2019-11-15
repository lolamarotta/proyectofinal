window.addEventListener('load',function() {

// Searchbar
var apikey= "6695f769d740495966218b5ad75558be";
var searchParams = new URLSearchParams(window.location.search);
var searchedWord = searchParams.get('searchbox')
console.log(searchedWord);
var buscador= document.querySelector ('.searchForm');
fetch("https://api.themoviedb.org/3/search/tv?api_key="+apikey+"&language=en-US&query="+searchedWord+"&page=1")
  .then(function (res) {
    return res.json();
  })
  .then(function (informacion) {
    console.log(informacion);
    var ul = document.querySelector(".resultados")
    var elementsHtml = '';
    for (var i = 0; i < informacion.results.length; i++) {
      // console.log(informacion.results[i].name);
      // console.log(informacion.results[i].id);
      // console.log(informacion.results[i].poster_path);
       elementsHtml += <div class="resultados uk-card uk-card-default uk-card-body uk-width-1-5">
       elementsHtml += '<img src="https://image.tmdb.org/t/p/original' + informacion.results[i].poster_path + '" >'
       elementsHtml += '</div>'

});
