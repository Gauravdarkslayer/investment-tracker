import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/fd-tracker/create/create.component';
import { EditComponent } from './components/fd-tracker/edit/edit.component';
import { FdTrackerComponent } from './components/fd-tracker/fd-tracker.component';
import { InvestmentListComponent } from './components/fd-tracker/investment-list/investment-list.component';
import { InvestmentDetailComponent } from './components/fd-tracker/investment-detail/investment-detail.component';

const routes: Routes = [
  { path: '', component: FdTrackerComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'investments/:id', component: InvestmentListComponent },
  { path: 'investment-detail/:id', component: InvestmentDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
