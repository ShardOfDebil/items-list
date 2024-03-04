import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {IconsModule} from '../../core/icons/icons.module';
import {HeaderNavbarModule} from '../../shared/components/header-navbar/header-navbar.module';
import {ItemNewPageModule} from '../item-new-page/item-new-page.module';
import {RoadMapPageModule} from '../road-map-page/road-map-page.module';
import {ItemsListPageComponent} from './items-list-page.component';


@NgModule({
  declarations: [
	ItemsListPageComponent
  ],
  imports: [
    CommonModule,
    HeaderNavbarModule,
    RoadMapPageModule,
    ItemNewPageModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    IconsModule,
  ],
  exports: [

  ],
})
export class ItemsListPageModule {

}
