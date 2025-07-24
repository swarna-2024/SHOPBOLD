import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-lg-tv',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './lg-tv.component.html',
  styleUrl: './lg-tv.component.css'
})
export class LgTvComponent implements OnInit {
  constructor(private router: Router) {}
 
  product = {
    id: 5,
    name: 'LG OLED 48" Smart TV (2025 Model)',
    description: `
      Discover lifelike visuals with LG’s 48" OLED Smart TV. Experience pixel-level contrast, AI-powered upscaling, and immersive Dolby Vision entertainment—all in a sleek design.
    `,
    price: 56000,
    image: '/LGTV.png'
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
 