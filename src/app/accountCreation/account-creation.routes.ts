import { Routes } from "@angular/router";
import { CreateAccountFirstStepPage } from './pages/create-account-first-step-page/create-account-first-step-page';

export const accountCreationRoutes: Routes = [
    {
        path: 'firstStep',
        component: CreateAccountFirstStepPage
    }
]