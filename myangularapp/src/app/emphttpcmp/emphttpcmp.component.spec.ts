import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmphttpcmpComponent } from './emphttpcmp.component';

describe('EmphttpcmpComponent', () => {
  let component: EmphttpcmpComponent;
  let fixture: ComponentFixture<EmphttpcmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmphttpcmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmphttpcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
