import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FurnitureComponent } from './furniture.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FurnitureComponent', () => {
  let component: FurnitureComponent;
  let fixture: ComponentFixture<FurnitureComponent>;

  const mockActivatedRoute = {
    queryParams: of({ category: 'all' }) // or any category you want to test
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FurnitureComponent, HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
