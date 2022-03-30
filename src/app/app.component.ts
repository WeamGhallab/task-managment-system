import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageEnum } from './core/enums/language.enum';
import { UtilitiesService } from './core/services/utilities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private _translateService: TranslateService,
    private _utilitiesService: UtilitiesService
  ) {
    const storageLang = localStorage.getItem('lang');
    this._utilitiesService.setInitialLanguage(
      storageLang || this._translateService.currentLang
    );
  }
}
