import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {authGuard} from "../../guards/auth.guard";

const routes: Routes = [
  {
    //Rute zur Erstellungsseite für Kategorien
    path: 'create',
    loadComponent: () => import('./create/category-create.component').then(v => v.CategoryCreateComponent),
    canActivate: [authGuard]
  },
  {
    //Rute zur Bearbeitens Seite für Kategorien
    path: 'edit/:id',
    loadComponent: () => import('./create/category-create.component').then(v => v.CategoryCreateComponent),
    canActivate: [authGuard]
  },
  {
    //Rute zur auflistung der Kategorien
    path: 'list',
    loadComponent: () => import('./list/list.component').then(v => v.ListComponent)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
}
