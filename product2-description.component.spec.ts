import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product2DescriptionComponent } from './product2-description.component';

describe('Product2DescriptionComponent', () => {
  let component: Product2DescriptionComponent;
  let fixture: ComponentFixture<Product2DescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product2DescriptionComponent,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product2DescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
