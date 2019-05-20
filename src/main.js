window.onload;


// URL de api OMDb
let omdb = "https://www.omdbapi.com/?";

//otra data
let tmdb="api_key=67e6ed2c457ae100374fe5478a9f4cc6";
fetch("https://api.themoviedb.org/3/search/movie?"+ tmdb+"&query=Lord+Of+The+rings")
.then(function(response) {
    return response.json();
})
.then(function(data){
    datas=data;
    console.log(datas)
})

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

  document.getElementById('others').addEventListener('change', () => {  
    document.getElementById('root').innerHTML = ``; 
    let value = document.getElementById('movies').value;
    let gameOrMovie = document.getElementById('others').value;
    fetch(omdb+gameOrMovie+value+'&apikey=21b45cac')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        data=data.Search;
        data.forEach(element=> {
          document.getElementById('root').innerHTML += 
          `
          <div class="col-12-sm col-4 img-fluid""> 
          <img class="image" src="${element.Poster}" alt="${element.Title}"> 
            <h5> ${element.Title}<h5>
          </div>
        `
       })
      })
    })

    
    // Modal
  function modal(theModal){
    theModal.forEach(element =>{
      document.getElementById('movieModalScreen').innerHTML +=
      `
    <!-- Modal -->
    <div class="modal fade" id="modal${element.imdbID}" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalScrollableTitle">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
      `
    })
  }
  modal(data);

  
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
  
  document.getElementById('home').addEventListener('click', () => {
    document.getElementById('root').innerHTML = `${home}`;
  })
  
  
  
    document.getElementById('sendUserSearch').addEventListener('click', () => {
      let userWrote = document.getElementById('search').value;
      console.log(userWrote)
    })     