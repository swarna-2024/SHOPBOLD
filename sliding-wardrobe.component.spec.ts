import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SlidingWardrobeComponent } from './sliding-wardrobe.component';

describe('SlidingWardrobeComponent', () => {
  let component: SlidingWardrobeComponent;
  let fixture: ComponentFixture<SlidingWardrobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidingWardrobeComponent,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidingWardrobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
