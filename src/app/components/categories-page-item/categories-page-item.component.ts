import { Component, Input } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-categories-page-item',
  templateUrl: './categories-page-item.component.html',
  styleUrls: ['./categories-page-item.component.css']
})
export class CategoriesPageItemComponent {
  @Input() data!: Category; 
}
