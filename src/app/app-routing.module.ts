import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ROUTE_PATH} from '../core/const/routes.enum';
import {MainLayoutComponent} from '../shared/components/main-layout/main-layout.component';
import {ItemDetailedPageComponent} from '../views/item-detailed-page/item-detailed-page.component';
import {ItemNewPageComponent} from '../views/item-new-page/item-new-page.component';
import {ItemsListPageComponent} from '../views/items-list-page/items-list-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {path: ROUTE_PATH.EMPTY, component: ItemsListPageComponent},
      {path: ROUTE_PATH.NEW_PAGE, component: ItemNewPageComponent},
      {path: `${ROUTE_PATH.DETAILED_PAGE}/:id`, component: ItemDetailedPageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {initialNavigation: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
