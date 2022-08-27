import { Component, OnInit, OnChanges } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnChanges {
  recipeDetail: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log('on changes!')
  }

}
