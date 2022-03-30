import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './core/layout/pages/landing-page/landing-page.component';
import { ToDoListComponent } from './features/tasks/pages/to-do-list/to-do-list.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/to-do-list' },
      { path: 'to-do-list', component: ToDoListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
