import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
 
@Component({
  selector: 'app-samsung',
  standalone: true,
  imports: [CommonModule,HeaderComponent
  ],
  templateUrl: './samsung.component.html',
  styleUrls: ['./samsung.component.css']
})
export class SamsungComponent implements OnInit {
  constructor(private router: Router) {}
 
  product = {
    id: 3,
    name: 'Samsung Galaxy M35 5G (6GB RAM, 128GB)',
    description: `
      Monster Durability & Display: Corning Gorilla Glass Victus+, 6.6" Super AMOLED Display, FHD+ 1080x2340, 120Hz Refresh Rate.
      Monster Processor: Exynos 1380, Vapour Cooling, Android 14, One UI 6.1, Octa-Core.
      Monster Convenience: Samsung Wallet, Knox Security, 4 Android OS Upgrades, 5 Years Security Updates.
      Monster Camera: 50MP + 8MP + 2MP Rear, 13MP Selfie, UHD Video @30fps.
      Monster Battery: 6000mAh, 25W Fast Charging (No Charger Included).
    `,
    price: 18999,
    image: '/samsung.jpg'
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