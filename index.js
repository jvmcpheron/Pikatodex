let apiRoot = "https://pokeapi.co/api/v2/pokemon/";
let searchBtn = document.getElementById("search-btn1");



searchBtn.addEventListener("click" , () =>{
    pokemon = document.getElementById("search1").value;

    localStorage.setItem("Pokemon" , pokemon);
    location.href = "./result.html"
});