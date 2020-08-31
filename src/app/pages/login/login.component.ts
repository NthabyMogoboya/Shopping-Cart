import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email =""
  password =""
  errorMessage = ""
  error: {name: string, message: string} = { name: "", message: ""}

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  clearErrorMessage(){
    this.errorMessage = "";
    this.error = { name: '', message: ''};
  }

  login(){
    this.clearErrorMessage();

    if(this.validateForm(this.email,this.password)){
      this.auth.loginEmail(this.email, this.password)
    .then(() => {
      this.router.navigate(['/menu'])
    }).catch(_error => {
      this.error = _error
      this.router.navigate(['/login'])
    })
    }
  }

  validateForm(email, password){
    if(email.length === 0){
      this.errorMessage = "Please Enter Email Address";
      return false;
    }
    if(password.length === 0){
      this.errorMessage = "Please Enter Password";
      return false;
    }

    this.errorMessage = "";
    return true;
  }

}
