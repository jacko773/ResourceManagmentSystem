import { NgModule } from '@angular/core';
import { Routes ,RouterModule} from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { EmployeeComponent } from '../employee/employee.component';
import { ProjectOverviewComponent } from '../project/project-overview/project-overview.component';
import { ProjectComponent } from '../project/project.component';
import { AuthenticationGaurd } from '../services/auth-gaurd';

const appRoutes : Routes=[
    {
        path : 'auth',component :AuthComponent
    },
    {
        path : 'employee',component :EmployeeComponent,canActivate :[AuthenticationGaurd]
    },
    { 
        path : 'project' ,component : ProjectComponent,canActivate :[AuthenticationGaurd]
    },
    {
        path : 'overview',component : ProjectOverviewComponent,canActivate :[AuthenticationGaurd]
    },
    {
        path : '**',component : AuthComponent
    }
    
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})


export class Routing{}