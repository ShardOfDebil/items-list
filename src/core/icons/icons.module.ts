import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {IconsService} from './icons.service';

@NgModule({
  imports: [MatIconModule],
  providers: [
    IconsService
  ],
})
export class IconsModule {
}
