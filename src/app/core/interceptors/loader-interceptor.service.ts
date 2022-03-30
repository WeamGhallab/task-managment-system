import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';

import { LoaderService } from '../services/loader.service';

@Injectable({ providedIn: 'root' })
export class LoaderInterceptorService implements HttpInterceptor {
  constructor(private _loaderService: LoaderService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this._loaderService.handleRequest(true);
    return next.handle(req).pipe(
      finalize(() => {
        this._loaderService.handleRequest(false);
      })
    );
  }
}
