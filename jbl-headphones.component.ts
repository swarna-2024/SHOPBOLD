import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
 
@Component({
  selector: 'app-jbl-headphones',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './jbl-headphones.component.html',
  styleUrl: './jbl-headphones.component.css'
})
export class JblHeadphonesComponent implements OnInit {
  constructor(private router: Router) {}
 
  product = {
    id: 5,
    name: 'JBL BassBoost Wired Over-Ear Headphones w/ 3.5mm Jack, Deep Bass, Mic ',
    description: `
      <p>Experience signature JBL sound with powerful bass and all-day comfort. These wired over-ear headphones are perfect for music, calls, and entertainment. Features include:</p>
      <ul>
        <li><strong>JBL Pure Bass Sound:</strong> Punchy, deep bass for immersive listening.</li>
        <li><strong>Wired Convenience:</strong> Reliable 3.5mm jack for uninterrupted audio.</li>
        <li><strong>Built-in Microphone:</strong> Manage calls effortlessly with clear voice pickup.</li>
        <li><strong>Comfort Fit:</strong> Soft ear cushions and adjustable headband.</li>
        <li><strong>Durable Build:</strong> Tangle-free cable and rugged earcup hinges.</li>
        <li><strong>Multi-platform Support:</strong> Compatible with laptops, phones, tablets & consoles.</li>
      </ul>
    `,
    price: 1099,
    image: '/JBLBass.png'
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