import { recipes } from "./recipes.js";
import { displayCardsRecipes } from "./displayCardsRecipes.js";
import { filterByTag } from "./searchBar.js";

// tags
const tagsDropdowns = document.querySelector(".tag");
let arrayTags = [];
console.log(arrayTags);

export function displayTags() {
  let filteredRecipe = [...recipes];
  const listDropdowns = document.querySelectorAll(".list-dropdown li");
  listDropdowns.forEach((e) => {
    e.addEventListener("click", (e) => {
      const tagElement = e.target;

      // Récupère le texte du mot cliqué
      if (!tagElement.classList.contains("click")) {
        const listTagsIngredients = document.createElement("li");
        listTagsIngredients.classList.add("tag-list");
        tagsDropdowns.appendChild(listTagsIngredients);
        listTagsIngredients.innerHTML = `${tagElement.textContent}`;

        arrayTags.push({
          category: tagElement.parentNode.id,
          value: tagElement.textContent,
        });
      }
      tagElement.classList.add("click");

      // boucler sur arrayTags
      filteredRecipe = filterByTag(
        {
          category: tagElement.parentNode.id,
          value: tagElement.textContent,
        },
        filteredRecipe
      );

      displayCardsRecipes(filteredRecipe);
    });
  });
}
