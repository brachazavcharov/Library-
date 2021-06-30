import { Component, OnInit } from '@angular/core';
import { BookDetails } from '../classes/book-details';
import { BookService } from '../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../classes/Category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private bookService: BookService, private route: ActivatedRoute, private category: CategoryService) { }
  b: BookDetails = null;
  c: Category = null;
  getCategory(id: number): Category {
    this.category.getById(id).subscribe(data => this.c = data);
    return this.c;
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => this.bookService.getBook(params.id).subscribe(data => this.b = data));
  }
}
