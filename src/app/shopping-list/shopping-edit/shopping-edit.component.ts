import { Component, OnInit, OnDestroy, Output, EventEmitter, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  ingName;
  ingAmount;
  newIngredient;
  editMode = false;
  editedItemIndex;
  subscription: Subscription;
  editedItem: Ingredient;

  constructor(public slService: ShoppingListService) {
  }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(index => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.slService.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  add(form: NgForm) {
    const value = form.value
    this.newIngredient = new Ingredient(value.name, value.amount);
    this.slService.addIngredient(this.newIngredient);
  }


}
