import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../classes/Category';
import { BookDetails } from '../classes/book-details';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.css']
})
export class AddBookFormComponent implements OnInit {

  categories: Category[] = [];
  b: BookDetails = new BookDetails();
  constructor(private category: CategoryService, private books: BookService, private router: Router) { }

  ngOnInit(): void {
    // this.categories = this.category.getAll();
    this.category.getAll().subscribe(data => this.categories = data);

  }
  save(): void {
    this.b.id = 0;
      this.b.ageCategory = parseInt(this.b.ageCategory.toString());
    this.books.addBook(this.b).subscribe(() =>this.router.navigate(["books"]));

  }
}
