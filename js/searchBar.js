import { recipes } from "./recipes.js";
import { displayCardsRecipes } from "./displayCardsRecipes.js";

// Search Bar
let searchInput = document.querySelector("#search-field");
// const recipesContainer = document.querySelector(".recipes-container");
searchInput.addEventListener("input", function (e) {
  // trim() retire les blancs en dédut et fin de chaine
  if (searchInput.value.trim().length > 2) {
    const result = filterData(e.target.value, recipes);
    if (result.length === 0) {
      console.log("Aucune recette ne correspond à votre critère...");
    } else {
      displayCardsRecipes(result);
    }
  }
});

export function filterData(inputText, recipeArray) {
  const searchedString = inputText.toLowerCase();

  let filteredArr = recipeArray.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchedString) ||
      recipe.description.toLowerCase().includes(searchedString) ||
      // si le tableau "ingredients" contient une ou plusieurs valeurs "ingrédient" renvoie true
      recipe.ingredients.some((element) =>
        element.ingredient.toLowerCase().includes(searchedString)
      )
  );
  return filteredArr;
}

export function filterByTag(tagObj, recipeArr) {
  let filteredArr = [];

  // Si l'objet appartient à la category "ingredients"
  if (tagObj.category === "ingredients") {
    // Prend le tableau des recettes et boucle sur chaque recette
    filteredArr = recipeArr.filter((recipe) =>
      // Dans la recette j'ai une chaine de caractères
      recipe.ingredients.some((ingredient) =>
        //Si cette chaine de caractères est présente renvoie sa valeur
        ingredient.ingredient.toLowerCase().includes(tagObj.value.toLowerCase())
      )
    );
  }

  // Si l'objet appartient à la category "appliances"
  if (tagObj.category === "appliances") {
    // Prend le tableau des recettes et boucle sur chaque recette
    filteredArr = recipeArr.filter((recipe) =>
      // Dans la recette j'ai une chaine de caractères
      //Si cette chaine de caractères est présente renvoie sa valeur
      recipe.appliance.toLowerCase().includes(tagObj.value.toLowerCase())
    );
  }
  if (tagObj.category === "ustensils") {
    // Prend le tableau des recettes et boucle sur chaque recette
    filteredArr = recipeArr.filter((recipe) =>
      // Dans la recette j'ai une chaine de caractères
      recipe.ustensils.some((ustensil) =>
        //Si cette chaine de caractères est présente renvoie sa valeur
        ustensil.toLowerCase().includes(tagObj.value.toLowerCase())
      )
    );
  }
  // Renvoie le tableau d'objets filtré
  return filteredArr;
}
