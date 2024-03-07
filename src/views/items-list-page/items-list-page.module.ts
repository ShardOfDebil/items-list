import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule, Routes} from '@angular/router';
import {ROUTE_PATH} from '../../core/const/routes.enum';
import {IconsModule} from '../../core/icons/icons.module';
import {ItemCardModule} from '../../shared/components/item-card/item-card.module';
import {ItemNewPageModule} from '../item-new-page/item-new-page.module';
import {ItemsListPageComponent} from './items-list-page.component';

const routes: Routes = [
  { path: ROUTE_PATH.EMPTY, component: ItemsListPageComponent }
];

@NgModule({
  declarations: [
    ItemsListPageComponent,
  ],
  imports: [
    CommonModule,
    ItemCardModule,
    ItemNewPageModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    IconsModule,
    RouterModule.forChild(routes)
  ],
  exports: [

  ],
})
export class ItemsListPageModule {

}
