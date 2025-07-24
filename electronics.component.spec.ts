import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElectronicsComponent } from './electronics.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ElectronicsComponent', () => {
  let component: ElectronicsComponent;
  let fixture: ComponentFixture<ElectronicsComponent>;

  const mockActivatedRoute = {
    queryParams: of({ category: 'all' }) // or any category you want to test
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectronicsComponent, HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ElectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
