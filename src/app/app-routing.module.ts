import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {authGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    //Rute für die Loginseite
    path: "auth/login",
    loadComponent: () =>
      import(`./pages/auth/login/login.component`).then(v => v.LoginComponent)
  },
  {
    //Rute für die Registrierungsseite
    path: "auth/register",
    loadComponent: () =>
      import(`./pages/auth/register/register.component`).then(v => v.RegisterComponent)
  },
  {
    //Rute für die Category Ruten
    path: "category",
    loadChildren: () =>
      import('./pages/categorys/category.module').then(v => v.CategoryModule),
  },
  {
    //Rute für die Produkterstellung-Seite
    path: "products/create",
    loadComponent: () =>
      import(`./pages/products/create/create.component`).then(v => v.CreateComponent),
    canActivate: [authGuard]
  },
  {
    //Rute für die Produkt edit Seite
    path: "products/edit/:id",
    loadComponent: () =>
      import(`./pages/products/create/create.component`).then(v => v.CreateComponent),
    canActivate: [authGuard]
  },
  {
    //Rute für die Produkt auflistung
    path: "products/list",
    loadComponent: () =>
      import(`./pages/products/list/list.component`).then(v => v.ListComponent)
  },
  {
    //Rute für die produkt Detailansicht
    path: "products/show/:id",
    loadComponent: () =>
      import(`./pages/products/show/show.component`).then(v => v.ShowComponent)
  },
  {
    //Rute für die Benutzerliste
    path: "users/list",
    loadComponent: () =>
      import(`./pages/users/list/list.component`).then((v => v.ListComponent)),
    canActivate: [authGuard]
  },
  {
    //Rute für die User Beförderung
    path: "users/promote",
    loadComponent: () =>
      import(`./pages/users/promote/promote.component`).then((v => v.PromoteComponent)),
    canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
