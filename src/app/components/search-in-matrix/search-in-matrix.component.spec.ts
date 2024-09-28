import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInMatrixComponent } from './search-in-matrix.component';

describe('SearchInMatrixComponent', () => {
  let component: SearchInMatrixComponent;
  let fixture: ComponentFixture<SearchInMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchInMatrixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchInMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
