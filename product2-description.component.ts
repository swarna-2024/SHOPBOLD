import { HeaderComponent } from './../header/header.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-product2-description',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './product2-description.component.html',
  styleUrls: ['./product2-description.component.css']
})
export class Product2DescriptionComponent implements OnInit {
  constructor(private router: Router) {}
 
  product = {
    id: 2, // ✅ Ensure this ID is unique and consistent
    name: 'Apple iPhone 14 - 12GB',
    description: `
      Experience the power and elegance of the Apple iPhone 14 with 12GB RAM. Featuring a stunning Super Retina XDR display, advanced camera system, and lightning-fast performance.
    `,
    price: 79999,
    image: '/Phone.png'
  };
 
  currentQuantity = 0;
 
  ngOnInit() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const item = cart.find((i: any) => i.id === this.product.id);
    this.currentQuantity = item ? item.quantity : 0;
  }
 
  addToCart() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
 
    // ✅ Check by ID to prevent duplicates
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