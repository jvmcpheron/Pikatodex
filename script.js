let apiRoot = "https://pokeapi.co/api/v2/pokemon/";
let pokemon = localStorage.getItem("Pokemon");
let searchBtn2 = document.getElementById("search-btn2");

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
    let pokeName = data.species.name;
    let pokeHeight = data.height;
    let pokeWeight = data.weight;
    let pokeHP = data.stats[0].base_stat;
    let pokeAtk = data.stats[1].base_stat;
    let pokeDef = data.stats[2].base_stat;
    let pokeSpAtk = data.stats[3].base_stat;
    let pokeSpDef = data.stats[4].base_stat;
    let pokeSpd = data.stats[5].base_stat;
    let pokeTtlStat = pokeHP + pokeAtk + pokeSpAtk + pokeDef + pokeSpDef + pokeSpd;
    console.log(data);
    console.log();
    applyData(pokeNum , pokeAbility, typeOne , typeTwo , pokeName , pokeHeight , pokeWeight, pokeHP , pokeAtk , pokeDef , pokeSpAtk , pokeSpDef , pokeSpd , pokeTtlStat);
});

var pokeImageData = fetch(
	'https://pokeapi.co/api/v2/pokemon-form/' + pokemon.toLowerCase(),
	{
		method: 'GET',
	}
).then(response => response.json() 
).then(data => {
    let pokeImage = data.sprites.front_default;
    let pokeShiny = data.sprites.front_shiny;
    console.log(data);
    applyImage(pokeImage, pokeShiny);
});

function applyData (pokeNum , pokeAbility, typeOne, typeTwo, pokeName , pokeHeight , pokeWeight , pokeHP , pokeAtk , pokeDef , pokeSpAtk , pokeSpDef , pokeSpd , pokeTtlStat){
    document.getElementById("pokedex-number").textContent = pokeNum;
    document.getElementById("pokemon-abilities").textContent = pokeAbility;
    document.getElementById("pokemon-type1").textContent = typeOne;
    document.getElementById("pokemon-type2").textContent = typeTwo;
    document.getElementById("pokemon-height").textContent = pokeHeight;
    document.getElementById("pokemon-weight").textContent = pokeWeight;
    document.getElementsByClassName("pokemon-name")[0].textContent = pokeName.toUpperCase();
    document.getElementById("pokemon-HP").textContent = pokeHP;
    document.getElementById('pokemon-attack').textContent = pokeAtk;
    document.getElementById("pokemon-defense").textContent = pokeDef;
    document.getElementById('pokemon-sp-attack').textContent = pokeSpAtk;
    document.getElementById("pokemon-sp-defense").textContent = pokeSpDef;
    document.getElementById('pokemon-speed').textContent = pokeSpd;
    document.getElementById('pokemon-stat-total').textContent = pokeTtlStat;
}

function applyImage (pokeImage , pokeShiny){ 
    document.getElementById('placeholder-image').src = pokeImage;
    document.getElementById('placeholder-image-2').src = pokeShiny;
}


searchBtn2.addEventListener("click", ()=>{
    console.log("clicked")
    pokemon = document.getElementById("search-2").value;
    localStorage.setItem("Pokemon" , pokemon);
    location.reload();
});