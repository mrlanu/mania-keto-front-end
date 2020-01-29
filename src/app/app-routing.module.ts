import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './navigation/header/header.component';


const routes: Routes = [
  {path: 'welcome-page', component: HeaderComponent},
  {path: '**', redirectTo: '/welcome-page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
