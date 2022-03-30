import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
    name: 'localizedDate',
    pure: false
})
export class LocalizedDatePipe implements PipeTransform {
    constructor(private _translateService: TranslateService) { }

    transform(value: any, pattern: string = 'mediumDate'): any {
        let datePipe: DatePipe = new DatePipe(this._translateService.currentLang);
        return datePipe.transform(value, pattern);
    }
}