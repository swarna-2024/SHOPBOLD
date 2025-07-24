import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiseHeadphonesComponent } from './noise-headphones.component';

describe('NoiseHeadphonesComponent', () => {
  let component: NoiseHeadphonesComponent;
  let fixture: ComponentFixture<NoiseHeadphonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoiseHeadphonesComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoiseHeadphonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
