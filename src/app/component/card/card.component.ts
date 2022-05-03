import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { ServiceBookService } from 'src/app/shared/service-book.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Input() bookDad: Book
  @Input() imparDad: Number
  @Input() parDad: Number
  @Output() eventBook = new EventEmitter<Number>();

  // public miBooks: Book[]
  // public user: User
  // public miBooksService: ServiceBookService
  constructor() {

  }

  delete(id_book: number) {
    this.eventBook.emit(id_book)
  }



  ngOnInit(): void {
  }

}
