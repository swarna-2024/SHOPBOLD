import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-recliner-sofa',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './recliner-sofa.component.html',
  styleUrl: './recliner-sofa.component.css'
})
export class ReclinerSofaComponent {
  constructor(private router: Router) {}
 
  product = {
    id: 10,
    name: 'Convertible Recliner Sofa',
    description: `
Unwind like never before with this reclining sofa that shifts into lounge mode with ease. Its ergonomic contours and soft padding provide the ultimate movie-night experience.
    `,
    price: 22999,
    image: 'recliner.png'
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
 