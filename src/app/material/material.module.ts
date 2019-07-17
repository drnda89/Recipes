import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';


const material = [MatButtonModule, MatGridListModule, MatToolbarModule, MatIconModule, MatCardModule, MatListModule, MatInputModule, MatMenuModule];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
