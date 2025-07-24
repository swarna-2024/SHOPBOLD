import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HingedWardrobeComponent } from './hinged-wardrobe.component';

describe('HingedWardrobeComponent', () => {
  let component: HingedWardrobeComponent;
  let fixture: ComponentFixture<HingedWardrobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HingedWardrobeComponent,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HingedWardrobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
