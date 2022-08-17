import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Marco Verch',
      'Butter, Bread, Ketchup Ingredients Flatlay Recipe',
      'https://live.staticflickr.com/65535/51129079431_c27ecd8e69_h.jpg'
    )
  ];
  constructor() { }

  ngOnInit(): void {}

}
