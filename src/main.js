two.innerHTML="";
let type= "";

fetch("https://api.themoviedb.org/3/movie/120?api_key=67e6ed2c457ae100374fe5478a9f4cc6")

    .then(function(response) {
        return response.json();
        console.log(response)
    })
   
    .then(function(data) {
        data=data
        console.log(data);

       const forData = data.forEach(element=> {
                
        two.innerHTML += `<div> <img class="imagen" src="${element.backdrop_path}"> ${element.title_original} </div>`
         console.log(element.img);
   })

 
       })


document.getElementById("Type").addEventListener("change",()=>{
   type= document.getElementById("bat").text;
   

fetch("https://www.omdbapi.com/?s=The+Lord+of+the+Rings&type=movie&apikey=21b45cac")

    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        data=data.Search;
       console.log('data = ',data);
       const forData = data.forEach(element=> {
                
        two.innerHTML += `<div> <img class="imagen" src="${element.Poster}"> ${element.Title} </div>`
         console.log(element.img);
   })

 
       })
    
         })
      
  /*
let type2= "";
document.getElementById("Type").addEventListener("change",()=>{
    type2= document.getElementById("star").text;
    
    two.innerHTML="";   
fetch("https://www.omdbapi.com/?s=star&apikey=21b45cac")

    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        data_s=data.Search;
       console.log('data = ',data);
       const forData = data_s.forEach(element=> {
                 
        two.innerHTML += `<div> <img class="imagen" src="${element.Poster}"> ${element.Title} </div>`
         console.log(element.img);
   })

   
       })
    
         })*/
      