import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  public newUser: User

  constructor(private miUserService: UserService) {

  }

  register(newName: HTMLInputElement, newLastName: HTMLInputElement, newEmail: HTMLInputElement,
    newPassword: HTMLInputElement, newPassword1: HTMLInputElement, newUrl: HTMLInputElement) {

    let user = new User(newName.value, newLastName.value, newEmail.value,
      newUrl.value, newPassword.value)

    if (this.validar(user)) {
      if (newPassword.value === newPassword1.value) {
        console.log("hola");
        this.miUserService.postRegister(user).subscribe(function (data) {
          console.log(data);
        })
      }
      else {
        console.log("contraseña no cioncide");
      }
    }
    else {
      console.log("faltan campos por rellenar")
    }
  }

  validar(user: User) {
    if (user.name == "" || user.lastName == "" || user.email == ""
      || user.url == "" || user.password == "") {
      return false
    }
    return true
  }

  ngOnInit(): void {
  }

}
