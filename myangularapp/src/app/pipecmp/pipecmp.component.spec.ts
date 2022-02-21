import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipecmpComponent } from './pipecmp.component';

describe('PipecmpComponent', () => {
  let component: PipecmpComponent;
  let fixture: ComponentFixture<PipecmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipecmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipecmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
