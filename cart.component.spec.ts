import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../auth.service';
import { Component } from '@angular/core';
import { Subject, of } from 'rxjs';

// ✅ Mock HeaderComponent as a standalone component
@Component({
  selector: 'app-header',
  standalone: true,
  template: ''
})
class MockHeaderComponent {}

// ✅ Create a mock router with observable events
const routerEvents$ = new Subject<any>();

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let mockRouter: any;
  let mockAuthService: any;

  beforeEach(async () => {
    mockRouter = {
      navigate: jasmine.createSpy('navigate'),
      events: routerEvents$
    };

    mockAuthService = {
      isLoggedIn: jasmine.createSpy('isLoggedIn').and.returnValue(true),
      getLoggedInEmail: jasmine.createSpy('getLoggedInEmail').and.returnValue('test@example.com'), // ✅ Added
      logout: jasmine.createSpy('logout') 
    };

    await TestBed.configureTestingModule({
      imports: [
        CartComponent,
        HttpClientTestingModule,
        MockHeaderComponent
      ],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: AuthService, useValue: mockAuthService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load cart from localStorage', () => {
    const mockCart = [{ name: 'Item1', price: 100, quantity: 2 }];
    localStorage.setItem('cart', JSON.stringify(mockCart));
    component.loadCart();
    expect(component.cartItems.length).toBe(1);
    expect(component.cartItems[0].name).toBe('Item1');
  });

  it('should calculate total correctly', () => {
    component.cartItems = [
      { price: 100, quantity: 2 },
      { price: 50, quantity: 1 }
    ];
    expect(component.getTotal()).toBe(250);
  });

  it('should increase quantity and update localStorage', () => {
    component.cartItems = [{ price: 100, quantity: 1 }];
    spyOn(localStorage, 'setItem');
    component.increaseQuantity(0);
    expect(component.cartItems[0].quantity).toBe(2);
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('should decrease quantity and update localStorage', () => {
    component.cartItems = [{ price: 100, quantity: 2 }];
    spyOn(localStorage, 'setItem');
    component.decreaseQuantity(0);
    expect(component.cartItems[0].quantity).toBe(1);
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('should not decrease quantity below 1', () => {
    component.cartItems = [{ price: 100, quantity: 1 }];
    spyOn(localStorage, 'setItem');
    component.decreaseQuantity(0);
    expect(component.cartItems[0].quantity).toBe(1);
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });

  it('should remove item and update localStorage', () => {
    component.cartItems = [{ name: 'Item1', quantity: 1 }];
    spyOn(localStorage, 'setItem');
    component.removeItem(0);
    expect(component.cartItems.length).toBe(0);
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('should navigate to signin if not logged in', () => {
    mockAuthService.isLoggedIn.and.returnValue(false);
    component.cartItems = [{ price: 100, quantity: 1 }];
    spyOn(window, 'alert');
    component.goToPayment();
    expect(window.alert).toHaveBeenCalledWith('Please log in to proceed to payment.');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/signin']);
  });

  it('should alert if cart is empty', () => {
    component.cartItems = [];
    spyOn(window, 'alert');
    component.goToPayment();
    expect(window.alert).toHaveBeenCalledWith('Your cart is empty. Please add items before proceeding to payment.');
  });

  it('should navigate to payments with cart data if logged in and cart is not empty', () => {
    component.cartItems = [{ price: 100, quantity: 1 }];
    component.goToPayment();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/payments'], {
      state: { cartItems: component.cartItems, total: component.getTotal() }
    });
  });
});
