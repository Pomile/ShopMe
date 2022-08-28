import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export default class ShoppingListService {
  recipeAdded = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 10),
    new Ingredient('Garlic', 3)
  ];

  getIngredients () {
    return this.ingredients.slice()
  }

  addIngredient (ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.recipeAdded.emit(this.ingredients.slice());
  }

  addIngredients (ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.recipeAdded.emit(this.ingredients.slice())
  }
}
