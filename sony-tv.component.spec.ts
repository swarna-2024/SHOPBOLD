import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonyTvComponent } from './sony-tv.component';

describe('SonyTvComponent', () => {
  let component: SonyTvComponent;
  let fixture: ComponentFixture<SonyTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SonyTvComponent,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonyTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
