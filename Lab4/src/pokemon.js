async function getAbility(url) {
    let response = await fetch(url);
    let json = await response.json();
    return json.effect_entries[0].effect;
}

export async function getPokemon() {
    const main = document.getElementById("main");
    await getPokemonInfo('slowking').then(pokemonInfo => main.innerHTML = pokemonInfo);
    changePokemonCSS();
}

function changePokemonCSS() {
    document.getElementById("pokemontab").style.cssText = "background-color: white; color: #555556;";
    document.getElementById("maintab").style.cssText = "background-color: #555556; color: white;";
    document.getElementById("pokemonInfo").style.cssText = "text-align: center; font-family: Lexend Deca, sans-serif; color: #d0d0d0;";
    document.getElementById("name").style.cssText = "font-size: 30px;";

    let names = document.getElementsByClassName("abilityName");
    for (let i = 0; i < names.length; i++) {
        names[i].style.cssText = "font-size: 25px; font-weight: bolder;";
    }
    let texts = document.getElementsByClassName("text");
    for (let i = 0; i < texts.length; i++) {
        texts[i].style.cssText = "font-size: 20px;";
    }
    document.getElementById('abilities').style.cssText = "display: flex; justify-content: space-around;";
    let ability = document.getElementsByClassName('ability');
    for (let i = 0; i < ability.length; i++) {
        ability[i].style.cssText = "border: 2px solid #777776; border-radius: 20px; margin: 20px;";
    }
}

const pokemonName = "slowking";

async function getPokemonInfo(pokemonName) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
    let response = await fetch(url);

    let pokemonInfo = `<section id = "pokemonInfo"> 
                       <h2 id = "name">${toUpperCaseFirstLetter(pokemonName)} abilities </h2>
                       <div id="abilities">`;

    let json = await response.json();

    for (let i = 0; i < json.abilities.length; i++) {
        let ability = json.abilities[i].ability;
        let name = ability.name;
        let abilURL = ability.url;
        let abilityDescription = await getAbility(abilURL);

        pokemonInfo += `<div class="ability">
                        <span class="abilityName">${toUpperCaseFirstLetter(name)}</span>
                        <br>
                        <span class="text">${abilityDescription}</span>
                        </div>`;
    }
    pokemonInfo += `</div></section>`;
    return pokemonInfo;
}

var toUpperCaseFirstLetter = (word) => {
    return word[0].toUpperCase() + word.slice(1);
};