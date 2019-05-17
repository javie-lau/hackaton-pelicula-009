window.onload;

document.getElementById('root').innerHTML = 
`    
    <!-- Botones para compartir -->
<div class="shared-panel">
<span>Compartir</span><br>
    <a target="_blank" class="shared fb" title="Facebook"></a>	
    <a target="_blank" class="shared tt" title="Twitter"></a>
    <a target="_blank" class="shared gp" title="Google+"></a>
    <a  data-action='share/whatsapp/share' class="shared wa" title="WhatsApp"></a>
    <a target="_blank" class="shared ce" id="sml" title="Email"></a>		
</div>
`

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