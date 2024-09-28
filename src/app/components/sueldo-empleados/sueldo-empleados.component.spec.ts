import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SueldoEmpleadosComponent } from './sueldo-empleados.component';

describe('SueldoEmpleadosComponent', () => {
  let component: SueldoEmpleadosComponent;
  let fixture: ComponentFixture<SueldoEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SueldoEmpleadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SueldoEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
