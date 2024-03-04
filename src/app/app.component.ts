import {HttpClientModule} from '@angular/common/http';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {IconsService} from '../core/icons/icons.service';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent {

  constructor(
    private iconsService: IconsService,
    // private httpClientService: HttpClientModule,
  ) {
  }
}
