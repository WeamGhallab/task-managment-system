import { NgModule } from '@angular/core';

import { HeaderComponent } from './layout/components/header/header.component';
import { LandingPageComponent } from './layout/pages/landing-page/landing-page.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './layout/components/footer/footer.component';
import { LoaderComponent } from './layout/components/loader/loader.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [    
  ],
})
export class CoreModule { }
