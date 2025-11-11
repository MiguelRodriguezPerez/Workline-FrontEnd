import { Routes } from "@angular/router";
import { JobSearchPage } from "./pages/job-search-page/job-search-page";
import { JobPostPage } from "./pages/job-post-page/job-post-page";

export const jobRoutes: Routes = [
    {
        path: '',
        component: JobSearchPage
    },
    {
        path:'jobPosting/:id',
        component: JobPostPage
    }
]