import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneplusComponent } from './oneplus.component';

describe('OneplusComponent', () => {
  let component: OneplusComponent;
  let fixture: ComponentFixture<OneplusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneplusComponent,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
