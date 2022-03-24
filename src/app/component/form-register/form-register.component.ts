import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  public user: User
  public password1: string

  constructor(public router: Router, private miUserService: UserService) {
    this.user = new User("", "", "", "", "")
  }

  register() {
    if (this.validar(this.user)) {
      if (this.user.password === this.password1) {
        console.log("Registrad@ correctamente");
        this.miUserService.postRegister(this.user).subscribe(function (data) {
          console.log(data);
        })
        this.router.navigate(['/login'])
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
