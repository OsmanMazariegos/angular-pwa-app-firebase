import { NgModule } from '@angular/core';
import { TemplateComponent } from './template/template.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  { 
    path: '', redirectTo:'/template',  pathMatch: 'full'
  },
  {
    path: 'template', component: TemplateComponent
  },
  {
    path: 'result', component: NotificationComponent
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
