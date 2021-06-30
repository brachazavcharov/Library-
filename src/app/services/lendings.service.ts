import { Injectable } from '@angular/core';
import { Lendings } from '../classes/lendings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LendingsService {
  api = 'https://localhost:44322/api/lending';

  // lendingsList: Lendings[] = [];
  constructor(private http: HttpClient) {
    // this.lendingsList.push(new Lendings("111", 1, "aviva yael", "cohen", 1, "pink shoes",
    //   new Date(2020, 5, 1), new Date(2020, 6, 1)));
    // this.lendingsList.push(new Lendings("222", 2, "ortal", "levi", 2, "gam kee eleh",
    //   new Date(2020, 7, 22), new Date(2020, 8, 22)));
    // this.lendingsList.push(new Lendings("333", 3, "sara", "boozaglo", 1, "pink shoes",
    //   new Date(2020, 8, 11), new Date(2020, 9, 11)));
    // this.lendingsList.push(new Lendings("444", 4, "yael", "revivo", 4, "hacarish",
    //   new Date(2020, 4, 10), new Date(2020, 6, 11)));
    // this.lendingsList.push(new Lendings("555", 5, "rachel lea", "asher", 2, "gam kee eleh",
    //   new Date(2020, 11, 15), null));
  }
  getAll(): Observable<Lendings[]> {
    // return this.lendingsList;
    return this.http.get<Lendings[]>(this.api);
  }
  addLending(l:Lendings):Observable<Lendings>  {
    // this.lendingsList.push(lending);
    l.Id="0";
   return this.http.post<Lendings>(this.api, l);
  }
}
