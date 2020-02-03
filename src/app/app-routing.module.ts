import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {DailySummaryComponent} from './main/daily-summary/daily-summary.component';

const routes: Routes = [
  /*{path: 'main', component: MainComponent},*/
  {path: 'main', component: MainComponent, children: [
      {path: '', component: DailySummaryComponent},
      /*
      {path: 'test2', component: SidebarComponent},*/
      /*{path: 'charts', component: ChartsComponent},
      {path: 'budgets', component: BudgetsComponent},
      {path: 'accounts', component: AccountsComponent},
      {path: 'categories', component: CategoriesComponent}*/
    ]},
  {path: '**', redirectTo: '/main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
