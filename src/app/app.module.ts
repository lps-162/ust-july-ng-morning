import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LearnComponent } from './learn/learn.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeesCreateComponent } from './employees/employees-create/employees-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LearnComponent,
    EmployeesComponent,
    EmployeeDetailsComponent,
    EmployeesCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
