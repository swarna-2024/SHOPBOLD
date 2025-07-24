import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F1DescComponent } from './f1-desc.component';

describe('F1DescComponent', () => {
  let component: F1DescComponent;
  let fixture: ComponentFixture<F1DescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F1DescComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F1DescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
