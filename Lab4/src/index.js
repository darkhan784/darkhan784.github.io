import {getAboutMe} from './persInfo';
import {getPokemon} from './pokemon';

document.getElementById('maintab').onclick = getAboutMe;
document.getElementById("pokemontab").onclick = getPokemon;
getAboutMe();