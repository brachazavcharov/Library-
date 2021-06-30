import { Injectable } from '@angular/core';
import { BorrowerLIst } from '../classes/borrower-list';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BorrowerService {
  api = 'https://localhost:44322/api/borrower';

  // borrowerList: BorrowerLIst[] = [];
  constructor(private http: HttpClient) {
    // this.borrowerList.push(new BorrowerLIst(1, 123456789, 1, "aviva yael", "cohen", 123546, "cohen@gmail.com"));
    // this.borrowerList.push(new BorrowerLIst(2, 589763421, 2, "ortal", "levi", 458967, "levi@gmail.com"));
    // this.borrowerList.push(new BorrowerLIst(3, 545454544, 2, "sara", "boozaglo", 125478, "boozaglo@gmail.com"));
    // this.borrowerList.push(new BorrowerLIst(4, 458963271, 3, "yael", "revivo", 325698, "revivo@gmail.com"));
    // this.borrowerList.push(new BorrowerLIst(5, 789654123, 4, "rachel lea", "asher", 789123, "asher@gmail.com"));
  }
  getAll(): Observable<BorrowerLIst[]> {
    // return this.borrowerList;
    return this.http.get<BorrowerLIst[]>(this.api);

  }
  push(borrower: BorrowerLIst): Observable<BorrowerLIst> {
    // this.borrowerList.push(borrower);
    return this.http.post<BorrowerLIst>(this.api, borrower);
  }

}
