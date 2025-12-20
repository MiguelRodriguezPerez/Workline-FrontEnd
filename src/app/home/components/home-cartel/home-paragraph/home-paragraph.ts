import { Component } from '@angular/core';
import { Button } from "primeng/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'home-paragraph',
  imports: [Button, RouterLink],
  templateUrl: './home-paragraph.html',
  styleUrl: './home-paragraph.scss',
})
export class HomeParagraph { 

}
