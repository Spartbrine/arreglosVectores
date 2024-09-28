import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertArrayComponent } from './invert-array.component';

describe('InvertArrayComponent', () => {
  let component: InvertArrayComponent;
  let fixture: ComponentFixture<InvertArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvertArrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvertArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
