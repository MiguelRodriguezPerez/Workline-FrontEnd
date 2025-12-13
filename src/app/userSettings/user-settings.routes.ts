import { Routes } from "@angular/router";
import { MyDataPage } from "./pages/my-data-page/my-data-page";
import { MyJobInscriptionsPage } from "./pages/my-job-inscriptions-page/my-job-inscriptions-page";
import { MyKnowledgePage } from "./pages/my-knowledge-page/my-knowledge-page";
import { MyExperiencePage } from "./pages/my-experience-page/my-experience-page";

export const mySettingsRoutes: Routes = [
    {
        path: 'myData',
        component: MyDataPage
    },
    {
        path: 'myJobInscriptions',
        component: MyJobInscriptionsPage
    },
    {
        path: 'myKnowledge',
        component: MyKnowledgePage
    },
    {
        path: 'myExperience',
        component: MyExperiencePage
    }
]