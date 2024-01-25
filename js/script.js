// Paramètres URL
let urlParams = new URLSearchParams(location.search);
let saeNumber = urlParams.get('number'); //'number' vient de sae.html?number=SAE1.01.
// Prendre les infos de l'objet SAE en fonction du nombre
let saeInfo = SAE[saeNumber];
let presaElement = document.querySelector('.presa');

// Mettre à jour le contenu de l'élément ciblé
presaElement.innerHTML = '<h1>' + saeInfo.titre + '</h1>' +
    '<h2>Compétences : ' + saeInfo.compétences.join(', ') + '</h2>' +
    '<h3>Description : ' + saeInfo.description + '</h3>' +
    '<p>AC : ' + Object.values(saeInfo.AC).join(', ') + '</p>' +
    '<p>Ressources : ' + Object.values(saeInfo.ressources).join(', ') + '</p>' +
    '<p>Semestre : ' + saeInfo.semestre + '</p>'+
    '<a class="pdf" href="' + saeInfo.pdfUrl + '" target="_blank" style="text-decoration: none;">Lien vers le PDF</a>';
