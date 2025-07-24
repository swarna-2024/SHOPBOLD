import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product3DescriptionComponent } from './product3-description.component';

describe('Product3DescriptionComponent', () => {
  let component: Product3DescriptionComponent;
  let fixture: ComponentFixture<Product3DescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product3DescriptionComponent,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product3DescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
