import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  public prueba: string

  constructor(public router: Router, private miUserService: UserService) { }

  login(newEmail: HTMLInputElement, newPassword: HTMLInputElement) {
    let user = new User(null, null, newEmail.value, null, newPassword.value)

    if (this.validar(user)) {

      this.miUserService.postLogin(user).subscribe((data: User[]) => {
        console.log(data);


        if (data.length === 0) {
          console.log("datos no validos")
        }
        else {
          console.log("datos correctos");
          this.router.navigate(['/books'])
          this.miUserService.logged = true
          this.miUserService.user = data[0]
          console.log(this.miUserService.logged)
          console.log(this.miUserService.user)
        }
      })


    }
    else {
      console.log("Faltan campos por rellenar");

    }


  }

  validar(user: User) {
    if (user.email == "" || user.password == "") {
      return false
    }
    return true
  }

  ngOnInit(): void {
  }

}
