import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeshChairComponent } from './mesh-chair.component';

describe('MeshChairComponent', () => {
  let component: MeshChairComponent;
  let fixture: ComponentFixture<MeshChairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeshChairComponent,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeshChairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
