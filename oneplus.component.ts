import { HeaderComponent } from './../header/header.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-oneplus',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './oneplus.component.html',
  styleUrls: ['./oneplus.component.css']
})
export class OneplusComponent implements OnInit {
  constructor(private router: Router) {}
 
  product = {
    id: 4,
    name: 'OnePlus Nord CE4 Lite 5G (Super Silver, 8GB RAM, 128GB Storage)',
    description: `
      5500 mAh Battery & Reverse Charging: Ditch the power bank and press play all day with Nord CE4 Lite’s gigantic battery.
      80W SUPERVOOC Fast Charging: Fully replenishes the battery in just 20 minutes.
      50MP Sony LYT-600 Camera with OIS: Capture stunning Sony-quality photos and videos.
      Battery Health Engine: Extends battery life to 4 years with smart AI charging.
      6.67" 120Hz AMOLED Display: Super-bright display with 2,100 nits peak brightness.
      Dual Stereo Speakers: 300% volume boost for immersive sound.
      AI Smart Cutout: Edit and personalize photos with a single tap.
      OxygenOS 14: Smooth and secure with 2 major Android updates and 3 years of security patches.
    `,
    price: 17996,
    image: '/oneplus.jpg'
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
 