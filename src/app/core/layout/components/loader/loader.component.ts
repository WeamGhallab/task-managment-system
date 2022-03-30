import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  isLoading: BehaviorSubject<boolean> = this._loaderService.isLoading;

  constructor(private _loaderService: LoaderService) {
  }

  ngOnInit(): void {}
}
