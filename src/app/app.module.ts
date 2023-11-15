import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FooterComponent} from "./pages/elements/footer/footer.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {HeaderComponent} from "./pages/elements/header/header.component";
import { CreateComponent } from './pages/categorys/create/create.component';
import { DeleteComponent } from './pages/categorys/delete/delete.component';
import { EditComponent } from './pages/categorys/edit/edit.component';
import { ListComponent } from './pages/categorys/list/list.component';
import { ShowComponent } from './pages/categorys/show/show.component';
import { PromoteComponent } from './pages/users/promote/promote.component';
import {ApiModule, Configuration} from './openapi-client';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./interceptor/auth.interceptor";




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ApiModule.forRoot(() => {
      return new Configuration({
        basePath: 'https://product-manager.cyrotech.ch'
      })
    }),
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

