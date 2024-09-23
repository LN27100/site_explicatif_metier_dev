function afficherRecherche() {
    var valeur = document.getElementById("recherche").value;
    document.getElementById("resultat").innerHTML = "Vous avez recherché : " + valeur;
  }