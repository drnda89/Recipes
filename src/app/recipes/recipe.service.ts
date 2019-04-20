import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Snicla', 'Opis snicle', 'https://www.recepti.com/images/stories/kuvar/glavna-jela/00449-natur-snicla_zoom.jpg'),
    new Recipe('Druga Snicla', 'Opis snicle', 'https://www.recepti.com/images/stories/kuvar/glavna-jela/00449-natur-snicla_zoom.jpg'),new Recipe('Druga Snicla', 'Opis snicle', 'https://www.recepti.com/images/stories/kuvar/glavna-jela/00449-natur-snicla_zoom.jpg'),
    new Recipe('Druga Snicla', 'Opis snicle', 'https://www.recepti.com/images/stories/kuvar/glavna-jela/00449-natur-snicla_zoom.jpg'),
    new Recipe('Druga Snicla', 'Opis snicle', 'https://www.recepti.com/images/stories/kuvar/glavna-jela/00449-natur-snicla_zoom.jpg'),
    new Recipe('Druga Snicla', 'Opis snicle', 'https://www.recepti.com/images/stories/kuvar/glavna-jela/00449-natur-snicla_zoom.jpg')
  ];
  constructor() { }
}
