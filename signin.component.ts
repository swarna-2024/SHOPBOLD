import { HeaderComponent } from './../header/header.component';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,HeaderComponent],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  signinForm: FormGroup;
  submitted = false;
  loginError = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.signinForm = this.fb.group({
      emailOrMobile: ['', [Validators.required, Validators.pattern(/^(\d{10}|\S+@\S+\.\S+)$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.signinForm.controls;
  }

  onSubmit(): void {
  this.submitted = true;
  this.loginError = '';

  if (this.signinForm.invalid) return;

  const { emailOrMobile, password } = this.signinForm.value;

  this.http.get<any[]>('http://localhost:3000/users').subscribe({
    next: (users) => {
      const user = users.find(u =>
        (u.email === emailOrMobile || u.mobile === emailOrMobile) &&
        u.password === password
      );

      if (user) {
        localStorage.setItem('loggedInEmail', user.email);
        alert('Login successful!');
        this.router.navigate(['/landing']);
      } else {
        this.loginError = 'Invalid credentials. Please try again.';
      }
    },
    error: (err) => {
      console.error('Login error:', err);
      this.loginError = 'Something went wrong. Please try again later.';
    }
  });
}

}
