import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective {
  @Input() appCustomdirective: string='';

  constructor(private elementRef:ElementRef ) {}

  @HostListener('mouseenter') mouseEnter(){
    this.elementRef.nativeElement.style.fontWeight="bold";
    this.elementRef.nativeElement.style.backgroundColor="yellow";
    console.log(this.appCustomdirective)
  }

  @HostListener('mouseleave') mouseOut(){
    this.elementRef.nativeElement.style.fontWeight="normal";
    this.elementRef.nativeElement.style.backgroundColor="initial";
  }

  

}
