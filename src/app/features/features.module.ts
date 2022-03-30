import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ToDoListComponent } from './tasks/pages/to-do-list/to-do-list.component';


@NgModule({
  declarations: [
    ToDoListComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [    
  ],
})
export class FeaturesModule { }
