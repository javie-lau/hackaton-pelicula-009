two.innerHTML="";
let type= "";

document.getElementById("Type").addEventListener("change",()=>{
   type= document.getElementById("bat").text;
   

fetch("https://www.omdbapi.com/?s=batman&apikey=21b45cac")

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
    
         })
      