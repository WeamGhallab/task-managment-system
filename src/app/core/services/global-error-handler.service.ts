import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorTypeEnum } from '../enums/error-types.enum';

@Injectable({ providedIn: 'root' })
export class GlobalErrorHandlerService {
  constructor() {}
//TODO: show notifications
  handleError(error: any) {
    if (error instanceof HttpErrorResponse) {
      switch (error.status) {
        case ErrorTypeEnum.UnAuthorized:
          break;
        case ErrorTypeEnum.UnAuthenticated:
          break;
        case ErrorTypeEnum.NotFound:
          break;
        case ErrorTypeEnum.BadRequest:
          break;
        case ErrorTypeEnum.NetworkOrServer:
          break;
        default:
      }
    } else {
    }
  }
}
