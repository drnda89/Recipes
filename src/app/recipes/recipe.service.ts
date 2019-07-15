import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: Recipe[] = [
    new Recipe('Snicla', 'Opis snicle', 'https://www.recepti.com/images/stories/kuvar/glavna-jela/00449-natur-snicla_zoom.jpg', [
      new Ingredient('Meso', 1),
      new Ingredient('Pomfrit', 20)
    ]),
    new Recipe('Giros', 'Opis girosa', 'https://images.media-allrecipes.com/images/56610.png', [
      new Ingredient('Meso', 2),
      new Ingredient('Pomfrit', 30)
    ]),
    new Recipe('Druga Snicla', 'Opis druge snicle', 'https://www.recepti.com/images/stories/kuvar/glavna-jela/00449-natur-snicla_zoom.jpg', [
      new Ingredient('Meso', 1),
      new Ingredient('Pomfrit', 20)
    ])
  ];
  constructor( public slService: ShoppingListService) { }

  getRecipe(index) {
    return this.recipes[index];
  }
}
