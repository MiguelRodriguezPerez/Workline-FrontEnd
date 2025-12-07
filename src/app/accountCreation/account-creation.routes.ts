import { Routes } from "@angular/router";
import { CreateAccountFirstStepPage } from './pages/create-account-first-step-page/create-account-first-step-page';
import { CreateAccountSecondStep } from "./pages/create-account-second-step/create-account-second-step";

export const accountCreationRoutes: Routes = [
    {
        path: 'firstStep',
        component: CreateAccountFirstStepPage
    },
    {
        path: 'secondStep',
        component: CreateAccountSecondStep
    }
]