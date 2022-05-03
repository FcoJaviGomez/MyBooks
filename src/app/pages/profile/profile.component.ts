import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public miUser: User

  constructor(private miUserService: UserService) {
    this.miUser = this.miUserService.user
    // this.miUser = new User("Pepe", "Turbo", "pepeturbo@gmail.com", "urllll", "12345")
    console.log(this.miUser);
    console.log(this.miUserService);


  }

  enviar(newName: HTMLInputElement, newLastName: HTMLInputElement, newEmail: HTMLInputElement) {
    console.log(this.miUserService.user)
    console.log(this.miUser);


    console.log(this.miUser);
    this.miUser.name = newName.value
    this.miUser.lastName = newLastName.value
    this.miUser.email = newEmail.value
    console.log(this.miUser);

  }

  ngOnInit(): void {
  }

}


