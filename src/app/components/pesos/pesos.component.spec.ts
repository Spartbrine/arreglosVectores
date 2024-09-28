import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesosComponent } from './pesos.component';

describe('PesosComponent', () => {
  let component: PesosComponent;
  let fixture: ComponentFixture<PesosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
