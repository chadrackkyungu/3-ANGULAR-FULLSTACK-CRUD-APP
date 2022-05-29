import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  productForm !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
    this.formValidation();
  }

  formValidation(){
    this.productForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  submit() {
    if(this.productForm.valid){
      this.authService.login(this.productForm.value.email, this.productForm.value.password);  
      this.productForm.reset(); //clean the form
    }
  }

}
