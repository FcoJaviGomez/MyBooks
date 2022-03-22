import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './component/form-login/form-login.component';
// import { FormRegisterComponent } from './component/form-register/form-register.component';
import { BooksComponent } from './pages/books/books.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [{
  path: "", component: HomeComponent
},
{ path: "register", component: RegisterComponent },
{ path: "login", component: FormLoginComponent },
{ path: "profile", component: ProfileComponent },
{ path: "books", component: BooksComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
