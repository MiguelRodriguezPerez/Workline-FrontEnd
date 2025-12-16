import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Footer } from "../../../shared/components/footer/footer";
import { NavbarWrapper } from "../../../shared/components/navbar/navbar-wrapper/navbar-wrapper";
import { selectLoggedUser } from '../../../shared/globalState/login/login.selector';
import { MyExperienceContainer } from "../../components/my-experience-page/my-experience-container/my-experience-container";
import { AsideOptions } from "../../shared/components/aside-options/aside-options";

@Component({
  selector: 'my-experience-page',
  imports: [NavbarWrapper, AsideOptions, Footer, MyExperienceContainer],
  templateUrl: './my-experience-page.html',
  styleUrl: './my-experience-page.scss',
})
export class MyExperiencePage { 
  store = inject(Store);
  currentUser = this.store.selectSignal(selectLoggedUser);
}
