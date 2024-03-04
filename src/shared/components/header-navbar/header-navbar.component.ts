import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ROUTE_PATH} from '../../../core/const/routes.enum';
import {Observable} from "rxjs";

export interface IPages {
  name: string;
  route: ROUTE_PATH;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderNavbarComponent implements OnInit {

  public pagesArr: IPages[] = [
    {
      name: 'Items',
      route: ROUTE_PATH.EMPTY,
    },
    {
      name: 'New Item',
      route: ROUTE_PATH.NEW_PAGE,
    },
  ];
  public preloader: boolean = false;

  constructor(
    private router: Router,
  ) {
  }

  public ngOnInit(): void {
  }

  public navigateTo(route: ROUTE_PATH): void {
    this.router.navigate([route]).then((r: boolean) => {
    });
  }

}
