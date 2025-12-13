import { Routes } from "@angular/router";
import { MyDataPage } from "./pages/my-data-page/my-data-page";
import { MyJobInscriptionsPage } from "./pages/my-job-inscriptions-page/my-job-inscriptions-page";

export const mySettingsRoutes: Routes = [
    {
        path: 'myData',
        component: MyDataPage
    },
    {
        path: 'myJobInscriptions',
        component: MyJobInscriptionsPage
    }
]