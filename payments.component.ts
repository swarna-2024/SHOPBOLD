import { HeaderComponent } from './../header/header.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {
  total: number = 0;
  paymentMethod: string = 'card';

  cardNumber: string = '';
  cardHolder: string = '';
  expiryDate: string = '';
  cvv: string = '';

  delivery = {
    fullName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    postalCode: ''
  };

  cartItems = [
    {
      name: 'Wireless Headphones',
      price: 2499,
      image: 'assets/Product1.png',
      quantity: 1
    }
  ];

  constructor(private router: Router, private http: HttpClient) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state;
    this.cartItems = state?.['cartItems'] || this.cartItems;
    this.total = state?.['total'] || this.getTotal();
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  placeOrder() {
    if (!this.validateForm()) {
      alert('Please fill all required fields correctly.');
      return;
    }

    const order = {
      cart: this.cartItems,
      total: this.getTotal(),
      paymentMethod: this.paymentMethod,
      cardDetails: this.paymentMethod === 'card' ? {
        cardNumber: this.cardNumber,
        cardHolder: this.cardHolder,
        expiryDate: this.expiryDate,
        cvv: this.cvv
      } : null,
      delivery: this.delivery
    };

    this.http.post('http://localhost:3000/orders', order).subscribe({
      next: (response) => {
        this.router.navigate(['/order-confirmation'], {
          state: { order: response }
        });
      },
      error: (err) => {
        console.error('Order submission failed:', err);
        alert('Order submission failed. Please try again.');
      }
    });
  }

  validateForm(): boolean {
    if (this.paymentMethod === 'card') {
      const cleanedCard = this.cardNumber.replace(/\s/g, '');
      const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
      const cvvRegex = /^\d{3}$/;

      const isCardValid =
        cleanedCard.length === 16 &&
        expiryRegex.test(this.expiryDate) &&
        cvvRegex.test(this.cvv) &&
        this.cardHolder.trim().length > 0;

      if (!isCardValid) return false;
    }

    const { fullName, email, phone, street, city, state, postalCode } = this.delivery;
    const postalCodeRegex = /^\d{6}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    const isDeliveryValid =
      fullName.trim().length > 0 &&
      emailRegex.test(email) &&
      phoneRegex.test(phone) &&
      street.trim().length > 0 &&
      city.trim().length > 0 &&
      state.trim().length > 0 &&
      postalCodeRegex.test(postalCode);

    return isDeliveryValid;
  }

  formatExpiryDate(): void {
    if (!this.expiryDate) return;

    let cleaned = this.expiryDate.replace(/[^0-9]/g, '').slice(0, 4);
    let month = cleaned.substring(0, 2);
    if (parseInt(month) > 12) month = '12';
    let year = cleaned.substring(2, 4);
    this.expiryDate = year ? `${month}/${year}` : month;
  }

  formatCardNumber(): void {
    if (!this.cardNumber) return;

    const cleaned = this.cardNumber.replace(/\D/g, '').slice(0, 16);
    const groups = cleaned.match(/.{1,4}/g);
    this.cardNumber = groups ? groups.join(' ') : '';
  }

  isCardNumberValid(): boolean {
    return this.cardNumber.replace(/\s/g, '').length === 16;
  }

  isCardHolderValid(): boolean {
    return this.cardHolder.trim().length > 0;
  }

  isExpiryValid(): boolean {
    return /^(0[1-9]|1[0-2])\/\d{2}$/.test(this.expiryDate);
  }

  isCVVValid(): boolean {
    return /^\d{3}$/.test(this.cvv);
  }

  isPostalCodeValid(): boolean {
    return /^\d{6}$/.test(this.delivery.postalCode);
  }

  isEmailValid(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.delivery.email);
  }

  isPhoneValid(): boolean {
  return /^[6-9]\d{9}$/.test(this.delivery.phone);
}

}
