import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ValidationErrors, FormGroup } from '@angular/forms';
import { UtilitiesService } from 'src/app/core/services/utilities.service';

@Component({
  selector: 'app-validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.scss']
})
export class ValidationErrorComponent implements OnInit {

  @Input() control: FormControl;
  @Input() customName: string;
  @Input() customMessage: string | null;
  @Input() customValidatorsErrorMessages: { [key: string]: string };

  fieldName: string;

  constructor(private _utilitiesService:UtilitiesService){}
  
  ngOnInit() {
      this.fieldName = this.customName || this._getControlName();
  }

  getErrorMessage(errors: ValidationErrors | null): string {
      const properties = Object.keys(errors);
      let conditionValue = null;
      const totalValidationErrorMessages = { ...this._utilitiesService.validationErrorMessage, ...this.customValidatorsErrorMessages };
      switch (properties[0]) {
          case 'min':
              conditionValue = errors['min']?.min;
              break;
          case 'max':
              conditionValue = errors['max']?.max;
              break;
          case 'minNumber':
              conditionValue = errors['minNumber'];
              break;
          case 'maxNumber':
              conditionValue = errors['maxNumber'];
              break;
          case 'minContentSize':
              conditionValue = errors['minContentSize'];
              break;
          case 'maxContentSize':
              conditionValue = errors['maxContentSize'];
              break;
          case 'minlength':
              conditionValue = errors['minlength']?.requiredLength;
              break;
          case 'maxlength':
              conditionValue = errors['maxlength']?.requiredLength;
              break;
          default:
              conditionValue = null;
      }

      if (typeof (totalValidationErrorMessages[properties[0]]) == "string"){
          return totalValidationErrorMessages[properties[0]];
      }
      else {
          return totalValidationErrorMessages[properties[0]](this.fieldName, conditionValue);
      };
  }


  /**
   * Search for the control name inside its parent controls and return it
   */
  private _getControlName(): string {
      let controlName = null;
      const parent = this.control.parent;

      if (parent instanceof FormGroup) {
          for (const name in parent.controls) {
              if (this.control === parent.controls[name]) controlName = name;
          }
      }

      return controlName;
  }

}
