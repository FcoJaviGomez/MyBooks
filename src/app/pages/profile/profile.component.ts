import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public miUser: User

  constructor() {

    this.miUser = new User(1, "Pepe", "Turbo", "pepeturbo@gmail.com", "urllll", "12345")

  }

  enviar(newName: HTMLInputElement, newLastName: HTMLInputElement, newEmail: HTMLInputElement) {
    console.log(this.miUser);
    this.miUser.name = newName.value
    this.miUser.lastName = newLastName.value
    this.miUser.email = newEmail.value
    console.log(this.miUser);

  }

  ngOnInit(): void {
  }

}


