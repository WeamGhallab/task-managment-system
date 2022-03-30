import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaderService {
  isLoading :BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  numberOfRequests: number = 0;

  constructor() {}

  handleRequest = (isNewRequest: boolean): void => {
    this.numberOfRequests = (isNewRequest) ? this.numberOfRequests + 1 : this.numberOfRequests - 1;
    this.isLoading.next(this.numberOfRequests > 0);
  };
}
