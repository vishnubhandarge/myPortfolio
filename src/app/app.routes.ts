import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

export const routes: Routes = [
  // { path: '', component: PortfolioComponent },
  { path: 'frontend-projects', component: PortfolioComponent },
  { path: 'mvc-projects', component: PortfolioComponent },
  { path: 'backend-projects', component: PortfolioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
