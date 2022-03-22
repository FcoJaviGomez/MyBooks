export class User {
    public id_user: number
    public name: string
    public lastName: string
    public email: string
    public url: string
    public password: string

    constructor(name: string, lastName: string, email: string, url: string, password: string, id_user: number = 0) {
        this.id_user = id_user;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.url = url;
        this.password = password
    }
}
