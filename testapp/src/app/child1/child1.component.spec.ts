import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1Component } from './child1.component';
import {Parent1Component} from './parent1.component';

describe('Child1Component', () => {
  let component: Child1Component;
  let fixture: ComponentFixture<Child1Component>;
  let fixturep:ComponentFixture<Parent1Component>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child1Component,Parent1Component ]
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child1Component);
    fixturep=TestBed.createComponent(Parent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


it('should render message', () => {
  const fixture = TestBed.createComponent(Parent1Component);
  fixture.detectChanges();
  const compiled = fixture.nativeElement as HTMLElement;
  expect(compiled.querySelector('.p')?.textContent).toContain('Ths message received from parent cmp is');
});

