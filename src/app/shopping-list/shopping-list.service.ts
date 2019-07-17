import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  sendIngredients = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
    this.sendIngredients.next(this.ingredients);
  }

  getIngredient(index) {
    return this.ingredients[index];
  }

  addToShoppingList(ingredients) {
    this.ingredients.push(...ingredients)
    this.sendIngredients.next(this.ingredients)

  }

  updateIngredient(index, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.sendIngredients.next(this.ingredients);
  }

  deleteINgredient(index) {
    this.ingredients.splice(index, 1);
    this.sendIngredients.next(this.ingredients);
  }
}
