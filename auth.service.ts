import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly key = 'loggedInEmail';

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.key);
  }

  getLoggedInEmail(): string | null {
    return localStorage.getItem(this.key);
  }

  login(email: string): void {
    localStorage.setItem(this.key, email);
  }

  logout(): void {
    localStorage.removeItem(this.key);
  }
}
