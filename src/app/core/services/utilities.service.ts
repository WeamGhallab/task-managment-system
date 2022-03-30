import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import {String } from 'typescript-string-operations';
import { LanguageEnum } from "../enums/language.enum";

@Injectable({providedIn:'root'})
export class UtilitiesService{

  constructor(private _translateService:TranslateService){}

  validationErrorMessage = {
    required: (field: any) =>
    String.Format(
      this._translateService.instant('ErrorMSG.RequiredField'),
      field
    ),
  email: (field: any) =>
    String.Format(
      this._translateService.instant('ErrorMSG.EmailField'),
      field
    ),
  min: (field: any, value: any) =>
    String.Format(
      this._translateService.instant('ErrorMSG.MinValueField'),
      field,
      value
    ),
  max: (field: any, value: any) =>
    String.Format(
      this._translateService.instant('ErrorMSG.MaxValueField'),
      field,
      value
    ),
  minlength: (field: any, length: any) =>
    String.Format(
      this._translateService.instant('ErrorMSG.MinlengthField'),
      field,
      length
    ),
  maxlength: (field: any, length: any) =>
    String.Format(
      this._translateService.instant('ErrorMSG.MaxlengthField'),
      field,
      length
    ),
  minContentSize: (field: any, length: any) =>
    String.Format(
      this._translateService.instant('ErrorMSG.MinContentSizeField'),
      field,
      length
    ),
  maxContentSize: (field: any, length: any) =>
    String.Format(
      this._translateService.instant('ErrorMSG.MaxContentSizeField'),
      field,
      length
    ),
  minNumber: (field: any, value: any) =>
    String.Format(
      this._translateService.instant('ErrorMSG.MinNumberField'),
      field,
      value
    ),
  maxNumber: (field: any, value: any) =>
    String.Format(
      this._translateService.instant('ErrorMSG.MaxNumberField'),
      field,
      value
    ),
  pattern: (field: any) =>
    String.Format(
      this._translateService.instant('ErrorMSG.PatternField'),
      field
    ), 
  };


  setInitialLanguage(currentLang) {
    const htmlEl = document.getElementsByTagName('html')[0];
    !currentLang && (currentLang = LanguageEnum.Arabic);
    this._translateService.use(currentLang);
    htmlEl.setAttribute('lang', currentLang);
    if (currentLang == LanguageEnum.Arabic) {
      htmlEl.setAttribute('class', 'rtl');
    } else {
      htmlEl.setAttribute('class', 'ltr');
    }
  }

  days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thusday',
    'Friday',
    'Saturday'
  ]
}