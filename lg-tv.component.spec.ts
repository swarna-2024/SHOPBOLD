import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgTvComponent } from './lg-tv.component';

describe('LgTvComponent', () => {
  let component: LgTvComponent;
  let fixture: ComponentFixture<LgTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LgTvComponent,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LgTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
