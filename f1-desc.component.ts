import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
 
@Component({
  selector: 'app-f1-desc',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './f1-desc.component.html',
  styleUrls: ['./f1-desc.component.css']
})
export class F1DescComponent implements OnInit {
  constructor(private router: Router) {}
 
  product = {
    id: 6, // Unique ID for this product
    name: 'High Back Cushioned Office chair',
    description: `
      Adiko High Back Executive Office chair consisting of cushioned seat & back, center-tilt mechanism, Hydraulic mechanism for adjustment of seat height, chrome plated metal base & Nylon wheels.
    `,
    price: 4999,
    image: 'f1image.png'
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
 