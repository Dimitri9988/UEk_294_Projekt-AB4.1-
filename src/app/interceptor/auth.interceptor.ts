import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (localStorage.getItem("ACCESS_TOKEN")) {
      return next.handle(request.clone({
        setHeaders: {
          'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
        }
      }));
    }
    return next.handle(request);
  }
}
