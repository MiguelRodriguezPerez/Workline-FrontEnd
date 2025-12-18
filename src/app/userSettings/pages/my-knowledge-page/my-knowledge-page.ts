import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Footer } from "../../../shared/components/footer/footer";
import { NavbarWrapper } from "../../../shared/components/navbar/navbar-wrapper/navbar-wrapper";
import { selectLoggedUser } from '../../../shared/globalState/login/login.selector';
import { AsideOptions } from "../../shared/components/aside-options/aside-options";
import { MyKnowledgeContainer } from "../../components/my-knowledge-page/my-knowledge-container/my-knowledge-container";

@Component({
  selector: 'my-knowledge-page',
  imports: [NavbarWrapper, AsideOptions, Footer, MyKnowledgeContainer],
  templateUrl: './my-knowledge-page.html',
  styleUrl: './my-knowledge-page.scss',
})
export class MyKnowledgePage { 
  store = inject(Store);
  currentUser = this.store.selectSignal(selectLoggedUser);
}
