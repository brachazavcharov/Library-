import { Component, OnInit } from '@angular/core';
import { BorrowerService } from '../services/borrower.service';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {
  numBorrower: number;
  numBook: number;
  constructor(private borrower: BorrowerService, private boox: BookService) { }

  ngOnInit(): void {
    // this.numBorrower = this.borrower.borrowerList.length;
    this.boox.getAll().subscribe(data => this.numBook = data.length);
    this.borrower.getAll().subscribe(data => this.numBorrower = data.length);

  }

}
