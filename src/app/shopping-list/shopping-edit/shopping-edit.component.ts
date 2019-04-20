import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName') inputName: ElementRef;
  @ViewChild('inputAmount') inputAmount: ElementRef;
  ingName;
  ingAmount;
  newIngredient;

  constructor(public slService: ShoppingListService) { 
  }

  ngOnInit() {
  }

  add() {
    this.ingName = this.inputName.nativeElement.value;
    this.ingAmount = this.inputAmount.nativeElement.value;
    this.newIngredient = new Ingredient(this.ingName, this.ingAmount);
    this.slService.addIngredient(this.newIngredient);
  }
}
