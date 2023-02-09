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

@NgModule({
  declarations: [
    AppComponent,
    FdTrackerComponent,
    CreateComponent,
    EditComponent,
    ToolbarComponent,
    InvestmentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [JwtService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
