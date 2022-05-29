import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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
    console.log(this.productForm.valid);
    
    if(this.productForm.valid){
      this.authService.register(this.productForm.value.email, this.productForm.value.password);  
      this.productForm.reset(); //clean the form
    }
  }

}

