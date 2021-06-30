import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../services/category.service';
import { Category } from '../classes/Category';
import { BorrowerService } from '../services/borrower.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-borrower-form',
  templateUrl: './borrower-form.component.html',
  styleUrls: ['./borrower-form.component.css']
})
export class BorrowerFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    tz: new FormControl("", [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
    ageCategory: new FormControl(),
    firstName: new FormControl('', [Validators.minLength(2), Validators.maxLength(15),
    Validators.pattern('[a-zA-Z ]*')]),
    lastName: new FormControl('', Validators.pattern('[a-zA-Z ]*')),
    phoneNumber: new FormControl(),
    mail: new FormControl("", Validators.email)
  });
  @Input() ifClear: boolean;
  @Output() update = new EventEmitter<boolean>();
  categories: Category[] = [];
  constructor(private category: CategoryService, private borrower: BorrowerService,
    private router: Router) { }

  ngOnInit(): void {
    // this.categories = this.category.getAll();
    this.category.getAll().subscribe(data => this.categories = data);

  }
  add(): void {
    // this.books.addBook(this.b).subscribe(() =>this.router.navigate(["books"]));
    this.borrower.push(this.form.value).subscribe(()=>this.router.navigate(["borrowers"]));
    
    console.log(this.form);
    this.update.emit(false);
  }
  reset(): void {
    this.form.reset();
  }

}
