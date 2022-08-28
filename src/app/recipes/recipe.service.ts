import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export default class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Marco Verch',
      'Butter, Bread, Ketchup Ingredients Flatlay Recipe',
      'https://live.staticflickr.com/65535/51129079431_c27ecd8e69_h.jpg'
    )
  ];
  getRecipes () {
    return this.recipes.slice()
  }

}
