import { Injectable } from '@angular/core';
// import { title } from 'process';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class ServiceBookService {
  private miBooks: Book[] = [new Book("La Bestia", "Tapa Blanda", "Carmen", 15, "../../../assets/img/foto2.jpg", 12),
  new Book("Matar al Rey", "Tapa Dura", "José", 10, "../../../assets/img/foto3.jpg", 23),
  new Book("La Bestia", "Tapa Blanda", "Carmen", 15, "../../../assets/img/foto2.jpg", 1),
  new Book("Matar al Rey", "Tapa Dura", "José", 10, "../../../assets/img/foto3.jpg", 2),
  new Book("Matar al Rey", "Tapa Dura", "José", 10, "../../../assets/img/foto3.jpg", 3)]

  public getAll(): Book[] {
    return this.miBooks
  }

  public getOne(id_book: number): Book {
    for (let i = 0; i < this.miBooks.length; i++) {
      if (this.miBooks[i].id_book === id_book) {
        return this.miBooks[i]
      }
    }
  }

  public add(book: Book): void {
    this.miBooks.push(book)
  }

  public edit(book: Book): boolean {
    for (let i = 0; i < this.miBooks.length; i++) {
      if (this.miBooks[i].id_book === book.id_book) {
        // this.miBooks[i] = ()
        return true
      }
    }
    return false
  }

  public delete(id_book: number): boolean {

    for (let i = 0; i < this.miBooks.length; i++) {
      if (this.miBooks[i].id_book === id_book) {
        this.miBooks.splice(i, 1)
        return true
      }
    }
    return false
  }
  constructor() { }
}
