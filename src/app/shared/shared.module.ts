import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';
import { NotificationPopupComponent } from './components/notification-popup/notification-popup.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckboxComponent } from './components/UI/checkbox/checkbox.component';
import { ButtonComponent } from './components/UI/button/button.component';
import { LocalizedDatePipe } from './pipes/localized-date.pipe';

@NgModule({
  declarations: [
    ValidationErrorComponent,
    NotificationPopupComponent,
    CheckboxComponent,
    ButtonComponent,
    LocalizedDatePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule,
    ValidationErrorComponent,
    NotificationPopupComponent,
    CheckboxComponent,
    ButtonComponent,
    LocalizedDatePipe
  ],
})
export class SharedModule {}
