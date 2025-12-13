import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLoggedUser } from '../../../shared/globalState/login/login.selector';
import { NavbarWrapper } from "../../../shared/components/navbar/navbar-wrapper/navbar-wrapper";
import { AsideOptions } from "../../shared/components/aside-options/aside-options";
import { MyKnowledgeContainer } from "../../components/my-knowledge-page/my-knowledge-container/my-knowledge-container";
import { Footer } from "../../../shared/components/footer/footer";

@Component({
  selector: 'my-experience-page',
  imports: [NavbarWrapper, AsideOptions, MyKnowledgeContainer, Footer],
  templateUrl: './my-experience-page.html',
  styleUrl: './my-experience-page.scss',
})
export class MyExperiencePage { 
  store = inject(Store);
  currentUser = this.store.selectSignal(selectLoggedUser);
}
