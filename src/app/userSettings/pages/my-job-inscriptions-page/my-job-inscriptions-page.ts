import { Component, inject } from '@angular/core';
import { NavbarWrapper } from "../../../shared/components/navbar/navbar-wrapper/navbar-wrapper";
import { Footer } from "../../../shared/components/footer/footer";
import { Store } from '@ngrx/store';
import { selectLoggedUser } from '../../../shared/globalState/login/login.selector';
import { AsideOptions } from "../../shared/components/aside-options/aside-options";
import { MyJobInscriptionsContainer } from "../../components/my-job-inscriptions-page/my-job-inscriptions-container/my-job-inscriptions-container";

@Component({
  selector: 'my-job-inscriptions-page',
  imports: [NavbarWrapper, Footer, AsideOptions, MyJobInscriptionsContainer],
  templateUrl: './my-job-inscriptions-page.html',
  styleUrl: './my-job-inscriptions-page.scss',
})
export class MyJobInscriptionsPage { 
  store = inject(Store);
  currentUser = this.store.selectSignal(selectLoggedUser);

}
