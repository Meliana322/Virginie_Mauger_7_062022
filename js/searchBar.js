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
  // if (tagObj.category === "ingredients") {
  filteredArr = recipeArr.filter((recipe) =>
    recipe.ingredients.some((element) =>
      element.ingredient.toLowerCase().includes(tagObj.value.toLowerCase())
    )
  );
  // }

  // if (tagObj.category === "appliances") {

  // }

  return filteredArr;
}
