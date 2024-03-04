import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HeaderNavbarComponent} from './header-navbar.component';


@NgModule({
  declarations: [HeaderNavbarComponent],
  exports: [
    HeaderNavbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule
  ]
})
export class HeaderNavbarModule {
}
