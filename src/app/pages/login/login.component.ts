import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: string;
  password: any;
  login: any;

  loginUserData = {
    username: "",
    password:  ""
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async Login(){

    //Validation
    // if(this.loginUserData.username ==""){
    //   alert("Provide Username");
    // }else if(this.loginUserData.password ==""){
    //   alert("Provide password");
    // }else{
      this.router.navigate(['menu'])
   // }
  }

}
