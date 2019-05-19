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

     data.forEach(element=> {
      document.getElementById('root').innerHTML += 
      `
        <div class="col-12-sm col-3 img-fluid""> 
        <img class="image" src="${element.Poster}" alt="${element.Title}"> 
          <h4> ${element.Title}<h4>
        </div>
      `
     })
    })
  })

document.getElementById('movies').addEventListener('change', () => {  
  document.getElementById('root').innerHTML = ``; 
  

})

// Pantalla de about
document.getElementById('about').addEventListener('click', () => {
  document.getElementById('root').innerHTML = 
  `
  <article>
    <h1> ¿Qué es ***? </h1>
    <p>
      Somos una página web diseñada para fanáticos de la saga "el 
      señor de los anillos" y las creaciones de Tolkien en torno a este 
      fantástico mundo.

      Aquí puedes encontrar desde...

      Si clickeas en "A qué personaje te pareces", 
    </p>
  </article>
  `
})

// Evento que devuelve a la pantalla principal
document.getElementById('home').addEventListener('click', () => {
  document.getElementById('root').innerHTML = `${home}`;
})



  document.getElementById('sendUserSearch').addEventListener('click', () => {
    let userWrote = document.getElementById('search').value;
    console.log(userWrote)
  })