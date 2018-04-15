import {Directive, Input, HostListener, HostBinding, Renderer2, ElementRef} from '@angular/core';

@Directive({
  selector: '[caScrollDetect]',
 })
export class ScrollDetectDirective {
  @Input() caScrollClass: string;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.scrollY > 10 && window.scrollY < 500 ){
      this.renderer.addClass(this.el.nativeElement, this.caScrollClass);
    }
    else {
      this.renderer.removeClass(this.el.nativeElement, this.caScrollClass);

    }
    //console.count("scrolling...");
  }

  /*@HostBinding('class')
  get elementClass(): string {
    return this._elementClass.join(' ');
  }*/

  constructor(private renderer: Renderer2, private el: ElementRef) {

  }


}
