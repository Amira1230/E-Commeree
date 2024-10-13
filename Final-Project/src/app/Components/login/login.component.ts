import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {
    if (_AuthService.userIsLogedIn.value) {
      _Router.navigate(['/home'])
    }
  }

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]),
  })

  login() {
    if (this.loginForm.status == 'VALID') {
      console.log(this.loginForm.value);
      this._AuthService.handlelogin(this.loginForm.value).subscribe({
        next: (response) => {
          this._AuthService.userIsLogedIn.next(true);
          localStorage.setItem('token', response.token)
          this._Router.navigate(['/home'])
        }
      })
    }
  }
}
