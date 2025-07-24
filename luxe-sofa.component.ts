import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-luxe-sofa',
  standalone:true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './luxe-sofa.component.html',
  styleUrl: './luxe-sofa.component.css'
})
export class LuxeSofaComponent {
  constructor(private router: Router) {}
 
  product = {
    id:9,
    name: 'Luxe Velvet 3-Seater Sofa',
    description: `
This luxurious velvet sofa offers an elegant design with plush seating and detailed tufting. Built to elevate any modern home with both style and comfort.
    `,
    price: 18999,
    image: 'luxesofa.png'
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
 