let apiRoot = "https://pokeapi.co/api/v2/pokemon/";
let pokemon = localStorage.getItem("Pokemon");
let searchBtn2 = document.getElementById("search-btn2");

document.getElementsByClassName("pokemon-name")[0].textContent = pokemon;

var pokeData = fetch(
	'https://pokeapi.co/api/v2/pokemon/' + pokemon.toLowerCase(),
	{
		method: 'GET',
	}
).then(response => response.json() 
).then(data => {
    let pokeNum = data.id;
    let pokeAbility = [data.abilities[0].ability.name , data.abilities[1].ability.name];
    let typeOne = data.types[0].type.name;
    console.log(typeOne)
    let typeTwo = "none";
    if (data.types[1]){
        typeTwo = data.types[1].type.name;
    } 
    console.log(data);
    console.log();
    applyData(pokeNum , pokeAbility, typeOne , typeTwo)
});

function applyData (pokeNum , pokeAbility, typeOne, typeTwo){
    document.getElementById("pokedex-number").textContent = pokeNum;
    document.getElementById("pokemon-abilities").textContent = pokeAbility;
    document.getElementById("pokemon-type1").textContent = typeOne;
    document.getElementById("pokemon-type2").textContent = typeTwo;

}



searchBtn2.addEventListener("click", ()=>{
    console.log("clicked")
    pokemon = document.getElementById("search-2").value;
    localStorage.setItem("Pokemon" , pokemon);
    location.reload();
});