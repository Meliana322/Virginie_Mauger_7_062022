import { recipes } from "./recipes.js";
import { displayCardsRecipes, filterData } from "./displayCardsRecipes.js";
import { displayDropdown } from "./displayDropdowns.js";
import { displayTags } from "./displayTags.js";
import { formattingListDropdowns } from "./formattingListDropdown.js";
import { sortingListDropdown } from "./sortingListDropdown.js";
import { updateWordList } from "./updateWordList.js";

let filteredRecipe = [...recipes];

displayCardsRecipes(recipes);

displayDropdown(recipes);

// displayTags();

formattingListDropdowns();

// !Affichage de la liste des tags au click ou au focus
let inputTagsIngredients = document.querySelector("#formOne input");
let buttonTagsIngredients = document.querySelector(".accordion-button");
const accordionList = document.querySelector(".collapse");

///////////
const recipesContainer = document.querySelector(".recipes-container");

let searchInput = document.querySelector("#search-field");
searchInput.addEventListener("input", function (e) {
  // trim() retire les blancs en dédut et fin de chaine
  if (searchInput.value.trim().length > 2) {
    filteredRecipe = filterData(e.target.value, recipes);
    if (filteredRecipe.length === 0) {
      recipesContainer.innerHTML = "";
      const errorMessage = document.createElement("p");
      errorMessage.classList.add("error");
      errorMessage.textContent =
        "Aucune recette ne correspond à votre critère...";
      recipesContainer.appendChild(errorMessage);
    } else {
      displayTags(filteredRecipe);
      displayCardsRecipes(filteredRecipe);
    }
  }
});
//////////////////

// At the click displays accordion
inputTagsIngredients.addEventListener("click", () => {
  buttonTagsIngredients.setAttribute("aria-expanded", "true");
  accordionList.classList.add("show");
});
// At the focus displays accordion
inputTagsIngredients.addEventListener("focus", () => {
  buttonTagsIngredients.setAttribute("aria-expanded", "true");
  accordionList.classList.add("show");
});
sortingListDropdown();
updateWordList();
