import { recipes } from "./recipes.js";
import { displayCardsRecipes, filterData } from "./displayCardsRecipes.js";
import { displayDropdown } from "./displayDropdowns.js";
import { displayTags, resultFilterTag } from "./displayTags.js";
import { formattingListDropdowns } from "./formattingListDropdown.js";
import { sortingListDropdown } from "./sortingListDropdown.js";
import { updateWordList } from "./updateWordList.js";

let filteredRecipe = [...recipes];

displayCardsRecipes(recipes); // Affichage des cartes de recettes

displayDropdown(recipes); // Affichage des tags dans les Dropdowns

formattingListDropdowns();

// !Affichage de la liste des tags au click ou au focus
let inputTagsIngredients = document.querySelector("#formOne input");
let buttonTagsIngredients = document.querySelector(".accordion-button");
const accordionList = document.querySelector(".collapse");

// Au click affiche accordion
inputTagsIngredients.addEventListener("click", () => {
  buttonTagsIngredients.setAttribute("aria-expanded", "true");
  accordionList.classList.add("show");
});
// A la sélection affiche accordion
inputTagsIngredients.addEventListener("focus", () => {
  buttonTagsIngredients.setAttribute("aria-expanded", "true");
  accordionList.classList.add("show");
});

let arrayTags = [];
// Affiche les tags dans le container
const listDropdowns = document.querySelectorAll(".list-dropdown li");
listDropdowns.forEach((el) => {
  // Pour chaque élément de la liste de tags
  el.addEventListener("click", (e) => {
    // Au click sur un élément
    const tagElement = e.target; // La cible
    console.log(tagElement);
    displayTags(tagElement, arrayTags);
    arrayTags.push({
      category: tagElement.parentNode.id,
      value: tagElement.textContent,
    });
  });
});

// displayTags(recipes, arrayTags); // Affichage / Fermeture des tags et des recettes en fonction des choix utilisateur

const recipesContainer = document.querySelector(".recipes-container");

let searchInput = document.querySelector("#search-field");

// Affichage des recettes en fonction de la barre de recherche
searchInput.addEventListener("input", function (e) {
  // trim() retire les blancs en dédut et fin de chaine
  if (searchInput.value.trim().length > 2) {
    filteredRecipe = filterData(
      e.target.value,
      resultFilterTag(recipes, arrayTags)
    );
    if (filteredRecipe.length === 0) {
      recipesContainer.innerHTML = "";
      const errorMessage = document.createElement("p");
      errorMessage.classList.add("error");
      errorMessage.textContent =
        "Aucune recette ne correspond à votre critère...";
      recipesContainer.appendChild(errorMessage);
    } else {
      displayCardsRecipes(filteredRecipe);
      displayDropdown(filteredRecipe);
    }
  }
});

sortingListDropdown(); // Affichage liste Dropdown en fonction de l'input tag
updateWordList(); // Mise à jour de la liste de mots au fur et à mesure de la saisie dans le dropdown
