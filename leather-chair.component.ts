import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-leather-chair',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './leather-chair.component.html',
  styleUrl: './leather-chair.component.css'
})
export class LeatherChairComponent {
  constructor(private router: Router) {}
 
  product = {
    id: 7,
    name: 'Leather Executive Chair',
    description: `
    A premium high-back leather chair built for comfort and style. Ideal for professional setups and personal offices. Features include adjustable height, tilt lock, and ergonomic cushioning.
    `,
    price: 13999,
    image: 'leatherChair.png'
  };
  currentQuantity = 0; // ✅ NEW: Tracks quantity already in cart
 
ngOnInit() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const item = cart.find((i: any) => i.id === this.product.id);
  this.currentQuantity = item ? item.quantity : 0;
}
 
 
addToCart() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const index = cart.findIndex((item: any) => item.id === this.product.id);
 
  if (index !== -1) {
    cart[index].quantity += 1; // ✅ Increment quantity
  } else {
    cart.push({ ...this.product, quantity: 1 }); // ✅ Add new item
  }
 
  localStorage.setItem('cart', JSON.stringify(cart));
  this.router.navigate(['/cart']);
}
 
}
 