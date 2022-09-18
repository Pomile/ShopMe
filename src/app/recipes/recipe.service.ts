import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import ShoppingListService from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export default class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Marco Verch',
      'Butter, Bread, Ketchup Ingredients Flatlay Recipe',
      'https://live.staticflickr.com/65535/51129079431_c27ecd8e69_h.jpg',
      [
        new Ingredient('Butter', 2),
        new Ingredient('Bread', 4),
        new Ingredient('Ketchup', 1)
      ]
    ),
    new Recipe(
      'Keto Fried Chicken',
      'Groundnut Oil, Chicken, Flour',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Keto_fried_chicken_recipe_from_a_custom_keto_diet_plan.jpg',
      [
        new Ingredient('Groundnut Oil', 1),
        new Ingredient('Chicken', 4),
        new Ingredient('Flour', 1)
      ]
    )
  ];
  constructor(private shoppingListService: ShoppingListService) {}
  getRecipes () {
    return this.recipes.slice()
  }
  getRecipe (id: number) {
    return this.recipes[id]
  }
  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }

}
