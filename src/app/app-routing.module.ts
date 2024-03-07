import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ROUTE_PATH} from '../core/const/routes.enum';
import {MainLayoutComponent} from '../shared/components/main-layout/main-layout.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: ROUTE_PATH.EMPTY,
        loadChildren: () => import('../views/items-list-page/items-list-page.module').then(m => m.ItemsListPageModule)
      },
      {
        path: ROUTE_PATH.NEW_PAGE,
        loadChildren: () => import('../views/item-new-page/item-new-page.module').then(m => m.ItemNewPageModule)
      },
      {
        path: ROUTE_PATH.DETAILED_PAGE,
        loadChildren: () => import('../views/item-detailed-page/item-detailed-page.module').then(m => m.ItemDetailedPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {initialNavigation: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
