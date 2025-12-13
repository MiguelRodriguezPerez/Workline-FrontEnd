import { Component } from '@angular/core';
import { NewConocimientoWrapper } from "../new-conocimiento-wrapper/wrapper/new-conocimiento-wrapper";

@Component({
  selector: 'no-knowledge-user',
  imports: [NewConocimientoWrapper],
  templateUrl: './no-knowledge-user.html',
  styleUrl: './no-knowledge-user.scss',
})
export class NoKnowledgeUser { }
