// !Affichage des tags dans les Dropdowns
export function displayDropdown(recipes) {
  const accordionIngredients = document.querySelector("#ingredients");
  // console.log(accordionIngredients);
  // !get the list of all ingredients
  const ingredientsList = [];
  for (let i = 0; i < recipes.length; i++) {
    let ingredients = recipes[i].ingredients;
    ingredients.map(({ ingredient }) => {
      ingredientsList.push(`${ingredient.toLowerCase()}`);
    });
  }
  // No-repeat et Transform objet en tableau [...]
  const ingredientsListUnique = [...new Set(ingredientsList)];

  // alphabetical order
  const ingredientsSort = ingredientsListUnique.sort();
  // console.log(ingredientsSort);

  accordionIngredients.innerHTML = `
    ${ingredientsSort
      .map(
        (element) => `
        <li class="ingredients-list">${element}</li>`
      )
      .join(" ")}
    `;
  // console.log(accordionIngredients.textContent);
  // !get the list of all appliances
  const accordionAppliances = document.querySelector("#appliances");
  const appliancesList = [];
  for (let i = 0; i < recipes.length; i++) {
    let appliances = recipes[i].appliance;
    appliancesList.push(`${appliances.toLowerCase()}`);
  }
  // No-repeatet et Transform objet en tableau [...]
  const appliancesListtUnique = [...new Set(appliancesList)];

  // alphabetical order
  const appliancesSort = appliancesListtUnique.sort();
  // console.log(appliancesSort);

  accordionAppliances.innerHTML = `
    ${appliancesSort
      .map(
        (element) => `
        <li class="appliances-list">${element}</li>`
      )
      .join(" ")}
    `;

  // !get the list of all ustensils
  const accordionUstensils = document.querySelector("#ustensils");
  // console.log(accordionIngredients);
  const ustensilsList = [];
  for (let i = 0; i < recipes.length; i++) {
    let ustensils = recipes[i].ustensils;
    ustensilsList.push(ustensils);
  }
  //   Intègre les valeurs du sous-tableau dans le tableau et passe tous les éléments en minuscules
  const ustensilsListJoined = ustensilsList.flat().map((x) => x.toLowerCase());
  // No-repeat et Transform objet en tableau [...]
  const ustensilsListUnique = [...new Set(ustensilsListJoined)];

  // alphabetical order
  const ustensilsSort = ustensilsListUnique.sort();
  // console.log(ustensilsSort);

  accordionUstensils.innerHTML = `
    ${ustensilsSort
      .map(
        (element) => `
        <li class="ustensils-list">${element}</li>`
      )
      .join(" ")}
    `;
}
