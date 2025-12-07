import { Routes } from '@angular/router';
import { HomePage } from './home/pages/home-page/home-page';
import { LoginPage } from './login/pages/login-page/login-page';
import { authGuard } from './general/guards/auth-guard';
import { employerSectionGuard } from './employerSection/guards/employer-section.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'jobs',
        loadChildren: () => import('./jobSearch/job-search.routes').then((m) => m.jobSearchRoutes)
    },
    {
        path: 'login',
        canActivate: [authGuard],
        component: LoginPage
    },
    {
        path: 'employerSection',
        canActivate: [employerSectionGuard],
        canActivateChild: [employerSectionGuard],
        loadChildren: () => import('./employerSection/employer-section.routes').then((m) => m.employerSectionRoutes)
    },
    {
        path: 'accountCreation',
        loadChildren: () => import('./accountCreation/account-creation.routes').then((m) => m.accountCreationRoutes)
    }
];
