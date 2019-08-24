import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {

  constructor(private elem:ElementRef) {}
  @HostListener("click") onClicks(){
    this.background("Red")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.background("None")
  }
  private background(action:string){
    this.elem.nativeElement.style.background = 'action';
  }

}
