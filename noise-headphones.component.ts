import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-noise-headphones',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './noise-headphones.component.html',
  styleUrl: './noise-headphones.component.css'
})
export class NoiseHeadphonesComponent  implements OnInit{
  constructor(private router: Router) {}
 
  product = {
    id: 4,
    name: 'NoiseTune H1 Wireless Headphones w/ ENC, 80H Battery, Fast Charging, Bluetooth 5.4 ',
    description: `
      <p>Upgrade your audio game with NoiseTune H1 Wireless Headphones, crafted for crisp calls and thunderous bass. Key features include:</p>
      <ul>
        <li><strong>40mm Bass Boosted Drivers:</strong> Powerful sound experience for music lovers.</li>
        <li><strong>Environmental Noise Cancellation (ENC):</strong> Clear voice calls in noisy surroundings.</li>
        <li><strong>Bluetooth 5.4:</strong> Stable connection and fast pairing with multiple devices.</li>
        <li><strong>Battery Life:</strong> Massive 80H playback on a full charge.</li>
        <li><strong>Fast Charging:</strong> Just 10 mins of charge gives up to 7 hours of use.</li>
        <li><strong>Lightweight Comfort:</strong> Padded earcups and flexible headband for extended listening sessions.</li>
      </ul>
    `,
    price: 1799,
    image: '/NoiseWireless.png'
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
 