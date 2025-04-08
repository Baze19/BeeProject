import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiodunComponent } from './biodun.component';

describe('BiodunComponent', () => {
  let component: BiodunComponent;
  let fixture: ComponentFixture<BiodunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiodunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiodunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
