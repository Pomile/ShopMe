import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import RecipeService from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnChanges {
  recipe: Recipe;
  id: number;
  constructor(private recipeService: RecipeService,
  private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: Params) => {
     this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id)
    })
  }

  ngOnChanges() {


  }

  onAddToShoppingList () {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients)
  }

  onEditRecipe() {
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.activatedRoute })
  }
}
