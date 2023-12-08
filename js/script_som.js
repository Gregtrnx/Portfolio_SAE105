// Sélectionner tous les éléments ayant la classe "preview_sae"
let previewSAEElements = document.querySelectorAll('.preview_sae');

// Pour chaque élément .preview_sae, ajouter les titres correspondants
previewSAEElements.forEach(function(element, i) {
    let cle = Object.keys(SAE)[i];
    let titreHTML = '<div class="titre_sae">' + cle + ' - ' + SAE[cle]["titre"] + '</div>';
    element.innerHTML += titreHTML;
});