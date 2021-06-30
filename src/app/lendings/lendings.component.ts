import { Component, OnInit } from '@angular/core';
import { Lendings } from '../classes/lendings';
import { LendingsService } from '../services/lendings.service';

@Component({
  selector: 'app-lendings',
  templateUrl: './lendings.component.html',
  styleUrls: ['./lendings.component.css']
})
export class LendingsComponent implements OnInit {
  lendingsList: Lendings[] = null;
  today: Date = new Date();
  constructor(private lendings: LendingsService) { }

  ngOnInit(): void {
    // this.lendingsList = this.lendings.getAll();
    this.lendings.getAll().subscribe(data => this.lendingsList = data);
  }
  calc(l: Lendings): boolean {
    if (!l.returnDate && Number(Date.now()) - Number(l.landingDate) > 30)
      return true;
    return false;
  }
  isFullOrEmpty(date: Lendings) {
    if (date.returnDate)
      return "fullDate";
    return "emptyDate";
  }
}
