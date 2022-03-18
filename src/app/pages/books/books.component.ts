import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { ServiceBookService } from 'src/app/shared/service-book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public miBooks: Book[] = []

  constructor(public miBooksService: ServiceBookService) {

    this.miBooks = this.miBooksService.getAll()
    // console.log(this.miBooks)
  }

  get(newId_book: HTMLInputElement) {
    if (newId_book.value === "") {
      this.miBooks = this.miBooksService.getAll()
      console.log(this.miBooks)
    }
    else {
      this.miBooks = new Array(this.miBooksService.getOne(Number(newId_book.value)))
    }
  }


  add(newTitle: HTMLInputElement, newBookType: HTMLInputElement, newAuthor: HTMLInputElement,
    newPrice: HTMLInputElement, newPhoto: HTMLInputElement, newId_book: HTMLInputElement) {

    let book = new Book(newTitle.value, newBookType.value, newAuthor.value,
      Number(newPrice.value), newPhoto.value, Number(newId_book.value))

    if (this.validar(book)) {
      console.log("se ha creado correctamente")

      this.miBooksService.add(book)

      let inputs = [newTitle, newAuthor, newBookType, newPrice, newId_book, newPhoto]
      for (const input of inputs) {
        input.value = ""
      }
    }
    else {
      console.log("faltan campos por rellenar")
    }
  }

  modify(newTitle: HTMLInputElement, newBookType: HTMLInputElement, newAuthor: HTMLInputElement,
    newPrice: HTMLInputElement, newPhoto: HTMLInputElement, newId_book: HTMLInputElement) {

    for (let i = 0; i < this.miBooks.length; i++) {

      let book = this.miBooks[i].id_book
      book = (newTitle.value, newBookType.value, newAuthor.value,
        Number(newPrice.value), newPhoto.value, Number(newId_book.value))

    }

    // let book = this.miBooks[i].id_book (newTitle.value, newBookType.value, newAuthor.value,
    // Number(newPrice.value), newPhoto.value, Number(newId_book.value))

    // this.miBooksService.edit(book)

    console.log(this.miBooks);



    let inputs = [newTitle, newAuthor, newBookType, newPrice, newId_book, newPhoto]
    for (const input of inputs) {
      input.value = ""
    }
  }

  delete(id_book: number) {
    console.log(id_book);
    this.miBooksService.delete(id_book)
    // console.log(id_book);

  }

  validar(book: Book) {
    if (book.title == "" || book.bookType == "" || book.author == ""
      || String(book.price) == "" || book.photo == "" || String(book.id_book) == "") {
      return false
    }
    return true


  }

  ngOnInit(): void {
  }

}

