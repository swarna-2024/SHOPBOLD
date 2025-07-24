import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // ✅ Import this
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
 
@Component({
  selector: 'app-electronics',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})
export class ElectronicsComponent {
  allElectronics = [
    {
      image: '/HeadPhones.png',
      title: 'boAt Rockerz 450 w/40mm Drivers...',
      category: 'headphones',
      price: 1399,
      mrp: 3990,
      discount: 64,
      rating: 4.3,
      reviews: 40872,
      sales: 300,
      isDeal: true,
      delivery: 'FREE delivery Tue, 22 Jul • Fastest: Sun, 20 Jul'
    },
    {
      image: 'NoiseWireless.png', // Replace with your image file
      title: 'NoiseTune H1 Wireless Headphones w/ENC...',
      category: 'headphones',
      price: 1799,
      mrp: 4999,
      discount: 64,
      rating: 4.5,
      reviews: 15234,
      sales: 450,
      isDeal: true,
      delivery: 'FREE delivery Wed, 23 Jul • Fastest: Mon, 21 Jul'
    },
    {
      image: 'JBLBass.png', // Replace with your image file
      title: 'JBL BassBoost Wired Over-Ear Headphones...',
      category: 'headphones',
      price: 1099,
      mrp: 2699,
      discount: 59,
      rating: 4.2,
      reviews: 9874,
      sales: 280,
      isDeal: true,
      delivery: 'FREE delivery Thu, 24 Jul • Fastest: Tue, 22 Jul'
    },
   
   
    {
      image: '/Phone.png',
      title: 'Apple iPhone 14...',
      category: 'phone',
      price: 80000,
      mrp: 89900,
      discount: 11,
      rating: 4.6,
      reviews: 5123,
      sales: 1200,
      isDeal: true,
      delivery: 'FREE delivery Mon, 21 Jul • Fastest: Sat, 19 Jul'
    },{
      image: '/samsung.jpg',
      title: 'Samsung Galaxy M35 5G...',
      category: 'phone',
      price: 18999,
      mrp: 24999,
      discount: 24,
      rating: 4.2,
      reviews: 2897,
      sales: 870,
      isDeal: true,
      delivery: 'FREE delivery Thu, 24 Jul • Fastest: Tue, 22 Jul'
    },
   
    {
      image: '/oneplus.jpg',
      title: 'OnePlus Nord...',
      category: 'phone',
      price: 17996,
      mrp: 23999,
      discount: 24,
      rating: 4.9,
      reviews: 61897,
      sales: 350,
      isDeal: true,
      delivery: 'FREE delivery Fri, 25 Jul • Fastest: Wed, 23 Jul'
    },
   
    {
      image: '/Tv.webp',
      title: 'Samsung 43" Smart LED TV...',
      category: 'tv',
      price: 35000,
      mrp: 45990,
      discount: 24,
      rating: 4.2,
      reviews: 2897,
      sales: 650,
      isDeal: true,
      delivery: 'FREE delivery Wed, 23 Jul • Fastest: Mon, 21 Jul'
    },
    {
      image: '/SonyTV.png',
      title: 'Sony Bravia 55" 4K Ultra HD Smart TV...',
      category: 'tv',
      price: 62000,
      mrp: 74990,
      discount: 17,
      rating: 4.5,
      reviews: 1345,
      sales: 900,
      isDeal: true,
      delivery: 'FREE delivery Thu, 24 Jul • Fastest: Tue, 22 Jul'
    },
    {
      image: '/LGTV.png',
      title: 'LG OLED 48" Smart TV (2025 Model)...',
      category: 'tv',
      price: 56000,
      mrp: 69999,
      discount: 20,
      rating: 4.4,
      reviews: 827,
      sales: 500,
      isDeal: true,
      delivery: 'FREE delivery Fri, 25 Jul • Fastest: Wed, 23 Jul'
    }
   
  ];
 
  electronics = [...this.allElectronics];
 
  // ✅ Inject ActivatedRoute
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      if (category && category !== 'all') {
        this.filterCategory(category);
      } else {
        this.showAll();
      }
    });
  }
 
  filterCategory(category: string) {
    this.electronics = this.allElectronics.filter(item => item.category === category);
  }
 
  showAll() {
    this.electronics = [...this.allElectronics];
  }
 
 
}
 