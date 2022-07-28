import { displayCardsRecipes } from "./displayCardsRecipes.js";
import { displayDropdown } from "./displayDropdowns.js";
import { filterData } from "./displayCardsRecipes.js";

// Affichage des tags
const tagsDropdowns = document.querySelector(".tag");

// ! Affichage des tags
export function displayTags(tagElement) {
  let listTags = document.createElement("li");
  listTags.classList.add("tag-list");
  tagsDropdowns.appendChild(listTags);
  listTags.innerHTML = `${tagElement.textContent}<button type="button" class="close-tag" aria-label="close-tag"><i class="far fa-times-circle"></i></button>`;
  // Ajout de la classe de chaque catégorie
  listTags.classList.add(tagElement.parentNode.id);
}
////////////////////////////////////////////////

// Filtre les recettes en fonction de la catégorie et de la valeur
export function filterByTag(tagObj, recipeArr) {
  let filteredArr = [];
  switch (tagObj.category) {
    // Si l'objet appartient à la category "ingredients"
    case "ingredients":
      // Prend le tableau des recettes et boucle sur chaque recette
      filteredArr = recipeArr.filter((recipe) =>
        // Dans la recette j'ai une chaine de caractères
        recipe.ingredients.some((ingredient) =>
          //Si cette chaine de caractères est présente renvoie sa valeur
          ingredient.ingredient
            .toLowerCase()
            .includes(tagObj.value.toLowerCase())
        )
      );
      break;

    // Si l'objet appartient à la category "appliances"
    case "appliances":
      // Prend le tableau des recettes et boucle sur chaque recette
      filteredArr = recipeArr.filter((recipe) =>
        // Dans la recette j'ai une chaine de caractères
        //Si cette chaine de caractères est présente renvoie sa valeur
        recipe.appliance.toLowerCase().includes(tagObj.value.toLowerCase())
      );
      break;

    // Si l'objet appartient à la category "ustensils"
    case "ustensils":
      // Prend le tableau des recettes et boucle sur chaque recette
      filteredArr = recipeArr.filter((recipe) =>
        // Dans la recette j'ai une chaine de caractères
        recipe.ustensils.some((ustensil) =>
          //Si cette chaine de caractères est présente renvoie sa valeur
          ustensil.toLowerCase().includes(tagObj.value.toLowerCase())
        )
      );
      break;
  }
  return filteredArr;
}

export function resultFilterTag(recipeArr, arrayTags) {
  let filteredRecipe = filterData(
    document.querySelector("#search-field").value,
    recipeArr
  );
  // Boucle sur arrayTags
  for (let i = 0; i < arrayTags.length; i++) {
    filteredRecipe = filterByTag(arrayTags[i], filteredRecipe);
  }

  displayCardsRecipes(filteredRecipe);
  displayDropdown(filteredRecipe);
  return filteredRecipe;
}
