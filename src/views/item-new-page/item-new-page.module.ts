import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {HeaderNavbarModule} from '../../shared/components/header-navbar/header-navbar.module';
import { ItemNewPageComponent } from './item-new-page.component';


@NgModule({
  declarations: [
    ItemNewPageComponent
  ],
  imports: [
    CommonModule,
    HeaderNavbarModule
  ]
})
export class ItemNewPageModule { }
