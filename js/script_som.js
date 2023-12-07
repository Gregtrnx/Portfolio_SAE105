let bulle = ''

for (let i in SAE) {
    bulle += '<div class="Bulle"> <a class="titre" href="SAE.html?number=' + i + '">' + i + '<div class="titre_b">' + SAE[i]["titre"] + '</div></a></div>';
}

document.querySelector(".ligne").innerHTML = bulle;

let urlParam = new URLSearchParams(location.search);
let saeNumber = urlParam.get('number');