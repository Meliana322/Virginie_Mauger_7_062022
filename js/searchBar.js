export function filterData(inputText, recipeArray) {
  const searchedString = inputText.toLowerCase();

  let filteredArr = recipeArray.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchedString) ||
      recipe.description.toLowerCase().includes(searchedString) ||
      // si le tableau "ingredients" contient une ou plusieurs valeurs "ingrédient" renvoie true
      recipe.ingredients.some((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(searchedString)
      )
  );
  return filteredArr;
}

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
