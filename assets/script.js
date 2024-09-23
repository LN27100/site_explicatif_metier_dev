
// fonction simple de recherche

function afficherRecherche() {
      // Récupère la valeur de l'élément HTML ayant l'ID "recherche" (par exemple, un champ de saisie).
    var valeur = document.getElementById("recherche").value;
    // Modifie le contenu de l'élément HTML avec l'ID "resultat" pour afficher la chaîne de texte
    // combinée avec la valeur saisie par l'utilisateur.
    document.getElementById("resultat").innerHTML = "Vous avez recherché : " + valeur;
  }