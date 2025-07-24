import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxeSofaComponent } from './luxe-sofa.component';

describe('LuxeSofaComponent', () => {
  let component: LuxeSofaComponent;
  let fixture: ComponentFixture<LuxeSofaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuxeSofaComponent,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuxeSofaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
