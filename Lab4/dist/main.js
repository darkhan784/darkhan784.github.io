/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _persInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./persInfo */ \"./src/persInfo.js\");\n/* harmony import */ var _pokemon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokemon */ \"./src/pokemon.js\");\n\r\n\r\n\r\ndocument.getElementById('maintab').onclick = _persInfo__WEBPACK_IMPORTED_MODULE_0__[\"getAboutMe\"];\r\ndocument.getElementById(\"pokemontab\").onclick = _pokemon__WEBPACK_IMPORTED_MODULE_1__[\"getPokemon\"];\r\nObject(_persInfo__WEBPACK_IMPORTED_MODULE_0__[\"getAboutMe\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/persInfo.js":
/*!*************************!*\
  !*** ./src/persInfo.js ***!
  \*************************/
/*! exports provided: getAboutMe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAboutMe\", function() { return getAboutMe; });\nfunction getAboutMe() {\r\n    const main = document.getElementById('main');\r\n    main.innerHTML = getMyInfo();\r\n    changeAboutMeCSS();\r\n}\r\n\r\nfunction getMyInfo() {\r\n    return '' +\r\n        '<section id = \"myInfo\">' +\r\n        ' <h2 id = \"name\">Darkhan Aidarkhanov</h2> ' +\r\n        '<span id = \"text\">ITMO University, group M3300</span> ' +\r\n        '</section>';\r\n}\r\n\r\nfunction changeAboutMeCSS() {\r\n    document.getElementById(\"myInfo\").style.cssText = \"text-align: center; font-family: Lexend Deca, sans-serif;; color: #1E1E1E;\";\r\n    document.getElementById(\"name\").style.cssText = \"font-size: 30px; color: #d0d0d0\";\r\n    document.getElementById(\"text\").style.cssText = \"font-size: 20px; color: #d0d0d0\";\r\n    document.getElementById(\"maintab\").style.cssText = \"background-color: white; color: #555556;\";\r\n    document.getElementById(\"pokemontab\").style.cssText = \"background-color: #555556; color: white;\";\r\n}\n\n//# sourceURL=webpack:///./src/persInfo.js?");

/***/ }),

/***/ "./src/pokemon.js":
/*!************************!*\
  !*** ./src/pokemon.js ***!
  \************************/
/*! exports provided: getPokemon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPokemon\", function() { return getPokemon; });\nasync function getAbility(url) {\r\n    let response = await fetch(url);\r\n    let json = await response.json();\r\n    return json.effect_entries[0].effect;\r\n}\r\n\r\nasync function getPokemon() {\r\n    const main = document.getElementById(\"main\");\r\n    await getPokemonInfo('slowking').then(pokemonInfo => main.innerHTML = pokemonInfo);\r\n    changePokemonCSS();\r\n}\r\n\r\nfunction changePokemonCSS() {\r\n    document.getElementById(\"pokemontab\").style.cssText = \"background-color: white; color: #555556;\";\r\n    document.getElementById(\"maintab\").style.cssText = \"background-color: #555556; color: white;\";\r\n    document.getElementById(\"pokemonInfo\").style.cssText = \"text-align: center; font-family: Lexend Deca, sans-serif; color: #d0d0d0;\";\r\n    document.getElementById(\"name\").style.cssText = \"font-size: 30px;\";\r\n\r\n    let names = document.getElementsByClassName(\"abilityName\");\r\n    for (let i = 0; i < names.length; i++) {\r\n        names[i].style.cssText = \"font-size: 25px; font-weight: bolder;\";\r\n    }\r\n    let texts = document.getElementsByClassName(\"text\");\r\n    for (let i = 0; i < texts.length; i++) {\r\n        texts[i].style.cssText = \"font-size: 20px;\";\r\n    }\r\n    document.getElementById('abilities').style.cssText = \"display: flex; justify-content: space-around;\";\r\n    let ability = document.getElementsByClassName('ability');\r\n    for (let i = 0; i < ability.length; i++) {\r\n        ability[i].style.cssText = \"border: 2px solid #777776; border-radius: 20px; margin: 20px;\";\r\n    }\r\n}\r\n\r\nconst pokemonName = \"slowking\";\r\n\r\nasync function getPokemonInfo(pokemonName) {\r\n    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;\r\n    let response = await fetch(url);\r\n\r\n    let pokemonInfo = `<section id = \"pokemonInfo\"> \r\n                       <h2 id = \"name\">${toUpperCaseFirstLetter(pokemonName)} abilities </h2>\r\n                       <div id=\"abilities\">`;\r\n\r\n    let json = await response.json();\r\n\r\n    for (let i = 0; i < json.abilities.length; i++) {\r\n        let ability = json.abilities[i].ability;\r\n        let name = ability.name;\r\n        let abilURL = ability.url;\r\n        let abilityDescription = await getAbility(abilURL);\r\n\r\n        pokemonInfo += `<div class=\"ability\">\r\n                        <span class=\"abilityName\">${toUpperCaseFirstLetter(name)}</span>\r\n                        <br>\r\n                        <span class=\"text\">${abilityDescription}</span>\r\n                        </div>`;\r\n    }\r\n    pokemonInfo += `</div></section>`;\r\n    return pokemonInfo;\r\n}\r\n\r\nvar toUpperCaseFirstLetter = (word) => {\r\n    return word[0].toUpperCase() + word.slice(1);\r\n};\n\n//# sourceURL=webpack:///./src/pokemon.js?");

/***/ })

/******/ });