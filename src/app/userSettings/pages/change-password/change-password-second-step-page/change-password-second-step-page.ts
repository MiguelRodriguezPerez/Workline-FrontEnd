import { Component } from '@angular/core';
import { NavbarWrapper } from "../../../../shared/components/navbar/navbar-wrapper/navbar-wrapper";
import { Footer } from "../../../../shared/components/footer/footer";
import { ChangePasswordSecondStepContainer } from "../../../components/change-password-pages/change-password-second-step-container/change-password-second-step-container";

@Component({
  selector: 'change-password-second-step-page',
  imports: [NavbarWrapper, Footer, ChangePasswordSecondStepContainer],
  templateUrl: './change-password-second-step-page.html',
  styleUrl: './change-password-second-step-page.scss',
})
export class ChangePasswordSecondStepPage { }
