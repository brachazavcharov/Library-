import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../classes/Category';

@Component({
  selector: 'app-category-formatter',
  templateUrl: './category-formatter.component.html',
  styleUrls: ['./category-formatter.component.css']
})
export class CategoryFormatterComponent implements OnInit {

  constructor() { }
  @Input() category: Category;
  ngOnInit(): void {
  }

}
