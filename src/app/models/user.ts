export class User {
    public id_user_book: number
    public name: string
    public lastName: string
    public email: string
    public url: string
    public password: string

    constructor(name: string, lastName: string, email: string, url: string, password: string, id_user_book: number = 0) {
        this.id_user_book = id_user_book;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.url = url;
        this.password = password
    }
}
