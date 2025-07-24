import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
 
@Component({
  selector: 'app-furniture',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './furniture.component.html',
  styleUrl: './furniture.component.css'
})
export class FurnitureComponent {
  allFurniture = [
    {
      image: '/f1image.png',
      title: 'High Back Cushioned Chair\nErgonomic Design & Comfort\nIdeal for Office Use',
      category: 'chair',
      rating: 4.6,
      reviews: 3210,
      ratingsCount: 12345,
      price: 12999,
      mrp: 18999,
      discount: 32,
      isDeal: true,
      delivery: 'FREE delivery Thu, 25 Jul • Fastest: Tue, 23 Jul',
      description: `This stylish and comfortable sofa set is perfect for modern homes. Upholstered in high-quality fabric, it offers both elegance and durability.`,
      features: [
        '🛋️ High-quality fabric upholstery',
        '📏 Dimensions: 200cm x 90cm x 85cm',
        '🧼 Easy to clean and maintain',
        '🪑 Includes 3-seater and 2-seater units',
        '🏠 Ideal for living rooms and lounges'
      ]
    },
   
    {
      image: 'leatherChair.png', // You’ll provide this image
      title: 'Leather Executive Chair\nLuxurious & Sturdy\nPerfect for Office & Study',
      category: 'chair',
      rating: 4.8,
      reviews: 2567,
      ratingsCount: 9901,
      price: 13999,
      mrp: 19999,
      discount: 30,
      isDeal: true,
      delivery: 'FREE delivery Tue, 29 Jul • Fastest: Sun, 27 Jul',
      description: `A premium high-back leather chair built for comfort and style. Ideal for professional setups and personal offices.`,
      features: [
        '🛋️ Premium leather finish',
        '⚙️ Hydraulic lift and tilt-lock system',
        '🪵 Chrome-plated metal base',
        '🎯 High back with ergonomic lumbar support',
        '🧰 Assembly required (manual provided)'
      ]
    },
    {
      image: 'meshChair.png', // You’ll provide this image
      title: 'Mesh Ergonomic Office Chair\nBreathable & Adjustable\nIdeal for Work-from-Home Setup',
      category: 'chair',
      rating: 4.5,
      reviews: 1980,
      ratingsCount: 8220,
      price: 8999,
      mrp: 12999,
      discount: 31,
      isDeal: true,
      delivery: 'FREE delivery Mon, 28 Jul • Fastest: Sat, 26 Jul',
      description: `Designed with breathable mesh and lumbar support, this chair keeps you cool and comfortable for long working hours.`,
      features: [
        '🌬️ Breathable mesh backrest',
        '🪑 Adjustable seat height and tilt',
        '🔧 Sturdy metal base with nylon wheels',
        '🔄 360-degree swivel function',
        '🧰 DIY assembly tools included'
      ]
    },  
    {
      image: '/f2image.png',
      title: 'Modern Fabric Sofa Set\nElegant & Durable\nPerfect for Living Rooms',
      category: 'sofa',
      rating: 4.7,
      reviews: 2145,
      ratingsCount: 8432,
      price: 15999,
      mrp: 22999,
      discount: 30,
      isDeal: true,
      delivery: 'FREE delivery Wed, 24 Jul • Fastest: Mon, 22 Jul',
      description: `This elegant wardrobe is crafted from high-quality wood and features spacious compartments for organized storage. Its sleek design complements modern interiors.`,
      features: [
        '🚪 3-door design with mirror panel',
        '🧥 Hanging space and adjustable shelves',
        '🪵 Made from solid engineered wood',
        '📦 Large drawers for extra storage',
        '🎨 Walnut finish for a premium look'
      ]
    },
    {
      image: 'luxesofa.png', // add your own image here
      title: 'Luxe Velvet 3-Seater Sofa\nChic & Plush Comfort\nPerfect for Stylish Interiors',
      category: 'sofa',
      rating: 4.6,
      reviews: 1780,
      ratingsCount: 7023,
      price: 18999,
      mrp: 26999,
      discount: 30,
      isDeal: true,
      delivery: 'FREE delivery Fri, 26 Jul • Fastest: Wed, 24 Jul',
      description: `This luxurious velvet sofa offers an elegant design with plush seating and detailed tufting. Built to elevate any modern home with both style and comfort.`,
      features: [
        '🛋️ Velvet upholstery with button tufted accents',
        '📏 Dimensions: 210cm x 85cm x 80cm',
        '🧼 Stain-resistant and easy to maintain',
        '🪑 Includes removable cushions for flexibility',
        '🎨 Available in royal blue and maroon finishes'
      ]
    },
    {
      image: 'recliner.png', // add your own image here
      title: 'Convertible Recliner Sofa\nComfort Meets Innovation\nGreat for Relaxation Zones',
      category: 'sofa',
      rating: 4.8,
      reviews: 2354,
      ratingsCount: 8921,
      price: 22999,
      mrp: 31999,
      discount: 28,
      isDeal: true,
      delivery: 'FREE delivery Sat, 27 Jul • Fastest: Thu, 25 Jul',
      description: `Unwind like never before with this reclining sofa that shifts into lounge mode with ease. Its ergonomic contours and soft padding provide the ultimate movie-night experience.`,
      features: [
        '🧘‍♂️ Reclining back and adjustable footrest',
        '🪵 Sturdy hardwood frame with soft foam layers',
        '🧵 Faux leather covering with contrast stitching',
        '🔧 Easy-to-use manual recline lever',
        '🪑 Dual cup holders and center storage console'
      ]
    },
   
    {
      image: '/f3image.png',
      title: 'Premium Wooden Wardrobe\nSpacious & Stylish Storage\nPerfect for Modern Interiors',
      category: 'wardrobe',
      rating: 4.6,
      reviews: 3210,
      ratingsCount: 12345,
      price: 4999,
      mrp: 7999,
      discount: 38,
      isDeal: true,
      delivery: 'FREE delivery Tue, 23 Jul • Fastest: Sun, 21 Jul',
      description: `Adiko High Back Executive Office chair consisting of cushioned seat & back, center-tilt mechanism, Hydraulic mechanism for adjustment of seat height, chrome plated metal base & Nylon wheels.`,
      features: [
        '🪵 Frame Material: Engineered Wood',
        '📏 W x H: 53 cm x 110 cm (1 ft 8 in x 3 ft 7 in)',
        '🎨 Upholstery Type: Cushion',
        '🛠️ DIY assembly with simple tools and instructions'
      ]
    },
    {
      image: '/sliding.png', // Add your custom image here
      title: 'Elegant Sliding Door Wardrobe\nSpace-Saving & Modern Finish\nIdeal for Urban Homes',
      category: 'wardrobe',
      rating: 4.7,
      reviews: 2789,
      ratingsCount: 10450,
      price: 11999,
      mrp: 17999,
      discount: 33,
      isDeal: true,
      delivery: 'FREE delivery Wed, 24 Jul • Fastest: Mon, 22 Jul',
      description: `Maximize bedroom space with this elegant sliding door wardrobe. Finished in matte walnut, it offers smooth operation and ample internal storage.`,
      features: [
        '🚪 Dual sliding doors for compact access',
        '🧥 Multiple hanging sections with hanger rods',
        '📦 Built-in drawers and shoe racks',
        '🪵 Premium engineered wood construction',
        '🎨 Matte walnut finish with metal trim'
      ]
    },{
      image: 'hinged.png', // Add your custom image here
      title: 'Classic Hinged Wardrobe with Mirror\nFunctional & Aesthetic\nPerfect for Bedroom Organization',
      category: 'wardrobe',
      rating: 4.5,
      reviews: 1920,
      ratingsCount: 8890,
      price: 9999,
      mrp: 14999,
      discount: 33,
      isDeal: true,
      delivery: 'FREE delivery Thu, 25 Jul • Fastest: Tue, 23 Jul',
      description: `Blending elegance with utility, this classic wardrobe features a full-length mirror, spacious compartments, and durable hinged doors.`,
      features: [
        '🪞 Full-length mirror on center panel',
        '🚪 3 hinged doors with soft-close mechanism',
        '🧥 Adjustable shelving and hanging space',
        '🪵 Solid board core for lasting durability',
        '🎨 Available in wenge and oak finishes'
      ]
    }
   
   
  ];
 
  furniture = [...this.allFurniture];
 
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      if (category && category !== 'all') {
        this.filterCategory(category);
      } else {
        this.showAll(); // ✅ Show all by default
      }
    });
  }
 
  filterCategory(category: string) {
    this.furniture = this.allFurniture.filter(item => item.category === category);
  }
 
  showAll() {
    this.furniture = [...this.allFurniture];
  }
}