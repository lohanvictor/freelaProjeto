import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-template',
  templateUrl: './category-template.component.html',
  styleUrls: ['./category-template.component.scss']
})
export class CategoryTemplateComponent implements OnInit {

  @Input('title') title: string;
  @Input('types') types: string[];

  constructor() { }

  ngOnInit(): void {
  }

  routeCategory(index) {
    const obj = this.types[index];
    console.log(obj)
  }

}
