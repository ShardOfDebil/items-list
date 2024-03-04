import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from '../shared/components/main-layout/main-layout.component';
import {ItemDetailedPageComponent} from '../views/item-detailed-page/item-detailed-page.component';
import {ItemNewPageComponent} from '../views/item-new-page/item-new-page.component';
import {ItemsListPageComponent} from '../views/items-list-page/items-list-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {path: '', component: ItemsListPageComponent},
      {path: 'item-new', component: ItemNewPageComponent},
      {path: 'authorization', component: ItemDetailedPageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {initialNavigation: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
