import { Routes } from "@angular/router";
import { MyJobPostingsPage } from "./pages/my-job-postings-page/my-job-postings-page";


export const employerSectionRoutes: Routes = [
    {
        path: 'myJobPostings',
        component: MyJobPostingsPage
    }
]