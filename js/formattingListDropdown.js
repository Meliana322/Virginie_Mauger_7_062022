// Mise en form des dropdowns
export function formattingListDropdowns() {
  const dropdowns = document.querySelectorAll(".accordion");

  // Pour chaque dropdown
  dropdowns.forEach((dropdown) => {
    const buttonDropdown = dropdown.querySelector(".accordion-button");
    const listDropdown = dropdown.querySelector(".accordion-collapse");
    const listcontainer = dropdown.querySelector(".accordion-collapse ul");
    const searchField = dropdown.querySelector("input");
    let placeholder = searchField.placeholder;
    // Au click du bouton (flèche)
    buttonDropdown.addEventListener("click", function () {
      // Si Le bouton (flèche) "accordion-button" a la classe "aria-expanded"
      if (buttonDropdown.getAttribute("aria-expanded") === "true") {
        // Le champ de recherche est "focus"
        searchField.focus();
      } else {
        // Sinon le dropdown aura
        dropdown.style.minWidth = "200px";
        searchField.value = "";
        searchField.placeholder = placeholder;
        searchField.classList.remove("focus");
      }
    });
    // Au focus du champ de recherche
    searchField.addEventListener("focus", () => {
      // Le bouton (flèche) prend la classe "aria-expanded"
      buttonDropdown.setAttribute("aria-expanded", "true");

      listDropdown.classList.add("show");
      // Enlève la classe "collapsed" du bouton (flèche)
      buttonDropdown.classList.remove("collapsed");
      // Dans le champ de recherche placeholder prend la valeur "Rechercher..."
      searchField.placeholder = `Rechercher un ${placeholder}`;

      searchField.classList.add("focus");

      if (
        // Le bouton (flèche)
        buttonDropdown.getAttribute("aria-expanded") === "true" &&
        window.screen.width >= 640
      ) {
        dropdown.style.minWidth = "550px";
      } else {
        dropdown.style.minWidth = "200px";
      }
    });

    document.addEventListener("click", (e) => {
      if (
        buttonDropdown.getAttribute("aria-expanded") === "true" &&
        e.target != searchField &&
        e.target != buttonDropdown &&
        e.target != listcontainer
      ) {
        buttonDropdown.setAttribute("aria-expanded", "false");

        buttonDropdown.classList.add("collapsed");
        listDropdown.classList.remove("show");
        dropdown.style.minWidth = "200px";
        searchField.value = "";
        searchField.placeholder = placeholder;
        searchField.classList.remove("focus");
      }
    });
  });
}
