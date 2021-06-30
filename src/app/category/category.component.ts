import { Component, OnInit } from '@angular/core';
import { Category } from '../classes/Category';
import { CategoryService } from '../services/category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryList: Category[] = null;
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    //  this.categoryList=this.categoryService.getAll();
    this.categoryService.getAll().subscribe(data => this.categoryList = data);

  }

}
