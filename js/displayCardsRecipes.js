import { recipes } from "./recipes.js";

export function displayCardsRecipes(recipes) {
  const recipesContainer = document.querySelector(".recipes-container");

  recipesContainer.innerHTML = "";
  recipes.forEach((recipe) => {
    const cardRecipe = document.createElement("div");
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
console.log();
