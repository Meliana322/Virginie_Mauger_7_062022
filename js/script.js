import { recipes } from "./recipes.js";
import { displayCardsRecipes } from "./displayCardsRecipes.js";
import { displayDropdown } from "./displayDropdowns.js";
import { displayTags } from "./displayTags.js";
import { formattingListDropdowns } from "./formattingListDropdown.js";
import { sortingListDropdown } from "./sortingListDropdown.js";

displayCardsRecipes(recipes);

displayDropdown(recipes);

displayTags();

formattingListDropdowns();

// !Affichage de la liste des tags au click ou au focus
let inputTagsIngredients = document.querySelector("#formOne input");
let buttonTagsIngredients = document.querySelector(".accordion-button");
const accordionList = document.querySelector(".collapse");

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
