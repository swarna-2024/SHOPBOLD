import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-mesh-chair',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './mesh-chair.component.html',
  styleUrl: './mesh-chair.component.css'
})
export class MeshChairComponent {
  constructor(private router: Router) {}
 
  product = {
    id: 8,
    name: 'Mesh Ergonomic Office Chair',
    description: `
    Designed with breathable mesh and lumbar support, this chair keeps you cool and comfortable for long working hours. Adjustable features ensure you find the perfect working posture.
    `,
    price: 8999,
    image: '/meshChair.png'
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
 