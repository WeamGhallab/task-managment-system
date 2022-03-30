import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = '';
    const headers = req.headers
      .set('content-type', 'application/json')
      .set('Accept', 'application/json;')
      .set('Authorization', `Bearer ${token}`);
    req = req.clone({ headers });
    return next.handle(req);
  }
}
