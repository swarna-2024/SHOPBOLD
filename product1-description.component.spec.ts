import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product1DescriptionComponent } from './product1-description.component';

describe('Product1DescriptionComponent', () => {
  let component: Product1DescriptionComponent;
  let fixture: ComponentFixture<Product1DescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product1DescriptionComponent,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product1DescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
