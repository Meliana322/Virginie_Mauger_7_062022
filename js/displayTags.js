import { displayCardsRecipes } from "./displayCardsRecipes.js";
// import { displayDropdown } from "./displayDropdowns.js";
import { filterByTag } from "./searchBar.js";
// import { filterData } from "./searchBar.js";

// tags
const tagsDropdowns = document.querySelector(".tag");
let arrayTags = [];

export function displayTags(recipeArr) {
  // Tableau de toutes les recettes
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

      // Tableau de toutes les recettes
      let filteredRecipe = [...recipeArr];
      // Boucle sur arrayTags
      for (let i = 0; i < arrayTags.length; i++) {
        filteredRecipe = filterByTag(arrayTags[i], filteredRecipe);

        console.log(arrayTags);
      }

      displayCardsRecipes(filteredRecipe);

      // ! REMOVE TAGS
      if (tagElement.classList.contains("click")) {
        const closesButton = listTags.querySelector(".close-tag");
        closesButton.addEventListener("click", (e) => {
          const tagsContainer = e.target.parentNode.parentNode;
          tagsContainer.remove();

          arrayTags = arrayTags.filter(
            (tagObj) => tagObj.value !== tagElement.textContent
          );

          console.log(arrayTags);
          // Tableau de toutes les recettes
          filteredRecipe = [...recipeArr];
          for (let i = 0; i < arrayTags.length; i++) {
            filteredRecipe = filterByTag(arrayTags[i], filteredRecipe);

            // console.log(arrayTags);
          }
          displayCardsRecipes(filteredRecipe);
          // console.log(arrayTags);
        });
        // );
        tagElement.classList.remove("click");
      }
    });
  });
}

// function closeTags() {
//   let filteredRecipe = [...recipes];
//   const listDropdowns = document.querySelectorAll(".list-dropdown li");
//   listDropdowns.forEach((e) => {
//     e.addEventListener("click", (e) => {
//       const tagElement = e.target;

//       if (tagElement.classList.contains("click")) {
//         const closesButtons = document.querySelectorAll(".close-tag");
//         closesButtons.forEach((e) =>
//           e.addEventListener("click", (e) => {
//             const tagsContainer = e.target.parentNode.parentNode;
//             arrayTags = tagsContainer.remove({
//               category: tagElement.parentNode.id,
//               value: tagElement.textContent,
//             });
//             for (let i = 0; i < arrayTags.length; i++) {
//               filteredRecipe = filterByTag(
//                 {
//                   category: tagElement.parentNode.id,
//                   value: tagElement.textContent,
//                 },
//                 filteredRecipe
//               );
//               displayCardsRecipes(filteredRecipe);
//               console.log(arrayTags);
//             }
//             console.log(arrayTags);
//           })
//         );
//         tagElement.classList.remove("click");
//       }
//     });
//   });
// }
// closeTags();

// Stylisation des dropdowns
