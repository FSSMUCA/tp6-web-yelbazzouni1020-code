// Sélection des éléments du DOM
const form = document.querySelector("form");
const inputA = document.getElementById("numA");
const inputB = document.getElementById("numB");
const selectOperation = document.getElementById("operation");
const zoneErreur = document.getElementById("erreur");
const sectionHistorique = document.querySelectorAll("section")[1];

// Création dynamique de la liste d’historique
const listeHistorique = document.createElement("ul");
sectionHistorique.appendChild(listeHistorique);

// Tableau pour stocker l’historique
let historique = [];

// Gestion de la soumission du formulaire
form.addEventListener("submit", function (event) {
    event.preventDefault(); // empêcher le rechargement de la page

    // Récupération des valeurs
    const valeurA = inputA.value;
    const valeurB = inputB.value;
    const operation = selectOperation.value;

    // Réinitialiser les erreurs
    zoneErreur.textContent = "";

    // Validation : champs vides
    if (valeurA === "" || valeurB === "") {
        zoneErreur.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    const nombreA = Number(valeurA);
    const nombreB = Number(valeurB);

    // Validation : division par zéro
    if (operation === "/" && nombreB === 0) {
        zoneErreur.textContent = "La division par zéro est interdite.";
        return;
    }

    // Calcul
    let resultat;

    switch (operation) {
        case "+":
            resultat = nombreA + nombreB;
            break;
        case "-":
            resultat = nombreA - nombreB;
            break;
        case "*":
            resultat = nombreA * nombreB;
            break;
        case "/":
            resultat = nombreA / nombreB;
            break;
    }

    // Texte de l’opération
    const texteOperation = `${nombreA} ${operation} ${nombreB} = ${resultat}`;

    // Ajouter au tableau
    historique.push(texteOperation);

    // Mettre à jour l’historique
    afficherHistorique();

    // Réinitialiser le formulaire
    form.reset();
});

// Fonction d’affichage de l’historique
function afficherHistorique() {
    listeHistorique.innerHTML = "";

    historique.forEach(function (op) {
        const li = document.createElement("li");
        li.textContent = op;
        listeHistorique.appendChild(li);
    });
}
