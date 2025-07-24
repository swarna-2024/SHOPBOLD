import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
 
@Component({
  selector: 'app-product1-description',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './product1-description.component.html',
  styleUrls: ['./product1-description.component.css']
})
export class Product1DescriptionComponent implements OnInit {
  constructor(private router: Router) {}
 
  product = {
    id: 1,
    name: 'Wireless Headphones',
    description: `
      <p>Experience immersive sound with our premium Wireless Headphones. Designed for comfort and performance, these headphones feature:</p>
      <ul>
        <li><strong>40mm Bass Boosted Drivers:</strong> Deep, powerful bass with precision-tuned audio.</li>
        <li><strong>ENC for Noise-Free Calling:</strong> Filters background noise for crystal-clear voice calls.</li>
        <li><strong>Bluetooth 5.4 with EDR:</strong> Fast pairing and stable wireless performance.</li>
        <li><strong>80H Battery Life:</strong> Enjoy uninterrupted music for days.</li>
        <li><strong>Fast Charging:</strong> 10 minutes charge gives 7 hours playback.</li>
        <li><strong>Comfort Fit:</strong> Soft ear cushions and adjustable headband for all-day wear.</li>
      </ul>
    `,
    price: 2499,
    image: '/HeadPhones.png'
  };
 
  currentQuantity = 0; // ✅ Add this property
 
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