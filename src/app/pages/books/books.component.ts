import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { User } from 'src/app/models/user';
import { ServiceBookService } from 'src/app/shared/service-book.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public miBooks: Book[]
  public user: User

  constructor(public miBooksService: ServiceBookService, private miUserService: UserService) {

    this.miBooksService.getAll(this.miUserService.user.id_user).subscribe((data1: Book[]) => {
      console.log(data1)
      this.miBooks = data1
    })

  }

  get(newId_book: HTMLInputElement) {
    if (newId_book.value === "") {
      this.miBooksService.getAll(this.miUserService.user.id_user).subscribe((data1: Book[]) => {
        console.log(data1)
        this.miBooks = data1
        console.log(this.miBooks)
      })

    }
    else {
      this.miBooksService.getOne(this.miUserService.user.id_user, Number(newId_book.value)).subscribe((data1: Book[]) => {
        console.log(data1)
        this.miBooks = data1
        console.log(this.miBooks)
      })
    }
  }


  add(newTitle: HTMLInputElement, newBookType: HTMLInputElement, newAuthor: HTMLInputElement,
    newPrice: HTMLInputElement, newPhoto: HTMLInputElement) {

    let book = new Book(newTitle.value, newBookType.value, newAuthor.value,
      Number(newPrice.value), newPhoto.value, null, this.miUserService.user.id_user)

    if (this.validar(book)) {
      console.log("se ha creado correctamente")

      this.miBooksService.add(book).subscribe((data: number) => {
        console.log(data);
        book.id_book = data;
        this.miBooks.push(book)
      })

      let inputs = [newTitle, newAuthor, newBookType, newPrice, newPhoto]
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

    let book = new Book(newTitle.value, newBookType.value, newAuthor.value,
      Number(newPrice.value), newPhoto.value, Number(newId_book.value), this.miUserService.user.id_user)
    if (this.validar(book)) {
      this.miBooksService.edit(book).subscribe((data: any) => {
        console.log(data);
        for (let i = 0; i < this.miBooks.length; i++) {
          if (this.miBooks[i].id_book === book.id_book) {
            this.miBooks[i] = book
          }
        }
        // this.miBooks = book
      })
    }
    else {
      console.log("faltan campos por rellenar")
    }

    let inputs = [newTitle, newAuthor, newBookType, newPrice, newId_book, newPhoto]
    for (const input of inputs) {
      input.value = ""
    }
  }

  delete(id_book: number) {
    this.miBooksService.delete(id_book).subscribe((data1: any) => {
      for (let i = 0; i < this.miBooks.length; i++) {
        if (this.miBooks[i].id_book === id_book) {
          this.miBooks.splice(i, 1)
        }
      }
    })
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

