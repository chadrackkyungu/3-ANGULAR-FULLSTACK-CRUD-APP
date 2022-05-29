import { Injectable } from '@angular/core';

//authentication service
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
// import { NbToastrService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private authService: AngularFireAuth, 
    private router: Router,
    // private toastrService: NbToastrService,
  ) { }

    //trace performance
  //https://fireship.io/lessons/firebase-performance-quickstart/

  //login methods
  login(email: string, password: string){
    this.authService.signInWithEmailAndPassword(email, password)
    .then(() =>{
      localStorage.setItem('token', 'true');
      alert('Successfully signed in')
      this.router.navigate(['dashboard']);
    })
    .catch((err:any) =>{
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

  //Register methods
  register(email: string, password: string){
    this.authService.createUserWithEmailAndPassword(email, password)
    .then(() =>{
      // this.toastrService.show('Registration Successful','Success',{status:"success"});
      this.router.navigate(['/login']);
    })
    .catch((err:any) =>{
      alert("something went wrong");
      this.router.navigate(['/register']);
    })
  }


  //Sign out methods
  logout(){
    this.authService.signOut()
    .then(() =>{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    })
    .catch((err:any) =>{
      alert(err.message);
    })
  }

  //This function check for my protected route
  loggedIn(){
    // [!!] this check if the token exist return true or false
    return !!localStorage.getItem('token')
  }
}
