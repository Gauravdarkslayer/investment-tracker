import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FdTrackerComponent } from './components/fd-tracker/fd-tracker.component';
import { CreateComponent } from './components/fd-tracker/create/create.component';
import { EditComponent } from './components/fd-tracker/edit/edit.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { JwtService } from './services/jwt.service';
import { DataService } from './services/data.service';
import { InvestmentListComponent } from './components/fd-tracker/investment-list/investment-list.component';
import { ProgressLoaderComponent } from './components/shared/progress-loader/progress-loader.component';
import { InvestmentOverviewDashboardComponent } from './components/shared/investment-overview-dashboard/investment-overview-dashboard.component';
import { FdCalculationsService } from './services/fd-calculations.service';
import { HelperService } from './services/helper.service';
import { InvestmentDetailComponent } from './components/investment-detail/investment-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FdTrackerComponent,
    CreateComponent,
    EditComponent,
    ToolbarComponent,
    InvestmentListComponent,
    ProgressLoaderComponent,
    InvestmentOverviewDashboardComponent,
    InvestmentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [JwtService,DataService,FdCalculationsService,HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
