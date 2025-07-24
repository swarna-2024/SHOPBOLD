import { HeaderComponent } from './../header/header.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-product3-description',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './product3-description.component.html',
  styleUrls: ['./product3-description.component.css']
})
export class Product3DescriptionComponent implements OnInit {
  constructor(private router: Router) {}
 
  product = {
    id: 3,
    name: 'Samsung Smart LED TV - 55 inch',
    description: `
      Enjoy immersive viewing with the Samsung Smart LED TV. Featuring a 55-inch 4K UHD display, built-in streaming apps, and voice control compatibility.
    `,
    price: 62999,
    image: '/Tv.webp'
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
 