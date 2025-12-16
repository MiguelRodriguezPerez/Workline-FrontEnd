import { Component } from '@angular/core';
import { NavbarWrapper } from "../../../../shared/components/navbar/navbar-wrapper/navbar-wrapper";
import { Footer } from "../../../../shared/components/footer/footer";
import { ChangePasswordFirstStepContainer } from "../../../components/change-password-pages/change-password-first-step-container/change-password-first-step-container";

@Component({
  selector: 'change-password-first-step-page',
  imports: [NavbarWrapper, Footer, ChangePasswordFirstStepContainer],
  templateUrl: './change-password-first-step-page.html',
  styleUrl: './change-password-first-step-page.scss',
})
export class ChangePasswordFirstStepPage { }
