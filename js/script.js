import { recipes } from "./recipes.js";
import { displayCardsRecipes } from "./displayCardsRecipes.js";
// import { dropdowns } from "./dropdowns.js";

for (let i = 0; i < recipes.length; i++) {}

displayCardsRecipes(recipes);

// Search Bar
const searchInput = document.querySelector("#search-field");
const searchResults = document.querySelector(".tags-results");

let recipesArray;

async function getResults(recipes) {
  recipes.forEach((recipe) => {
    recipes.name.sort();
    console.log(recipe);
  });
}
getResults(recipes);
console.log(recipesArray);
