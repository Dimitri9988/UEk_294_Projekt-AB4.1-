import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {authGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "auth/login",
    loadComponent: () =>
      import(`./pages/auth/login/login.component`).then(v => v.LoginComponent)
  },
  {
    path: "auth/register",
    loadComponent: () =>
      import(`./pages/auth/register/register.component`).then(v => v.RegisterComponent)
  },
  {
    path: "category",
    loadChildren: () =>
      import('./pages/categorys/category.module').then(v => v.CategoryModule),
  },
  {
    path: "products/create",
    loadComponent: () =>
      import(`./pages/products/create/create.component`).then(v => v.CreateComponent),
    canActivate: [authGuard]
  },
  {
    path: "products/edit/:id",
    loadComponent: () =>
      import(`./pages/products/create/create.component`).then(v => v.CreateComponent)
  },
  {
    path: "products/list",
    loadComponent: () =>
      import(`./pages/products/list/list.component`).then(v => v.ListComponent)
  },
  {
    path: "products/show/:id",
    loadComponent: () =>
      import(`./pages/products/show/show.component`).then(v => v.ShowComponent)
  },
  {
    path: "users/list",
    loadComponent: () =>
      import(`./pages/users/list/list.component`).then((v => v.ListComponent))
  },
  {
    path: "users/promote",
    loadComponent: () =>
      import(`./pages/users/promote/promote.component`).then((v => v.PromoteComponent))
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
