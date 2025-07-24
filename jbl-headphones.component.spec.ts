import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JblHeadphonesComponent } from './jbl-headphones.component';

describe('JblHeadphonesComponent', () => {
  let component: JblHeadphonesComponent;
  let fixture: ComponentFixture<JblHeadphonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JblHeadphonesComponent,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JblHeadphonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
