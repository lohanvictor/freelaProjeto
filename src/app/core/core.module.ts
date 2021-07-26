import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryColumnComponent } from './category-column/category-column.component';
import { CategoryTemplateComponent } from './category-template/category-template.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CategoryColumnComponent,
    CategoryTemplateComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    CategoryColumnComponent
  ]
})
export class CoreModule { }
