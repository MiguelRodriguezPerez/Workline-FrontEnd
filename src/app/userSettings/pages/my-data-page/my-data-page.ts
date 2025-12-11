import { Component, inject } from '@angular/core';
import { NavbarWrapper } from "../../../shared/components/navbar/navbar-wrapper/navbar-wrapper";
import { Footer } from "../../../shared/components/footer/footer";
import { Store } from '@ngrx/store';
import { selectLoggedUser } from '../../../shared/globalState/login/login.selector';
import { AsideOptions } from "../../shared/components/aside-options/aside-options";
import { MyDataContainer } from "../../components/my-data-page/my-data-container/my-data-container";
import { AsideOptionsWrapper } from "../../shared/components/aside-options-wrapper/aside-options-wrapper";

@Component({
  selector: 'my-data-page',
  imports: [NavbarWrapper, Footer, AsideOptions, MyDataContainer, AsideOptionsWrapper],
  templateUrl: './my-data-page.html',
  styleUrl: './my-data-page.scss',
})
export class MyDataPage { 

  store = inject(Store);
  currentUser = this.store.selectSignal(selectLoggedUser);

}
