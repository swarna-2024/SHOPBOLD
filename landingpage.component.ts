import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {
  constructor(private router: Router) {}

  goToSignup() {
    this.router.navigate(['/signup']);
  }

  goToElectronics() {
  this.router.navigate(['/electronics']);
}



  products = [
    { name: 'Sony Alpha ILCE-6700M APS-C Interchangeable-Lens Mirrorless Camera', price: 29.99, image:'/Camera.jpg', description: 'APS-C format Exmor R CMOS sensor with approximately 26.0 effective megapixels. Innovative AI processing unit for enhanced subject recognition'},
    { name: 'Samsung Galaxy Tab S9 FE+ 31.50 cm (12.4 inch) Display', price: 29.99, image:'/Tab.jpg', description:'Outstanding vividness with 31.50 cm (12.4”) display, 90 Hz Refresh Rate, 2560 x 1600 (WQXGA,244 PPI). Powerful Performance with Exynos 1380 chip' },
    { name: 'Noise Pulse 2 Max 1.85" Display, Bluetooth Calling Smart Watch', price: 39.99, image:'/Smartwatch.jpg', description:' See everyday data clearly under the brightest sun on the 1.85. TFT LCD that sports 550 nits of brightness and the highest screen-to-body ratio'},
    { name: 'boAt Stone 352/358 Bluetooth Speaker with 10W RMS Stereo Sound', price: 19.99, image:'/Speaker.jpg', description:'Power- Get ready to be enthralled by the 10W RMS stereo sound on Stone 352 portable wireless speakers.' },
    { name: 'Acer Nitro V 16, Intel Core i5-14th Gen 14450HX Processor', price: 29.99, image:'/Laptop.jpg', description:' Intel Core i5-14450HX processor - 10 cores, max turbo up to 4.8 Ghz | RAM : 16 GB of DDR5 system memory, upgradable to 32 GB (Memory Frequency: Up to 5600 MT/s)' },
    { name: 'Boult Audio Z40 True Wireless in Ear Earbuds with 60H Playtime', price: 39.99, image:'/Earpods.jpg', description:'60 hours of continuous playtime on a single charge, ensuring you can enjoy your music, podcasts, or calls for days without needing a recharge.' }
  ];


 product = [
  {
    name: 'Sofa',
    description: '3 Seater Sofas',
    price: 999,
    image: 'f2image.png',
  },
  {
    name: 'Study Table',
    description: 'Sturdy Desk for Home',
    price: 799,
    image: 'Studytable.jpg'
  },
  {
    name: 'Wadrobe',
    description: 'Space Saver Wadrobes',
    price: 1299,
    image: 'f3image.png'
  },
  {
    name: 'Dining Table',
    description: 'Stainless steel pot',
    price: 1299,
    image: 'Diningtable.jpg'
  },
  {
    name: 'Bed',
    description: 'Modern Wooden Bed',
    price: 1299,
    image: 'Bed.jpg'
  },
  {
    name: 'Office Chairs',
    description: 'Spin and Pretend like its part of your workflow',
    price: 1299,
    image: '/f1image.png'
  }
];

currentIndex = 0;

@ViewChild('carouselTrack', { static: false }) track!: ElementRef;

prev() {
  if (this.currentIndex > 0) {
    this.currentIndex--;
    this.scrollToCurrent();
  }
}

next() {
  if (this.currentIndex < this.product.length - 1) {
    this.currentIndex++;
    this.scrollToCurrent();
  }
}

scrollToCurrent() {
  const trackel = this.track.nativeElement;
  const child = trackel.children[this.currentIndex];
  if (child) {
    child.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  }
}

}
