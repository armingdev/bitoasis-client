import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PairsDetailsComponent } from './pairs-details.component';

describe('PairsDetailsComponent', () => {
  let component: PairsDetailsComponent;
  let fixture: ComponentFixture<PairsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PairsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PairsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
