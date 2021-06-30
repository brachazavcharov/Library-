import { Injectable } from '@angular/core';
import { BookDetails } from '../classes/book-details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  api = 'https://localhost:44322/api/book';
  books: BookDetails[] = [];
  book: BookDetails = null;
  temp: BookDetails[] = [];
  getAll(id?: number): Observable<BookDetails[]> {
    if (id != null)
      return this.filter(id);
    return this.http.get<BookDetails[]>(this.api);
  }
  filter(id?: number): Observable<BookDetails[]> {
    console.log("id"+id);
    
    if (id == null)
      return this.http.get<BookDetails[]>(this.api);
    return this.http.get<BookDetails[]>(this.api + `/age/${id}`);

  }
  getBook(id: number): Observable<BookDetails> {
    // this.books.forEach(element => {
    //   if (element.id == id)
    //     this.book = element;
    // });
    return this.http.get<BookDetails>(this.api + "/" + id);
  }
  addBook(b: BookDetails): Observable<BookDetails> {
    // this.books.push(b);
   return this.http.post<BookDetails>(this.api, b);
  }
  constructor(private http: HttpClient) {
    // this.books.push(new BookDetails(1, "pink shoes", "yona sapir", "you can't stop read it", 3, 500));
    // this.books.push(new BookDetails(2, "gam kee eleh", "libi klain", "you can't be apethic when you read it", 4, 700));
    // this.books.push(new BookDetails(3, "", "haim valer", "it will make you fun", 1, 150));
    // this.books.push(new BookDetails(4, "hacarish", "kobi levi", "it will make you stronger", 2, 200));
  }
}
