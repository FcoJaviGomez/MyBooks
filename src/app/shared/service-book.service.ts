import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class ServiceBookService {
  // private url: string = "http://localhost:3000"

  private url: string = "https://api-house-book.herokuapp.com"

  public book: Book

  constructor(private http: HttpClient) {

  }

  getAll(id_user_book: number): Observable<Object> {
    return this.http.get(this.url + "/books?id_user_book=" + id_user_book)
  }

  getOne(id_user_book: number, id_book: number): Observable<Object> {

    return this.http.get(this.url + `/books?id_user_book= ${id_user_book}&id_book= ${id_book} `)
  }

  add(book: Book): Observable<Object> {
    return this.http.post(this.url + "/books", book)
  }

  edit(book: Book): Observable<Object> {
    return this.http.put(this.url + "/books", book)
  }

  delete(id_book: number): Observable<Object> {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: { id_book: id_book }
    }
    return this.http.delete(this.url + "/books", options)
  }
}
