import { Component, OnInit } from '@angular/core';
import { BookDetails } from '../classes/book-details';
import { BookService } from '../services/book.service';
import { CategoryService } from '../services/category.service';
import { Category } from '../classes/Category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  constructor(private bookService: BookService, private categoryService: CategoryService, private activate: ActivatedRoute) { }
  books: BookDetails[] = [];
  // count: number = 0;
  textSearch: string = "";
  category: number;
  isSearch(): boolean {
    if (this.textSearch != "")
      return true;
    return false;
  }
  ngOnInit(): void {
    this.activate.params.subscribe(params => this.bookService.getAll(params.id).subscribe(state => this.books = state));
  }
}
