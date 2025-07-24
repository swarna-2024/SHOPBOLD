import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-sony-tv',
  imports: [CommonModule, HeaderComponent],
  templateUrl: './sony-tv.component.html',
  styleUrl: './sony-tv.component.css'
})
export class SonyTvComponent  implements OnInit{
  constructor(private router: Router) {}
 
  product = {
    id: 4,
    name: 'Sony Bravia 55" 4K Ultra HD Smart TV',
    description: `
      Experience cinematic visuals with Sony’s Bravia 4K TV. Enjoy stunning clarity, Dolby Audio, voice assistant integration, and smart streaming all in one elegant frame.
    `,
    price: 62000,
    image: '/SonyTV.png'
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
 