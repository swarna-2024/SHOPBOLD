import { HeaderComponent } from './../header/header.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-order-confirmation',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  order: any;
 
  constructor(private router: Router, private http: HttpClient) {}
 
  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    const stateOrder = nav?.extras?.state?.['order'];
 
    if (stateOrder) {
      this.order = stateOrder;
    } else {
 
      this.http.get<any[]>('http://localhost:3000/orders').subscribe(data => {
        this.order = data[data.length - 1];
      });
    }
 
 
    localStorage.removeItem('cart');
  }
}