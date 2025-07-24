import { HeaderComponent } from './../header/header.component';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  ReactiveFormsModule
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SignupService, User } from '../signup.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [CommonModule, ReactiveFormsModule,HeaderComponent],
})
export class SignupComponent {
  signupForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router, private signupService: SignupService) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      password: ['', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)]],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  goToSignin() {
    this.router.navigate(['/signin']);
  }

 onSignup(): void {
  this.submitted = true;

  if (this.signupForm.invalid) return;

  const { name, email, mobile, password } = this.signupForm.value;

  this.signupService.getUsers().subscribe(users => {
    const exists = users.some(u => u.email === email || u.mobile === mobile);
    if (exists) {
      alert('User already exists. Please login.');
      this.router.navigate(['/signin']);
    } else {
      const newUser: User = { name, email, mobile, password };

      this.signupService.addUser(newUser).subscribe(() => {
        alert('Signup successful!');
        localStorage.setItem('loggedInEmail', newUser.email); // ✅ Auto-login
        this.signupForm.reset();
        this.submitted = false;
        this.router.navigate(['/landing']);
      });
    }
  });
}

}
