import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { AuthComponent } from './auth/auth.component';
import { ProjectOverviewComponent } from './project/project-overview/project-overview.component';
import { EmployeeComponent } from './employee/employee.component';

import { Routing } from './routes/routes'

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    AuthComponent,
    ProjectOverviewComponent,
    EmployeeComponent,
   ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
