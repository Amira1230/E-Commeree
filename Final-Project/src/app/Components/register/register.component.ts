import { RegisterForm } from './../../Interfaces/register-form';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _AuthService:AuthService, private _Router:Router){}


  rePasswordValue!: string;
  rePasswordIsValid: boolean = false;

  registerForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[A-Z][a-zA-Z]{0,}$/)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
  })

  register() {
    if(this.registerForm.status=='VALID'){
      console.log(this.registerForm);
      // this._AuthService.handleRegister(this.registerForm.value).subscribe({
      //   next: (response) => {
      //     console.log(response);
      //     this._Router.navigate(['/login'])
      //   }
      // })
    }
  }
  matchRepassword() {
    if (this.registerForm.value.password == this.registerForm.value.rePassword) {
      this.rePasswordIsValid = true;
    } else {
      this.rePasswordIsValid = false;
    }
  }
}
