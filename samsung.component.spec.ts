import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsungComponent } from './samsung.component';

describe('SamsungComponent', () => {
  let component: SamsungComponent;
  let fixture: ComponentFixture<SamsungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamsungComponent,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamsungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
