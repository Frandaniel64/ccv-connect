import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'resources', component: ResourcesComponent },
    { path: 'admin/login', component: LoginComponent },
    { path: 'admin/dashboard', component: DashboardComponent, canActivate: [authGuard] },
    { path: '**', redirectTo: '' }
];
