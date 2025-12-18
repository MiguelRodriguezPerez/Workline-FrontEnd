import { Component } from '@angular/core';
import { Button } from "primeng/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'no-jobs-inscribed',
  imports: [Button, RouterLink],
  templateUrl: './no-jobs-inscribed.html',
  styleUrl: './no-jobs-inscribed.scss',
})
export class NoJobsInscribed { }
