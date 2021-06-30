import { Injectable } from '@angular/core';
import { Category } from '../classes/Category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  api = 'https://localhost:44322/api/category';

  // categoryList: Category[]=[];
  getAll(): Observable<Category[]> {
    // return this.categoryList;
    return this.http.get<Category[]>(this.api);
  }
  getById(id: number): Observable<Category> {
    return this.http.get<Category>(this.api + "/" + id)
  }
  constructor(private http: HttpClient) {
    // this.categoryList.push(new Category(1, "babies", "0-2", "red"));
    // this.categoryList.push(new Category(2, "adults", "18++", "green"));
    // this.categoryList.push(new Category(3, "teens", "14-18", "blue"));
    // this.categoryList.push(new Category(4, "childs", "2-14", "yellow"));
  }
}
