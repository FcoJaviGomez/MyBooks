export class Book {
    public title: string
    public bookType: string
    public author: string
    public price: number
    public photo: string
    public id_book: number
    public id_user: number

    constructor(title: string, bookType: string, author: string, price: number,
        photo: string, id_book: number = 0, id_user: number = 0) {

        this.title = title;
        this.bookType = bookType;
        this.author = author;
        this.price = price;
        this.photo = photo;
        this.id_book = id_book;
        this.id_user = id_user;
    }
}
