import { Component } from '@angular/core';
import { FooterLogo } from "./footer-logo/footer-logo";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'wkFooter',
  imports: [FooterLogo, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer { }
