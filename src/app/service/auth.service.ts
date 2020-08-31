import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: any = null

  constructor(private router: Router, private afa: AngularFireAuth) { }

  loginEmail(email: string, password: string){
    return this.afa.signInWithEmailAndPassword(email,password)
    .then((user) => {
      this.authState = user
    })
    .catch(error => {
      console.log(error)
      throw error
    })
  }
}
