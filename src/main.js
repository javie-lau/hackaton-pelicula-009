window.onload;


// URL de api OMDb
let omdb = "https://www.omdbapi.com/?s=";

// Página principal. Carrusel.
let home = document.getElementById('root').innerHTML = 
`
<section id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="img/el-hobbit.jpg" class="d-block w-100" alt="el hobbit">
    </div>
    <div class="carousel-item">
      <img src="img/El_Señor_de_los_Anillos.jpg" class="d-block w-100" alt="el señor de los anillos lego">
    </div>
    <div class="carousel-item">
      <img src="img/el-anillo-pa-cuando.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</section>
`
$('.carousel').carousel({
	interval: 2450
  })







  document.getElementById('movies').addEventListener('change', () => {  
    document.getElementById('root').innerHTML = ``; 
    let value = document.getElementById('movies').value;
    fetch(omdb+value+'&apikey=21b45cac')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        data=data.Search;
        const forData = data.forEach(element=> {
                
            root.innerHTML += `<div> <img class="imagen" src="${element.Poster}"> ${element.Title} ${element.Year} </div>`
             console.log(element.img);
       })
    

    })
 
      
})
 