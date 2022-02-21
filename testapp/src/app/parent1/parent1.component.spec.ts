import { ParentcmpComponent } from './parentcmp.component';

describe('ParentcmpComponent', () => {
  let component: ParentcmpComponent;
  let fixture: ComponentFixture<ParentcmpComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentcmpComponent,ChildcmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentcmpComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render paragraph',() => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('p')?.textContent).toContain('Message from parent');
  });

});