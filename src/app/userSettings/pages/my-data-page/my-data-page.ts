import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Footer } from "../../../shared/components/footer/footer";
import { NavbarWrapper } from "../../../shared/components/navbar/navbar-wrapper/navbar-wrapper";
import { selectLoggedUser } from '../../../shared/globalState/login/login.selector';
import { MyDataContainer } from "../../components/my-data-page/my-data-container/my-data-container";
import { AsideOptions } from "../../shared/components/aside-options/aside-options";

@Component({
  selector: 'my-data-page',
  imports: [NavbarWrapper, Footer, AsideOptions, MyDataContainer],
  templateUrl: './my-data-page.html',
  styleUrl: './my-data-page.scss',
})
export class MyDataPage { 

  store = inject(Store);
  currentUser = this.store.selectSignal(selectLoggedUser);

}
