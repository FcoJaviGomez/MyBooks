import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public miBooks: Book[]


  // imagen: string = '../../../assets/img/foto2.jpg'
  constructor() {
    this.miBooks = [
      new Book("La Bestia", "Tapa Blanda", "Carmen", 15, "../../../assets/img/foto2.jpg", 1),
      new Book("Matar al Rey", "Tapa Dura", "José", 10, "../../../assets/img/foto3.jpg", 2),
    ]
  }

  enviar(newTitle: HTMLInputElement, newBookType: HTMLInputElement, newAuthor: HTMLInputElement,
    newPrice: HTMLInputElement, newPhoto: HTMLInputElement, newId_book: HTMLInputElement) {

    let newBook = new Book(newTitle.value, newBookType.value, newAuthor.value,
      Number(newPrice.value), newPhoto.value, Number(newId_book.value))

    this.miBooks.push(newBook)
    let inputs = [newTitle, newAuthor, newBookType, newPrice, newId_book, newPhoto]
    for (const input of inputs) {
      input.value = ""
    }

  }

  ngOnInit(): void {
  }

}
