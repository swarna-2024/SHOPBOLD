import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeatherChairComponent } from './leather-chair.component';

describe('LeatherChairComponent', () => {
  let component: LeatherChairComponent;
  let fixture: ComponentFixture<LeatherChairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeatherChairComponent,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeatherChairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
