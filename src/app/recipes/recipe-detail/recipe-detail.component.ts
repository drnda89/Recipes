import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail: Recipe;
  id: number;

  constructor( public recipeService: RecipeService, public route: ActivatedRoute, public slService: ShoppingListService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.recipeDetail = this.recipeService.getRecipe(this.id);
    })
  }

  toShoppingList() {
    this.slService.addToShoppingList(this.recipeDetail.ingredients);
  }
}
