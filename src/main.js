

fetch("https://www.omdbapi.com/?apikey=21b45cac&s=star")
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

    document.getElementById("Type").addEventListener("change",()=>{
        let type= document.getElementById("Type").value;
        let filterTy= window.filterType(data, type);
        two.innerHTML="";
        filterTy.forEach(element=> {
         one.innerHTML += `<div> <img class="imagen" src="${element.Poster}"> ${element.Title} </div>`
       })
    
         })
        })