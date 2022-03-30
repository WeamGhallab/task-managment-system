import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageEnum } from 'src/app/core/enums/language.enum';
import { UtilitiesService } from 'src/app/core/services/utilities.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentLang: string;

  constructor(
    private _translationService: TranslateService,
    private _utilitiesService: UtilitiesService
  ) {
    this.currentLang = _translationService.currentLang;
  }

  ngOnInit(): void {}

  get langEnum(): typeof LanguageEnum{
    return LanguageEnum;
  }

  onSwitchLang() {
    this.currentLang =
      this.currentLang == LanguageEnum.Arabic
        ? LanguageEnum.English
        : LanguageEnum.Arabic;
    this._utilitiesService.setInitialLanguage(this.currentLang);
    localStorage.setItem('lang',this.currentLang);
  }
}
