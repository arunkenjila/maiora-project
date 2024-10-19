import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | undefined;
  errorMessage: string = '';

  constructor(
    private formbuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = formbuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')) this.router.navigateByUrl('/dashboard');
  }

  onSubmit(): void {
    this.loginService.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        this.loginService.token = res?.access_token;
        localStorage.setItem('token', this.loginService.token);
        this.router.navigateByUrl('/dashboard');
      },
      error: (err: any) => {
        console.log('err', err);
        this.errorMessage = 'Unable to login. Please try later';
      },
    });
  }
}
