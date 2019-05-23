window.onload;


// URL de api OMDb
let omdb = "https://www.omdbapi.com/?s=";;

//data de tmdb
let keyTmdb="api_key=67e6ed2c457ae100374fe5478a9f4cc6";
let tmdb="https://api.themoviedb.org/3/search/movie?"

 
// Página principal. Bienvenida.
let home = document.getElementById('root').innerHTML = 
`
<div class="container col-12 ">
  <article class="welcome-text ">
  
    <h1 style="text-align: center;">¡Bienvenidos!</h1>
    <p>Esta página está dedicada a la comunidad de fans de la saga "El señor de los anillos" y "El hobbit";
    Aquí podrás encontrar información sobre películas, así como también enlaces a páginas donde 
    puedes verlas. Además te invitamos a explorar la galería de arte proveniente de fans como 
    tú, y, el área de comunidad de fans aquí en Chile, donde podrás conectar con otros amantes de la saga.</p>
    <h5>¡Gracias por tu visita!</h5>
    
  </article>
  </div>
  
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
            <a class="btn" data-toggle="modal" > 
            <div class="poster"> <img class="image" src="${poster}"></div>
            </a>
            <h5 style="text-align:center"> ${datatwo.title}<h5>
           
             <p style="text-align:center"> ${datatwo.overview}</p>
             <p style="text-align:center"> fecha de estreno ${datatwo.release_date}</p>
          </div> 
        `
        }
      }
        
       })

    
    // Modal
 


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
    for (let index in datas){
      dataGame= datas[index];
      if(dataGame.Title=== "The Lord of the Rings: The Battle for Middle-earth II - The Rise of the Witch-king"){
        continue;
      }
      if(dataGame.Title==="The Lord of the Rings: War in the North"){
        continue;
      }
      if(dataGame.Title==="The Lord of the Rings: The Battle for Middle-Earth"){
        continue;
      }
      if(dataGame.Title=== "The Lord of the Rings: The Third Age"){
        continue;
      }
      if(dataGame.Title=== "The Lord of the Rings Online"){
        continue;
      }
      else{
        document.getElementById('root').innerHTML += 
        `
        <div class="poster col-md-4 col-sm-12"> 
        <a class="btn" data-toggle="modal" data-target="#modal${dataGame.imdbID}"> 
          <img class="image" src="${dataGame.Poster}" alt="${data.Title}"> 
        <h5 style="text-align:center"> ${dataGame.Title}<h5>
        </div>
      `

      }
    
    
     
    }
 
})
})


  
  // Pantalla de galería de arte por fans
 // Pantalla de galería de arte por fans
document.getElementById('fanArt').addEventListener("click", () => {
  document.getElementById('root').innerHTML = 
  `
    <div id="imgFanArt" class="offset-4 col-md-4 col-sm-12">
    <div class= "container"> 
      <img src="https://i.ibb.co/nQQJtp3/fanart2.jpg" class="img-fluid">
      <img src="https://i.ibb.co/4j8s1Rj/fanart8.jpg" alt="" class="img-fluid">
      <img src="https://i.ibb.co/bbwCGR4/fanart7.png" alt="" class="img-fluid">
      <img src="https://i.ibb.co/B3J43Cq/fanart4.jpg" alt="" class="img-fluid">
      <img src="https://i.ibb.co/5F6tn2n/fanart5.jpg" alt="" class="img-fluid">
      <img src="https://i.ibb.co/Jz1vXV7/fanart6.jpg" alt="" class="img-fluid">
      <img src="https://i.ibb.co/MkpXVZR/fanart1.jpg" alt="" class="img-fluid">
      <img src="https://i.ibb.co/WByXLLV/fanart3.jpg" alt="" class="img-fluid">
      <img src="https://i.ibb.co/h1Vtk63/fanart9.jpg" alt="" class="img-fluid">
      </div>
    </div>
  `
})

 // movie link
 document.getElementById("comunity").addEventListener("click", () => {
  document.getElementById('root').innerHTML = 
  `
  <div>
  <h1>Unete a la comunidad en facebook</h1>
  <a href="https://m.facebook.com/TolkienChile/">
  STC Sociedad Tolkien Chilena</a>
  <br>
  <a href="https://m.facebook.com/groups/sdlalcgcomunidadchile">El Señor de los Anillos LCG Comunidad Chile</a>
  <br>
  <a href="https://www.instagram.com/tolkienchile/?igshid=1nd1oga0k07mz">tolkienchile
  </a>
  <br>
  <a href="https://www.instagram.com/ohtarima/?igshid=1mua1lb1oqwci">ohtarima
  </a>
  <br>
  <a href="https://instagram.com/montaracesdeithilien?igshid=1k8mihjyauyn1">montaracesdeithilien
  </a>
  <br>
  <a href="https://instagram.com/smialerumeos?igshid=a3aybnlfcvde">smialerumeos</a>
  </div>
<br>
  <section col-12>
  <div>
  <br>
  <h3>Si quieres ver alguna pelicula de la trilogía</h3>
  </div>
  <div>
  
  <br> <br>
  <a href="http://miradetodo.net/el-senor-de-los-anillos-la-comunidad-del-anillo-2001-720p-hd/"><h6>Link1, La comunidad del anillo</h6></a>
  <br>
  <a href="http://pelisplus.co/pelicula/el-senor-de-los-anillos-1-la-comunidad-del-anillo/"><h6>Link2 La comunidad del anillo</h6></a>
  <br>
  <a href="http://https://www.pelisplay.tv/pelicula/el-senor-de-los-anillos-1-la-comunidad-del-anillo"><h6>Link3 La comunidad del anillo</h6></a>
  </div>
  <br>
  <div>
  <a href="http://miradetodo.net/el-senor-de-los-anillos-las-dos-torres-2002-720p-hd/"><h6>El señor de los anillos: Las dos tores</h6></a>
  </div>
  <br>
  <div>
  <a href="http://miradetodo.net/el-senor-de-los-anillos-el-retorno-del-rey-2003-720p-hd/"><h6>El señor de los anillos: El retorno del rey</h6></a>
  </div>
  <section>
  `
})