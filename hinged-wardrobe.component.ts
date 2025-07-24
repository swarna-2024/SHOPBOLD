import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-hinged-wardrobe',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './hinged-wardrobe.component.html',
  styleUrl: './hinged-wardrobe.component.css'
})
export class HingedWardrobeComponent {
  constructor(private router: Router) {}
 
  product = {
    id:12,
    name: 'Classic Hinged Wardrobe with Mirror',
    description: `
Blending elegance with utility, this classic wardrobe features a full-length mirror, spacious compartments, and durable hinged doors.
    `,
    price: 9999,
    image: 'hinged.png'
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
 