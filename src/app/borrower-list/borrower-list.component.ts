import { Component, OnInit } from '@angular/core';
import { BorrowerLIst } from '../classes/borrower-list';
import { BorrowerService } from '../services/borrower.service';

@Component({
  selector: 'app-borrower-list',
  templateUrl: './borrower-list.component.html',
  styleUrls: ['./borrower-list.component.css']
})
export class BorrowerLIstComponent implements OnInit {

  constructor(private borrowerService: BorrowerService) { }
  borrowerList: BorrowerLIst[] = null;
  withMail(b): boolean {
    if (b.mail != "")
      return true;
    return false;
  }
  ngOnInit(): void {
    // this.borrowerList = this.borrowerService.getAll();
    this.borrowerService.getAll().subscribe(data => this.borrowerList = data);
  }
  checkbox: boolean;
  setIfShow(ifShow: boolean) {
    this.checkbox = ifShow;
    // this.borrowerList = this.borrowerService.getAll();
    this.borrowerService.getAll().subscribe(data => this.borrowerList = data);

  }
}
