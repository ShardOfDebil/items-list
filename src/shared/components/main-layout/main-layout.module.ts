import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ItemsListPageModule} from '../../../views/items-list-page/items-list-page.module';
import {HeaderNavbarModule} from '../header-navbar/header-navbar.module';
import {MainLayoutComponent} from './main-layout.component';


@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeaderNavbarModule,
    ItemsListPageModule,
  ]
})
export class MainLayoutModule {
}
