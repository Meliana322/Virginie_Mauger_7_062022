// Affichage des tags dans les Dropdowns
export function displayDropdown(recipes) {
  const accordionIngredients = document.querySelector("#ingredients");

  // ! obtenir la liste de tous les ingrédients
  const ingredientsList = [];
  for (let i = 0; i < recipes.length; i++) {
    let ingredients = recipes[i].ingredients;
    // crée un nouveau tableau avec les ingrédient contenus dans "ingrédients" sous forme de chaine de caractères minuscules
    ingredients.map(({ ingredient }) => {
      ingredientsList.push(`${ingredient.toLowerCase()}`);
    });
  }
  // No-repeat et Transform objet en tableau [...]
  const ingredientsListUnique = [...new Set(ingredientsList)];

  // alphabetical order
  const ingredientsSort = ingredientsListUnique.sort();
  // Crée un nouveau tableau en fusionnant tous les ingrédients du tableau en une chaine de caractères
  accordionIngredients.innerHTML = `
    ${ingredientsSort
      .map(
        (element) => `
        <li class="ingredients-list">${element}</li>`
      )
      .join(" ")}
    `;
  // ! obtenir la liste de tous les appareils
  const accordionAppliances = document.querySelector("#appliances");
  const appliancesList = [];
  for (let i = 0; i < recipes.length; i++) {
    let appliances = recipes[i].appliance;
    // push tous les appareils de chaque recettes dans le tableau "appliancesList" sous forme de chaine de caractères minuscules
    appliancesList.push(`${appliances.toLowerCase()}`);
  }
  // No-repeatet transforme objets en tableau [...]
  const appliancesListtUnique = [...new Set(appliancesList)];

  // Tri par ordre alphabétique
  const appliancesSort = appliancesListtUnique.sort();
  // Crée un nouveau tableau en fusionnant tous les appareils du tableau en une chaine de caractères
  accordionAppliances.innerHTML = `
    ${appliancesSort
      .map(
        (element) => `
        <li class="appliances-list">${element}</li>`
      )
      .join(" ")}
    `;

  // ! obtenir la liste de tous les ustensiles
  const accordionUstensils = document.querySelector("#ustensils");
  const ustensilsList = [];
  for (let i = 0; i < recipes.length; i++) {
    let ustensils = recipes[i].ustensils;
    // push tous les ustensiles de chaque recettes dans le tableau "ustensilsList"
    ustensilsList.push(ustensils);
  }
  //   Intègre les valeurs du sous-tableau dans le tableau sous forme de chaine de caractères minuscules
  const ustensilsListJoined = ustensilsList.flat().map((x) => x.toLowerCase());
  // No-repeat et Transform objet en tableau [...]
  const ustensilsListUnique = [...new Set(ustensilsListJoined)];

  // Trie les éléments du tableau à même le tableau et renvoie le tableau (Ordre alphabetique)
  const ustensilsSort = ustensilsListUnique.sort();
  // Crée un nouveau tableau en fusionnant tous les ustensiles du tableau en une chaine de caractères
  accordionUstensils.innerHTML = `
    ${ustensilsSort
      .map(
        (element) => `
        <li class="ustensils-list">${element}</li>`
      )
      .join(" ")}
    `;
}
