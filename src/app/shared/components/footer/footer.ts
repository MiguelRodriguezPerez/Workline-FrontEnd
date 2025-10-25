import { Component } from '@angular/core';
import { FooterLogo } from "./footer-logo/footer-logo";

@Component({
  selector: 'wkFooter',
  imports: [FooterLogo],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer { }
