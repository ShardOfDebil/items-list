import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
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
  ]
})
export class MainLayoutModule {
}
