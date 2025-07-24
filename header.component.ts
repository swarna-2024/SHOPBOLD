import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SignupService, User } from '../signup.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  username: string = '';
  showDropdown: boolean = false;
  showFurnitureDropdown: boolean = false;

  constructor(private router: Router, private signupService: SignupService, private auth: AuthService) {}

  ngOnInit(): void {
    const email = this.auth.getLoggedInEmail();
    if (email) {
      this.isLoggedIn = true;
      this.signupService.getUsers().subscribe(users => {
        const user = users.find(u => u.email === email);
        if (user) {
          this.username = user.name;
        }
      });
    }
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }

  goToElectronics() {
    this.router.navigate(['/electronics']);
  }

  goToHome() {
    this.router.navigate(['/landing']);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  logout() {
    this.auth.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/landing']);
  }

  gotofurniture() {
    this.router.navigate(['/furniture'], { queryParams: { category: 'all' } });
  }

  filterFurniture(category: string) {
    this.router.navigate(['/furniture'], { queryParams: { category } });
  }

  filterElectronics(category: string) {
    this.router.navigate(['/electronics'], { queryParams: { category } });
  }
}
