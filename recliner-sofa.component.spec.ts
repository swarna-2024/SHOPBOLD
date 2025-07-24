import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclinerSofaComponent } from './recliner-sofa.component';

describe('ReclinerSofaComponent', () => {
  let component: ReclinerSofaComponent;
  let fixture: ComponentFixture<ReclinerSofaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReclinerSofaComponent,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclinerSofaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
