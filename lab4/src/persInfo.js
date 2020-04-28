export function getAboutMe() {
    const main = document.getElementById('main');
    main.innerHTML = getMyInfo();
    changeAboutMeCSS();
}

function getMyInfo() {
    return '' +
        '<section id = "myInfo">' +
        ' <h2 id = "name">Darkhan Aidarkhanov</h2> ' +
        '<span id = "text">ITMO University, group M3300</span> ' +
        '</section>';
}

function changeAboutMeCSS() {
    document.getElementById("myInfo").style.cssText = "text-align: center; font-family: Lexend Deca, sans-serif;; color: #1E1E1E;";
    document.getElementById("name").style.cssText = "font-size: 30px; color: #d0d0d0";
    document.getElementById("text").style.cssText = "font-size: 20px; color: #d0d0d0";
    document.getElementById("maintab").style.cssText = "background-color: white; color: #555556;";
    document.getElementById("pokemontab").style.cssText = "background-color: #555556; color: white;";
}