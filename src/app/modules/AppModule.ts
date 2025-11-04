// app.module.ts
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PaginatorModule } from "primeng/paginator";

@NgModule({
  imports: [
    MatIconModule,
    PaginatorModule
  ],
})
export class AppModule {

}