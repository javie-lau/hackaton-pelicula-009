window.onload;


// URL de api OMDb
let omdb = "https://www.omdbapi.com/?s=";;

//data de tmdb
let keyTmdb="api_key=67e6ed2c457ae100374fe5478a9f4cc6";
let tmdb="https://api.themoviedb.org/3/search/movie?"

 
// Página principal. Bienvenida.
let home = document.getElementById('root').innerHTML = 
`
  <article class="welcome-text">
    <h1 style="text-align: center;">¡Bienvenidos!</h1>
    <p>Esta página está dedicada a la comunidad de fans de la saga "El señor de los anillos" y "El hobbit";
    Aquí podrás encontrar información sobre películas, así como también enlaces a páginas donde 
    puedes verlas. Además te invitamos a explorar la galería de arte proveniente de fans como 
    tú, y, el área de comunidad de fans aquí en Chile, donde podrás conectar con otros amantes de la saga.</p>
    <h5>¡Gracias por tu visita!</h5>
  </article>
`

//Devuelve a la página principal.
document.getElementById('home').addEventListener('click', () => {
  document.getElementById('root').innerHTML = `${home}`;
}) 


// document.getElementById('movies').addEventListener('click', () => {
//   document.getElementById('root').innerHTML = 
// })
  //llamado a través del select a data tmdb para las peliculas
  document.getElementById('movie').addEventListener('change', () => {  
    document.getElementById('root').innerHTML = ``; 
    let value = document.getElementById('movie').value;
    
    fetch(tmdb+keyTmdb+value+"&language=es")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        data=data.results;
        console.log(data)
        for(let index in data){
          datatwo=data[index];
          if(datatwo.poster_path === null ){
           continue;
                 }
                 if(datatwo.original_title==="Sagan om Ringen"){
                   continue;
                 }
                 if(datatwo.original_title==="Lord of the Cockrings"){
                   continue;
                 }
                 if(datatwo.original_title === "Lord of the Elves"){
                  continue;
                }
           else{
         
          let poster = "https://image.tmdb.org/t/p/w300"+datatwo.poster_path;
          console.log(datatwo.logo_path);
          document.getElementById('root').innerHTML += 
          ` 
          <div class="poster col-md-4 col-sm-12">
            <a class="btn" data-toggle="modal" data-target="#modal${datatwo.id}"> 
            <div class="poster"> <img class="image" src="${poster}"></div>
            </a>
            <h5 style="text-align:center"> ${datatwo.title}<h5>
          </div> 
        `
        }
      }
        
       })

    
    // Modal
  function modal(theModal){
    theModal.forEach(element =>{
      document.getElementById('movieModalScreen').innerHTML +=
      `
    <!-- Modal -->
    <div id="modal${datatwo.id}" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalScrollableTitle">${datatwo.title}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p> ${datatwo.overview} </p>
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


})



// select de juegos a data Omdb
document.getElementById("games").addEventListener("change",() => {
  


document.getElementById('root').innerHTML = ``;
  
let gameOrMovie = document.getElementById("games").value;
fetch(omdb+gameOrMovie+'&apikey=21b45cac')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    datas=data.Search;
    console.log(datas)
    datas.forEach(element=> {
      document.getElementById('root').innerHTML += 
      `
      <div class="poster col-md-4 col-sm-12"> 
      <a class="btn" data-toggle="modal" data-target="#modal${element.imdbID}"> 
        <img class="image" src="${element.Poster}" alt="${element.Title}"> 
      <h5 style="text-align:center"> ${element.Title}<h5>
      </div>
    `
    })
        // Modal
function modal2(theModal2){
  theModal2.forEach(element =>{
    document.getElementById('movieModalScreen').innerHTML +=
      `
      <!-- Modal -->
      <div id="modal${element.imdbID}" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalScrollableTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p> ${element.overview} </p>
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
modal2(data);
})
})


  
  // Pantalla de galería de arte por fans
  // Pantalla de galería de arte por fans
document.getElementById('fanArt').addEventListener('click', () => {
  document.getElementById('root').innerHTML = 
  `
    <div id="imgFanArt" class="col-md-6 col-sm-12">
      <img src="/img/" alt="" class="img-fluid">
      <img src="/img/una.jpeg" alt="" class="img-fluid">
      <img src="/img/dos.jpeg" alt="" class="img-fluid">
      <img src="/img/tres.jpeg" alt="" class="img-fluid">
      <img src="/img/cuatro.jpeg" alt="" class="img-fluid">
      <img src="/img/cinco.jpeg" alt="" class="img-fluid">
      <img src="/img/seis.jpeg" alt="" class="img-fluid">
      <img src="/img/siete.jpeg" alt="" class="img-fluid">
      <img src="/img/ocho.jpeg" alt="" class="img-fluid">
    </div>
  `
})


  // //Link(?)
  // document.getElementById('comunity').addEventListener('click', () => {
  //   document.getElementById('root').innerHTML = `ss` })