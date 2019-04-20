import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipe: Recipe;

  constructor(public recipeService: RecipeService) { 
  }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(recipe => this.recipe = recipe);
  }

}
