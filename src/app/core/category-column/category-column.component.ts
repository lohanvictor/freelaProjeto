import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-column',
  templateUrl: './category-column.component.html',
  styleUrls: ['./category-column.component.scss']
})
export class CategoryColumnComponent implements OnInit {

  public limpezaArray: string[] = [
    'Limpeza de carro',
    'Limpeza de casa',
    'Limpeza de armazém',
    'Limpeza de quintal',
    'Limpeza de eletrodomestico',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
