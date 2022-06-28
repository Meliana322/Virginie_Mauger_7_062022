// Affichage liste Dropdown en fonction de l'input tag
export function sortingListDropdown() {
  const searchFields = document.querySelectorAll(".accordion-item");
  // Pour chaque élément de la liste de tags
  searchFields.forEach((searchField) => {
    const input = searchField.querySelector("input");
    const eltsList = searchField.querySelectorAll("li");
    // Pour chaque élément tapé dans la barre de recherche de tag
    eltsList.forEach((eltList) => {
      input.addEventListener("keyup", (e) => {
        let inputValue = e.target.value;
        // Si la liste de tags contient la valeur entrée dans l'input
        if (eltList.textContent.includes(inputValue)) {
          // Affiche la liste
          eltList.style.display = "block";
        } else {
          // Sinon masque la liste
          eltList.style.display = "none";
        }
      });
      // Quand le bouton de recherche est "focus"
      input.addEventListener("focus", () => {
        // Affiche la liste par défaut
        eltList.style.display = "block";
      });
    });
  });
}
