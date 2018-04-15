import {Directive, HostListener, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[caClickAndStop]'
})
export class ClickAndStopDirective {
  @Output() caClickAndStop = new EventEmitter<MouseEvent>();
  constructor() {

  }

  @HostListener('click', ['$event'])
  onClick(e: MouseEvent){
  e.stopPropagation();
  this.caClickAndStop.emit(e);
  console.log('clicked');
  }
}
