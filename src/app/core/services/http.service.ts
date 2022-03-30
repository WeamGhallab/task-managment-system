import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class HttpService {
  serviceURL: string;

  constructor(private _http: HttpClient) {
    this.serviceURL = environment.serviceURL;
  }

  get(url: string, options = {}): Observable<any> {
    return this._http.get<any>(this.serviceURL.concat(url), options);
  }

  getSingle(url: string, id: any, options = {}): Observable<any> {
    return this._http.get<any>(
      this.serviceURL.concat(url, '/', id.toString()),
      options
    );
  }

  getWithQueryParams(
    url: string,
    queryParms: HttpParams,
    options = {}
  ): Observable<any> {
    return this._http.get<any>(this.serviceURL.concat(url), {
      ...options,
      params: queryParms,
    });
  }

  post(url: string, data: object, options = {}): Observable<any> {
    return this._http.post<any>(this.serviceURL.concat(url), data, options);
  }
  
  patch(url: string, data: object, options = {}): Observable<any> {
    return this._http.patch<any>(this.serviceURL.concat(url), data, options);
  }

  postWithQueryParams(
    url: string,
    queryParms: HttpParams,
    options = {}
  ): Observable<any> {
    return this._http.post<any>(this.serviceURL.concat(url), null, {
      ...options,
      params: queryParms,
    });
  }

  put(url: string, data: object, options = {}): Observable<any> {
    return this._http.put<any>(this.serviceURL.concat(url), data, options);
  }

  putWithQueryParams(
    url: string,
    queryParms: HttpParams,
    options = {}
  ): Observable<any> {
    return this._http.put<any>(this.serviceURL.concat(url), null, {
      ...options,
      params: queryParms,
    });
  }

  delete(url: string, options = {}): Observable<any> {
    return this._http.delete<any>(this.serviceURL.concat(url), options);
  }

  deleteSingle(url: string, id: any, options = {}): Observable<any> {
    return this._http.delete<any>(this.serviceURL.concat(url, '/', id), options);
  }

  deleteWithQueryParams(
    url: string,
    queryParms: HttpParams,
    options = {}
  ): Observable<any> {
    return this._http.delete<any>(this.serviceURL.concat(url), {
      ...options,
      params: queryParms,
    });
  }
}
