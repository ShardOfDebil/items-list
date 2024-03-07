import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ROUTE_PATH} from '../../core/const/routes.enum';
import {ItemDetailedPageComponent} from './item-detailed-page.component';

const routes: Routes = [
  { path: `:id`, component: ItemDetailedPageComponent }
];

@NgModule({
  declarations: [ItemDetailedPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ItemDetailedPageModule { }
