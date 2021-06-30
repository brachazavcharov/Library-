import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Lendings } from '../classes/lendings';
import { BookService } from '../services/book.service';
import { BookDetails } from '../classes/book-details';
import { BorrowerService } from '../services/borrower.service';
import { BorrowerLIst } from '../classes/borrower-list';
import { LendingsService } from '../services/lendings.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lending-form',
  templateUrl: './lending-form.component.html',
  styleUrls: ['./lending-form.component.css']
})
export class LendingFormComponent implements OnInit {
  form = this.fb.group({
    borrower: ['', Validators.required],
    book: ['', Validators.required]
  });

  constructor(private router: Router, private b: BorrowerService, private bookList: BookService, private fb: FormBuilder, private l: LendingsService) { }
  borrowers: BorrowerLIst[];
  booksList: BookDetails[];
  bookSelect: string = "";
  borrowerSelect: string = "";
  // borrower:BorrowerLIst=null;
  d: Date;
  add() {
    let { book, borrower } = this.form.value;
    // let borrId = this.form.value.borrowerId;
    // let bookId = this.form.value;
    book = JSON.parse(book);
    borrower = JSON.parse(borrower);
    this.d = new Date();
    this.d.setMonth(this.d.getMonth() + 1);
    let lend = new Lendings("", book.id, borrower.id, this.d, this.d, null, null,null);
    this.l.addLending(lend).subscribe(()=>this.router.navigate(["lendings"]));
    
  }
  ngOnInit(): void {
    // this.borrowers = this.b.getAll();
    this.b.getAll().subscribe(data => this.borrowers = data);
    this.bookList.getAll().subscribe(data => this.booksList = data);
  }

}
