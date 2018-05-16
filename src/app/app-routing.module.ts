import { NgModule } from '@angular/core';
import { TemplateComponent } from './template/template.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { 
    path: '', redirectTo:'/template',  pathMatch: 'full'
  },
  {
    path: 'template', component: TemplateComponent
  },
  { 
    path: '**',  component: TemplateComponent
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  declarations: []
})
export class AppRoutingModule { }
