import { HeaderComponent } from './../header/header.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {
    this.loadCart();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && event.urlAfterRedirects === '/cart') {
        this.loadCart();
      }
    });
  }

  loadCart() {
    this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  increaseQuantity(index: number) {
    this.cartItems[index].quantity++;
    this.updateLocalStorage();
  }

  decreaseQuantity(index: number) {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
      this.updateLocalStorage();
    }
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  goToPayment() {
    if (!this.auth.isLoggedIn()) {
      alert('Please log in to proceed to payment.');
      this.router.navigate(['/signin']);
      return;
    }

    if (this.cartItems.length === 0) {
      alert('Your cart is empty. Please add items before proceeding to payment.');
      return;
    }

    const cartItems = this.cartItems;
    const total = this.getTotal();

    this.router.navigate(['/payments'], {
      state: { cartItems, total }
    });
  }
}
