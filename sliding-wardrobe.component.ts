import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
 
@Component({
  selector: 'app-sliding-wardrobe',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './sliding-wardrobe.component.html',
  styleUrl: './sliding-wardrobe.component.css'
})
export class SlidingWardrobeComponent implements OnInit {
  constructor(private router: Router) {}
 
  product = {
    id: 11, // Unique ID for this product
    name: 'Elegant Sliding Door Wardrobe',
    description: `
      Maximize bedroom space with this elegant sliding door wardrobe. Finished in matte walnut, it offers smooth operation and ample internal storage.
    `,
    price: 11999,
    image: '/sliding.png'
  };
 
  currentQuantity = 0;
 
  ngOnInit() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const item = cart.find((i: any) => i.id === this.product.id);
    this.currentQuantity = item ? item.quantity : 0;
  }
 
  addToCart() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const index = cart.findIndex((item: any) => item.id === this.product.id);
 
    if (index !== -1) {
      cart[index].quantity += 1;
    } else {
      cart.push({ ...this.product, quantity: 1 });
    }
 
    localStorage.setItem('cart', JSON.stringify(cart));
    this.router.navigate(['/cart']);
  }
}
 