import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFormatterComponent } from './category-formatter.component';

describe('CategoryFormatterComponent', () => {
  let component: CategoryFormatterComponent;
  let fixture: ComponentFixture<CategoryFormatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryFormatterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
