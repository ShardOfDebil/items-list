import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {RouterModule, Routes} from '@angular/router';
import {ROUTE_PATH} from '../../core/const/routes.enum';
import { ItemNewPageComponent } from './item-new-page.component';

const routes: Routes = [
  { path: ROUTE_PATH.NEW_PAGE, component: ItemNewPageComponent }
];

@NgModule({
  declarations: [
    ItemNewPageComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class ItemNewPageModule { }
