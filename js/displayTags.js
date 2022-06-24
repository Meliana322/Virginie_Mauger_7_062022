import { recipes } from "./recipes.js";
import { displayCardsRecipes } from "./displayCardsRecipes.js";
import { displayDropdown } from "./displayDropdowns.js";
import { filterByTag } from "./searchBar.js";

// tags
const tagsDropdowns = document.querySelector(".tag");
let arrayTags = [];
console.log(arrayTags);

export function displayTags() {
  // Tableau de toutes les recettes
  let filteredRecipe = [...recipes];
  const listDropdowns = document.querySelectorAll(".list-dropdown li");
  listDropdowns.forEach((e) => {
    e.addEventListener("click", (e) => {
      const tagElement = e.target;

      // Récupère le texte du mot cliqué
      if (!tagElement.classList.contains("click")) {
        const listTags = document.createElement("li");
        listTags.classList.add("tag-list");
        tagsDropdowns.appendChild(listTags);
        listTags.innerHTML = `${tagElement.textContent}<button type="button" class="close-tag" aria-label="close-tag"><i class="far fa-times-circle"></i></button>`;
        tagElement.classList.add("click");

        arrayTags.push({
          category: tagElement.parentNode.id,
          value: tagElement.textContent,
        });
      }
      tagElement.classList.add("click");

      // Boucle sur arrayTags
      for (let i = 0; i < arrayTags.length; i++) {
        filteredRecipe = filterByTag(
          {
            category: tagElement.parentNode.id,
            value: tagElement.textContent,
          },
          filteredRecipe
        );

        displayCardsRecipes(filteredRecipe);
      }
    });
  });
}

// export function removeTags(tags, recipes) {
//   const ulTags = document.querySelectorAll(".tag");
//   ulTags.forEach((containertags) => {
//     ulTags.addEventListener("click", (e) => {
//       const closeTag = containertags.querySelectorAll(".close-tag");

//       closeTag.forEach((close) => {
//         const tag = closeTag.parentNode.parentNode;

//         if (e.target == close) {
//           tag.remove();

//           tags.forEach((element) => {
//             if (
//               Object.is(element.value, tag.textContent) &&
//               ulTags.classList.contains(element.type)
//             ) {
//               tags.splice(tags.indexOf(element), 1);
//             }
//           });

//           displayCardsRecipes();
//           displayTags(tags, recipes);
//           displayDropdown();
//         }
//       });
//     });
//   });
// }
