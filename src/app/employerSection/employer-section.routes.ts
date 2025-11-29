import { Routes } from "@angular/router";
import { MyJobPostingsPage } from "./pages/my-job-postings-page/my-job-postings-page";
import { NewJobPostingPage } from './pages/new-job-posting-page/new-job-posting-page';
import { JobPostDetailPage } from "./pages/job-post-detail-page/job-post-detail-page";


export const employerSectionRoutes: Routes = [
    {
        path: 'myJobPostings',
        component: MyJobPostingsPage
    },
    {
        path: 'newJobPost',
        component: NewJobPostingPage
    },
    {
        path: 'jobPostDetail/:id',
        component: JobPostDetailPage
    }
]