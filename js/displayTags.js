import { displayCardsRecipes } from "./displayCardsRecipes.js";
import { filterData } from "./displayCardsRecipes.js";

// Affichage des tags
const tagsDropdowns = document.querySelector(".tag");
export function displayTags(recipeArr, arrayTags) {
  const listDropdowns = document.querySelectorAll(".list-dropdown li");
  listDropdowns.forEach((el) => {
    el.addEventListener("click", (e) => {
      const tagElement = e.target;
      let listTags;

      // Récupère le texte du mot cliqué
      if (!tagElement.classList.contains("click")) {
        listTags = document.createElement("li");
        listTags.classList.add("tag-list");
        tagsDropdowns.appendChild(listTags);
        // Ajout le bouton et l'icone de fermeture au container Tag
        listTags.innerHTML = `${tagElement.textContent}<button type="button" class="close-tag" aria-label="close-tag"><i class="far fa-times-circle"></i></button>`;
        tagElement.classList.add("click");

        arrayTags.push({
          category: tagElement.parentNode.id,
          value: tagElement.textContent,
        });
      }

      resultFilterTag(recipeArr, arrayTags);

      // ! REMOVE TAGS
      if (tagElement.classList.contains("click")) {
        const closesButton = listTags.querySelector(".close-tag");
        closesButton.addEventListener("click", (e) => {
          const tagsContainer = e.target.parentNode.parentNode;
          tagsContainer.remove();

          arrayTags = arrayTags.filter(
            (tagObj) => tagObj.value !== tagElement.textContent
          );

          // Tableau des recettes filtrées
          resultFilterTag(recipeArr, arrayTags);
        });
        tagElement.classList.remove("click");
      }
    });
  });
}

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
  // let filteredRecipe = [...recipeArr];
  let filteredRecipe = filterData(
    document.querySelector("#search-field").value,
    recipeArr
  );
  // Boucle sur arrayTags
  for (let i = 0; i < arrayTags.length; i++) {
    filteredRecipe = filterByTag(arrayTags[i], filteredRecipe);
  }

  displayCardsRecipes(filteredRecipe);

  return filteredRecipe;
}
