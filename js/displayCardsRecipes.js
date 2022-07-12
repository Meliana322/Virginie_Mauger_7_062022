// import { recipes } from "./recipes.js";
// Affichage des cartes de recettes
export function displayCardsRecipes(recipes) {
  const recipesContainer = document.querySelector(".recipes-container");

  recipesContainer.innerHTML = "";
  recipes.forEach((recipe) => {
    const cardRecipe = document.createElement("article");
    cardRecipe.setAttribute("class", "card");
    cardRecipe.innerHTML = `
      <div class="card-img"></div>
                    <div class="card-body">
                        <div class="card-text">
                            <div class="row pb-2" id="card-header">
                                <div class="col-8">
                                    <h2 class="title">${recipe.name}</h2>
                                </div>
                                <div class="col-4 d-flex text-align-center justify-content-end ">
                                    <div class="time time-logo">
                                        <img src="./assets/watch.svg" aria-hidden="true" style="height: 20px;">
                                    </div>
                                    <span class="time">${recipe.time} mn</span>
                                </div>
                            </div>
                            <div class="row lh-1 pb-2">
                                <div class="col-5 pe-0">
                                <ul class="ingredientsRecipe ps-0">${recipe.ingredients
                                  .map(
                                    (element) => `
                                    <li>
                                      <span class="fw-bold">
                                        ${element.ingredient}:
                                      </span>
                                      ${element.quantity || ""} ${
                                      element.unit || ""
                                    }
                                    </li>`
                                  )
                                  .join(" ")}
                                </ul>
                                </div>
                                <div class="description col-7 ps-4 text-truncate container">
                                    <p>${recipe.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
      `;
    recipesContainer.appendChild(cardRecipe);
  });
}

// ! SearchBar
// Filtre les recettes en fonction du texte entré dans la barre de recherche
export function filterData(inputText, recipeArray) {
  const searchedString = inputText.toLowerCase();
  // Filtre le tableau de recette en fonction de:
  let filteredArr = recipeArray.filter(
    (recipe) =>
      // Nom de la recette qui contient l'entrée dans la barre de recherche ou
      recipe.name.toLowerCase().includes(searchedString) ||
      // La descritption de la recette qui contient l'entrée dans la barre de recherche ou
      recipe.description.toLowerCase().includes(searchedString) ||
      // si le tableau "ingredients" contient une ou plusieurs valeurs "ingrédient" renvoie true
      recipe.ingredients.some((element) =>
        // L'ingrédient de la recette qui contient l'entrée dans la barre de recherche
        element.ingredient.toLowerCase().includes(searchedString)
      )
  );
  return filteredArr;
}

// ! DEUXIEME ALGORITHME

// export function filterData(inputText, recipeArray) {
//   const searchedString = inputText.toLowerCase().split();
//   let filteredArr = [];
//   for (let i = 0; i < recipeArray.length; i++) {
//     if (
//       recipeArray[i].name.toLowerCase().includes(searchedString) ||
//       recipeArray[i].description.toLowerCase().includes(searchedString) ||
//       recipeArray[i].ingredients.some((element) =>
//         element.ingredient.toLowerCase().includes(searchedString)
//       )
//     ) {
//       filteredArr.push(recipeArray[i]);
//     }
//   }
//   return filteredArr;
// }
