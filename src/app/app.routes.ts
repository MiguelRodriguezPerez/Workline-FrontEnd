import { Routes } from '@angular/router';
import { HomePage } from './home/pages/home-page/home-page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'jobs',
        loadChildren: () => import('./job/job.routes').then((m) => m.jobRoutes)
    }
];
