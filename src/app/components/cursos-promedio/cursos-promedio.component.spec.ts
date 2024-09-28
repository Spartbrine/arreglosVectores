import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosPromedioComponent } from './cursos-promedio.component';

describe('CursosPromedioComponent', () => {
  let component: CursosPromedioComponent;
  let fixture: ComponentFixture<CursosPromedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosPromedioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosPromedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
