import { Routes } from '@angular/router';
import { HomePage } from './home/pages/home-page/home-page';
import { LoginPage } from './login/pages/login-page/login-page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        // TODO: Refactor route to jobSearch
        path: 'jobs',
        loadChildren: () => import('./jobSearch/job.routes').then((m) => m.jobRoutes)
    },
    {
        path: 'login',
        component: LoginPage
    }
];
