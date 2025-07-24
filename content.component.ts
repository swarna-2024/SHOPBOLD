import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  products = [
    { name: 'Running Shoes', price: 59.99 },
    { name: 'Casual Sneakers', price: 49.99 },
    { name: 'Formal Shoes', price: 89.99 }
  ];
}
