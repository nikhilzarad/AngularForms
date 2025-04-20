import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ValidationDemoComponent } from './components/validation-demo/validation-demo.component';

export const routes: Routes = [
  { path: '', redirectTo: '/template-driven', pathMatch: 'full' },
  { path: 'template-driven', component: TemplateDrivenFormComponent },
  { path: 'reactive', component: ReactiveFormComponent },
  { path: 'dynamic', component: DynamicFormComponent },
  { path: 'validation', component: ValidationDemoComponent },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}